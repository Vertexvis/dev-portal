import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import { execFileSync } from 'child_process';
import * as path from 'path';

// CDK project root (deploy/cdk/); __dirname is deploy/cdk/lib
const CDK_DIR = path.join(__dirname, '..');
const ESBUILD_BIN = path.join(CDK_DIR, 'node_modules', '.bin', 'esbuild');

// Bundle a Lambda entry point using the local esbuild binary directly — this
// avoids going through npm/npx, which would fail due to the root package.json
// using a Yarn-style workspaces object that npm cannot parse.
function bundleCode(lambdaName: string): lambda.Code {
  const lambdaDir = path.join(CDK_DIR, 'lambda', lambdaName);
  const entryFile = path.join(lambdaDir, 'index.ts');
  return lambda.Code.fromAsset(lambdaDir, {
    bundling: {
      // Docker image is the fallback if local bundling fails
      image: lambda.Runtime.NODEJS_18_X.bundlingImage,
      local: {
        tryBundle(outputDir: string): boolean {
          try {
            execFileSync(ESBUILD_BIN, [
              entryFile,
              '--bundle',
              '--target=node18',
              '--platform=node',
              `--outfile=${path.join(outputDir, 'index.js')}`,
              '--minify',
              '--external:@aws-sdk/*',
            ], { stdio: ['ignore', 'inherit', 'inherit'] });
            return true;
          } catch {
            return false;
          }
        },
      },
    },
  });
}

const PROD_DOMAIN = 'developer.vertex3d.com';
const HOSTED_ZONE_NAME = 'vertex3d.com';
const GITHUB_PAGES_DOMAIN = 'vertexvis.github.io';
const REGION = 'us-east-1';

// Wildcard *.vertex3d.com cert in ops/us-east-1 (covers vertex3d.com + *.vertex3d.com).
const OPS_ACM_CERT_ARN =
  'arn:aws:acm:us-east-1:396783039869:certificate/6a6280da-071b-45dd-8786-3b211049ffb1';

export class DevPortalAuthStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Pass --context testDomain=developer-preview.vertex3d.com to deploy in test
    // mode without touching the live developer.vertex3d.com Route53 record.
    // Omit the flag (or set it to the prod domain) for a production deploy.
    const testDomain: string | undefined = this.node.tryGetContext('testDomain');
    const DOMAIN_NAME = testDomain ?? PROD_DOMAIN;

    // Cognito config — pass via context for each environment:
    //   --context cognitoUserPoolId=us-west-2_Uv70W2uhX
    //   --context cognitoClientId=7olhnh4hqsb232q3l4kenp57ef
    //   --context cognitoDomain=https://vertex-dev-default.auth.us-west-2.amazoncognito.com
    const cognitoUserPoolId: string = this.node.tryGetContext('cognitoUserPoolId');
    const cognitoClientId: string = this.node.tryGetContext('cognitoClientId');
    const cognitoDomain: string = this.node.tryGetContext('cognitoDomain');

    if (!cognitoUserPoolId || !cognitoClientId || !cognitoDomain) {
      throw new Error(
        'Required context missing. Pass --context cognitoUserPoolId=... cognitoClientId=... cognitoDomain=...'
      );
    }

    const certificate = acm.Certificate.fromCertificateArn(
      this,
      'Certificate',
      OPS_ACM_CERT_ARN
    );

    // -------------------------------------------------------------------------
    // SSM — Cognito config (read by Lambda@Edge auth function at runtime)
    // Lambda@Edge runs in us-east-1 so these params must live there.
    // -------------------------------------------------------------------------
    new ssm.StringParameter(this, 'SsmUserPoolId', {
      parameterName: '/dev-portal/cognito/user-pool-id',
      stringValue: cognitoUserPoolId,
    });
    new ssm.StringParameter(this, 'SsmClientId', {
      parameterName: '/dev-portal/cognito/client-id',
      stringValue: cognitoClientId,
    });
    new ssm.StringParameter(this, 'SsmCognitoDomain', {
      parameterName: '/dev-portal/cognito/domain',
      stringValue: cognitoDomain,
    });

    // The host-override Lambda reads this to know which Host header to send to
    // GitHub Pages. Points to the test domain during testing, prod on go-live.
    new ssm.StringParameter(this, 'SsmActiveDomain', {
      parameterName: '/dev-portal/active-domain',
      stringValue: DOMAIN_NAME,
    });

    // -------------------------------------------------------------------------
    // Lambda@Edge — viewer-request: JWT validation + Cognito PKCE redirect
    // -------------------------------------------------------------------------
    const addEdgeTrust = (fn: lambda.Function) => {
      // fn.role is typed as IRole; cast to concrete Role to access assumeRolePolicy
      (fn.role as iam.Role).assumeRolePolicy!.addStatements(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          principals: [new iam.ServicePrincipal('edgelambda.amazonaws.com')],
          actions: ['sts:AssumeRole'],
        })
      );
    };

    const authFn = new lambda.Function(this, 'AuthEdgeFn', {
      code: bundleCode('auth'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_18_X,
      description: 'Cognito PKCE auth gate for developer.vertex3d.com',
      timeout: cdk.Duration.seconds(5),
      memorySize: 128,
    });
    addEdgeTrust(authFn);
    authFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['ssm:GetParameter'],
        resources: [
          `arn:aws:ssm:${REGION}:${this.account}:parameter/dev-portal/cognito/user-pool-id`,
          `arn:aws:ssm:${REGION}:${this.account}:parameter/dev-portal/cognito/client-id`,
          `arn:aws:ssm:${REGION}:${this.account}:parameter/dev-portal/cognito/domain`,
        ],
      })
    );

    // -------------------------------------------------------------------------
    // Lambda@Edge — origin-request: override Host header for GitHub Pages
    // -------------------------------------------------------------------------
    const hostOverrideFn = new lambda.Function(this, 'HostOverrideFn', {
      code: bundleCode('host-override'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_18_X,
      description: 'Sets Host: developer.vertex3d.com for GitHub Pages origin',
      timeout: cdk.Duration.seconds(5),
      memorySize: 128,
    });
    addEdgeTrust(hostOverrideFn);

    // -------------------------------------------------------------------------
    // CloudFront Distribution
    // -------------------------------------------------------------------------
    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      comment: `Auth-gated CDN for ${DOMAIN_NAME}`,
      domainNames: [DOMAIN_NAME],
      certificate,
      defaultRootObject: 'index.html',
      httpVersion: cloudfront.HttpVersion.HTTP2_AND_3,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      defaultBehavior: {
        origin: new origins.HttpOrigin(GITHUB_PAGES_DOMAIN, {
          protocolPolicy: cloudfront.OriginProtocolPolicy.HTTPS_ONLY,
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        originRequestPolicy:
          cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
        edgeLambdas: [
          {
            functionVersion: authFn.currentVersion,
            eventType: cloudfront.LambdaEdgeEventType.VIEWER_REQUEST,
          },
          {
            functionVersion: hostOverrideFn.currentVersion,
            eventType: cloudfront.LambdaEdgeEventType.ORIGIN_REQUEST,
          },
        ],
      },
    });

    // -------------------------------------------------------------------------
    // Route53
    // -------------------------------------------------------------------------
    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {
      domainName: HOSTED_ZONE_NAME,
    });

    // Active domain → CloudFront (test subdomain during testing, prod on go-live)
    new route53.ARecord(this, 'ARecord', {
      zone: hostedZone,
      recordName: DOMAIN_NAME,
      target: route53.RecordTarget.fromAlias(
        new route53Targets.CloudFrontTarget(distribution)
      ),
    });
    new route53.AaaaRecord(this, 'AaaaRecord', {
      zone: hostedZone,
      recordName: DOMAIN_NAME,
      target: route53.RecordTarget.fromAlias(
        new route53Targets.CloudFrontTarget(distribution)
      ),
    });

    // -------------------------------------------------------------------------
    // Outputs
    // -------------------------------------------------------------------------
    new cdk.CfnOutput(this, 'CloudFrontDistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront distribution ID',
    });
  }
}
