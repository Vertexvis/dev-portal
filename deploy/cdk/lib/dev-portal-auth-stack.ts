import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as cr from 'aws-cdk-lib/custom-resources';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
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

// Cognito Hosted UI CSS — mirrors the developer.vertex3d.com design system.
// Primary: #00ade4, dark: #1c1c1c, font: Roboto (matches custom.css).
// Upload a logo separately:
//   aws cognito-idp set-ui-customization --user-pool-id <id> \
//     --client-id <clientId> --image-file fileb://logo.png --profile ops
// Cognito Hosted UI only allows its own CSS class names — no @import, no body
// selector, no rgba(), no pseudo-elements. Pseudo-classes (:hover, :focus) are OK.
const HOSTED_UI_CSS = `
.background-customizable { background-color: #ffffff; }
.banner-customizable { padding: 20px 0; background-color: #1c1c1c; }
.label-customizable { font-weight: 400; color: #252525; }
.textDescription-customizable { padding: 8px 0; font-size: 14px; color: #616161; }
.inputField-customizable { border: 1px solid #e0e0e0; border-radius: 4px; height: 42px; font-size: 15px; padding: 0 12px; width: 100%; }
.inputField-customizable:focus { border-color: #00ade4; outline: none; }
.submitButton-customizable { height: 42px; width: 100%; border-radius: 4px; border: none; font-size: 14px; font-weight: 500; color: #fff; background-color: #00ade4; margin: 16px 0 8px; cursor: pointer; }
.submitButton-customizable:hover { background-color: #0097c7; }
.errorMessage-customizable { padding: 8px; font-size: 13px; border-radius: 4px; background-color: #fde8e8; border: 1px solid #e53e3e; color: #c53030; }
.idpButton-customizable { height: 42px; width: 100%; border-radius: 4px; text-align: center; line-height: 42px; color: #fff; background-color: #1c1c1c; text-decoration: none; }
.idpButton-customizable:hover { background-color: #252525; }
.legalText-customizable { color: #9e9e9e; font-size: 12px; }
`;

export class DevPortalAuthStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Pass --context testDomain=developer-preview.vertex3d.com to deploy in test
    // mode without touching the live developer.vertex3d.com Route53 record.
    // Omit the flag (or set it to the prod domain) for a production deploy.
    const testDomain: string | undefined = this.node.tryGetContext('testDomain');
    const DOMAIN_NAME = testDomain ?? PROD_DOMAIN;
    const AUTH_SUBDOMAIN = `dev-portal-auth.vertex3d.com`;

    // Cognito callback URLs include both domains so the same User Pool and
    // test data carry over when you cut over to production — no re-registration.
    const callbackUrls = testDomain
      ? [
          `https://${testDomain}/callback`,
          `https://${PROD_DOMAIN}/callback`,
        ]
      : [`https://${PROD_DOMAIN}/callback`];
    const logoutUrls = testDomain
      ? [`https://${testDomain}`, `https://${PROD_DOMAIN}`]
      : [`https://${PROD_DOMAIN}`];

    const certificate = acm.Certificate.fromCertificateArn(
      this,
      'Certificate',
      OPS_ACM_CERT_ARN
    );

    // -------------------------------------------------------------------------
    // Cognito User Pool
    // -------------------------------------------------------------------------
    const userPool = new cognito.UserPool(this, 'UserPool', {
      userPoolName: 'dev-portal-users',
      selfSignUpEnabled: true,
      signInAliases: { email: true },
      autoVerify: { email: true },
      customAttributes: {
        // 'approved'  — set by pre-signup Lambda for allowlisted domains
        // 'pending'   — set by post-confirmation Lambda for unlisted domains
        // Pre-token generation Lambda blocks sign-in until value is 'approved'
        status: new cognito.StringAttribute({ mutable: true }),
      },
      passwordPolicy: {
        minLength: 12,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: true,
        tempPasswordValidity: cdk.Duration.days(7),
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      standardAttributes: {
        email: { required: true, mutable: true },
        givenName: { required: false, mutable: true },
        familyName: { required: false, mutable: true },
      },
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    const userPoolClient = new cognito.UserPoolClient(this, 'UserPoolClient', {
      userPool,
      userPoolClientName: 'dev-portal-client',
      generateSecret: false,
      authFlows: { userSrp: true },
      oAuth: {
        flows: { authorizationCodeGrant: true },
        scopes: [
          cognito.OAuthScope.EMAIL,
          cognito.OAuthScope.OPENID,
          cognito.OAuthScope.PROFILE,
        ],
        callbackUrls,
        logoutUrls,
      },
      preventUserExistenceErrors: true,
      accessTokenValidity: cdk.Duration.hours(1),
      idTokenValidity: cdk.Duration.hours(1),
      refreshTokenValidity: cdk.Duration.days(30),
      supportedIdentityProviders: [cognito.UserPoolClientIdentityProvider.COGNITO],
    });

    // Custom domain for the Hosted UI — dev-portal-auth.vertex3d.com is covered
    // by the existing *.vertex3d.com wildcard cert.
    const userPoolDomain = new cognito.UserPoolDomain(this, 'UserPoolDomain', {
      userPool,
      customDomain: {
        domainName: AUTH_SUBDOMAIN,
        certificate,
      },
    });

    // -------------------------------------------------------------------------
    // SSM — Cognito config (read by Lambda@Edge auth function at runtime)
    // -------------------------------------------------------------------------
    new ssm.StringParameter(this, 'SsmUserPoolId', {
      parameterName: '/dev-portal/cognito/user-pool-id',
      stringValue: userPool.userPoolId,
    });
    new ssm.StringParameter(this, 'SsmClientId', {
      parameterName: '/dev-portal/cognito/client-id',
      stringValue: userPoolClient.userPoolClientId,
    });
    new ssm.StringParameter(this, 'SsmCognitoDomain', {
      parameterName: '/dev-portal/cognito/domain',
      stringValue: `https://${AUTH_SUBDOMAIN}`,
    });

    // The host-override Lambda reads this to know which Host header to send to
    // GitHub Pages. Points to the test domain during testing, prod on go-live.
    new ssm.StringParameter(this, 'SsmActiveDomain', {
      parameterName: '/dev-portal/active-domain',
      stringValue: DOMAIN_NAME,
    });

    // -------------------------------------------------------------------------
    // SSM — Allowed domains (create-once; never overwritten by CDK after init)
    //
    // Seeds vertex3d.com and vertexvis.com. All other additions must go through
    // the /add-domain Slack command so customer domains never appear in the repo.
    // -------------------------------------------------------------------------
    new cr.AwsCustomResource(this, 'AllowedDomainsParam', {
      onCreate: {
        service: 'SSM',
        action: 'putParameter',
        parameters: {
          Name: '/dev-portal/cognito/allowed-domains',
          Value: 'vertex3d.com,vertexvis.com',
          Type: 'StringList',
          Description:
            'Email domains eligible for self-enrollment. Managed via /add-domain Slack command — do NOT edit here.',
          Overwrite: false,
        },
        // Ignore if the parameter was already created by a previous deploy
        ignoreErrorCodesMatching: 'ParameterAlreadyExists',
        physicalResourceId: cr.PhysicalResourceId.of(
          '/dev-portal/cognito/allowed-domains'
        ),
      },
      onDelete: {
        service: 'SSM',
        action: 'deleteParameter',
        parameters: { Name: '/dev-portal/cognito/allowed-domains' },
        ignoreErrorCodesMatching: 'ParameterNotFound',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: [
          `arn:aws:ssm:${REGION}:${this.account}:parameter/dev-portal/cognito/allowed-domains`,
        ],
      }),
    });

    // -------------------------------------------------------------------------
    // Secrets Manager — Slack app credentials
    //
    // After deploy, populate with:
    //   aws secretsmanager put-secret-value --secret-id dev-portal/slack \
    //     --secret-string '{"signingSecret":"<val>","botToken":"xoxb-<val>","adminChannelId":"C<val>"}' \
    //     --profile ops
    // -------------------------------------------------------------------------
    const slackSecret = new secretsmanager.Secret(this, 'SlackSecret', {
      secretName: 'dev-portal/slack',
      description:
        'Slack app credentials for dev portal access management. Populate after creating the Slack app.',
      secretStringValue: cdk.SecretValue.unsafePlainText(
        JSON.stringify({
          signingSecret: 'REPLACE_ME',
          botToken: 'REPLACE_ME',
          adminChannelId: 'REPLACE_ME',
        })
      ),
    });

    // -------------------------------------------------------------------------
    // Shared Lambda config helpers
    // -------------------------------------------------------------------------
    const cognitoTriggerDefaults = {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      timeout: cdk.Duration.seconds(5),
      memorySize: 256,
    };

    const ssmAllowedDomainsArn = `arn:aws:ssm:${REGION}:${this.account}:parameter/dev-portal/cognito/allowed-domains`;

    // -------------------------------------------------------------------------
    // Lambda — Cognito pre-sign-up trigger
    //
    // Checks the email domain against /dev-portal/cognito/allowed-domains.
    // Allowlisted → auto-confirms user and marks custom:status = approved.
    // Not allowlisted → lets the signup proceed normally; post-confirmation
    // will set custom:status = pending and notify Slack for admin review.
    // -------------------------------------------------------------------------
    const preSignUpFn = new lambda.Function(this, 'PreSignUpFn', {
      ...cognitoTriggerDefaults,
      code: bundleCode('pre-signup'),
      description: 'Cognito pre-signup: domain allowlist check',
    });
    preSignUpFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['ssm:GetParameter'],
        resources: [ssmAllowedDomainsArn],
      })
    );

    // -------------------------------------------------------------------------
    // Lambda — Cognito post-confirmation trigger
    //
    // Fires after a user has verified their email.
    // Allowlisted domain → sets custom:status = approved (user can sign in).
    // Unlisted domain → sets custom:status = pending, posts Slack notification
    //   to the admin channel with Approve / Deny buttons.
    // -------------------------------------------------------------------------
    const postConfirmationFn = new lambda.Function(this, 'PostConfirmationFn', {
      ...cognitoTriggerDefaults,
      code: bundleCode('post-confirmation'),
      description: 'Cognito post-confirmation: set status + notify Slack for pending users',
      // USER_POOL_ID is intentionally omitted: the Lambda reads it from event.userPoolId
      // to avoid a circular CloudFormation dependency (UserPool → trigger fn → UserPool).
      environment: {
        SLACK_SECRET_ARN: slackSecret.secretArn,
      },
    });
    postConfirmationFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['ssm:GetParameter'],
        resources: [ssmAllowedDomainsArn],
      })
    );
    postConfirmationFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['cognito-idp:AdminUpdateUserAttributes'],
        // Wildcard avoids a circular dep: UserPool trigger → this fn → UserPool ARN → UserPool
        resources: [`arn:aws:cognito-idp:${REGION}:${cdk.Aws.ACCOUNT_ID}:userpool/*`],
      })
    );
    slackSecret.grantRead(postConfirmationFn);

    // -------------------------------------------------------------------------
    // Lambda — Cognito pre-token generation trigger
    //
    // Runs on every sign-in attempt before tokens are issued.
    // Blocks users whose custom:status is not 'approved' with a user-visible
    // message. This is the enforcement point — the Slack flow above only sets
    // the attribute; this Lambda is what actually gates access.
    // -------------------------------------------------------------------------
    const preTokenFn = new lambda.Function(this, 'PreTokenFn', {
      ...cognitoTriggerDefaults,
      code: bundleCode('pre-token'),
      description: 'Cognito pre-token: block sign-in for pending/unapproved users',
    });

    // Wire all three triggers to the User Pool
    userPool.addTrigger(cognito.UserPoolOperation.PRE_SIGN_UP, preSignUpFn);
    userPool.addTrigger(cognito.UserPoolOperation.POST_CONFIRMATION, postConfirmationFn);
    userPool.addTrigger(cognito.UserPoolOperation.PRE_TOKEN_GENERATION, preTokenFn);

    // -------------------------------------------------------------------------
    // Lambda — Slack /add-domain slash command
    //
    // Customer success runs: /add-domain acmecorp.com
    // Validates the domain, reads the current StringList from SSM, appends the
    // new domain, and writes it back. Verifies the Slack signing secret.
    // -------------------------------------------------------------------------
    const slackAddDomainFn = new lambda.Function(this, 'SlackAddDomainFn', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: bundleCode('slack-add-domain'),
      description: 'Slack /add-domain: appends a domain to the Cognito allowlist in SSM',
      timeout: cdk.Duration.seconds(10),
      memorySize: 256,
      environment: { SLACK_SECRET_ARN: slackSecret.secretArn },
    });
    slackAddDomainFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['ssm:GetParameter', 'ssm:PutParameter'],
        resources: [ssmAllowedDomainsArn],
      })
    );
    slackSecret.grantRead(slackAddDomainFn);

    // -------------------------------------------------------------------------
    // Lambda — Slack interactive component handler (Approve / Deny buttons)
    //
    // Receives button-click payloads from Slack. On Approve: sets the user's
    // custom:status to 'approved'. On Deny: disables the Cognito user.
    // Updates the original Slack message to reflect the decision.
    // -------------------------------------------------------------------------
    const slackInteractFn = new lambda.Function(this, 'SlackInteractFn', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: bundleCode('slack-interact'),
      description: 'Slack interact: handles Approve/Deny button clicks for access requests',
      timeout: cdk.Duration.seconds(10),
      memorySize: 256,
      // USER_POOL_ID is intentionally omitted: the Lambda reads it from the
      // action.value payload embedded by post-confirmation at notification time.
      environment: {
        SLACK_SECRET_ARN: slackSecret.secretArn,
      },
    });
    slackInteractFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: [
          'cognito-idp:AdminUpdateUserAttributes',
          'cognito-idp:AdminDisableUser',
        ],
        // Wildcard avoids a circular dep on UserPool ARN
        resources: [`arn:aws:cognito-idp:${REGION}:${cdk.Aws.ACCOUNT_ID}:userpool/*`],
      })
    );
    slackSecret.grantRead(slackInteractFn);

    // -------------------------------------------------------------------------
    // API Gateway — Slack endpoints
    //
    // After deploy, configure these URLs in your Slack app:
    //   Slash command request URL:    <apiUrl>/add-domain
    //   Interactive components URL:   <apiUrl>/interact
    // -------------------------------------------------------------------------
    const slackApi = new apigateway.RestApi(this, 'SlackApi', {
      restApiName: 'dev-portal-slack',
      description: 'Slack integration for dev portal access management',
      deployOptions: { stageName: 'prod' },
    });

    slackApi.root
      .addResource('add-domain')
      .addMethod('POST', new apigateway.LambdaIntegration(slackAddDomainFn));

    slackApi.root
      .addResource('interact')
      .addMethod('POST', new apigateway.LambdaIntegration(slackInteractFn));

    // -------------------------------------------------------------------------
    // Cognito Hosted UI — CSS customization
    // Matches developer.vertex3d.com: #00ade4 primary, #1c1c1c dark, Roboto font.
    // Upload logo separately (see comment on OPS_ACM_CERT_ARN above).
    // -------------------------------------------------------------------------
    const hostedUiCustomization = new cognito.CfnUserPoolUICustomizationAttachment(
      this,
      'HostedUiCustomization',
      {
        userPoolId: userPool.userPoolId,
        clientId: userPoolClient.userPoolClientId,
        css: HOSTED_UI_CSS,
      }
    );
    // Cognito requires the custom domain to exist before UI customization can be applied.
    // CloudFormation doesn't infer this ordering automatically, so we add it explicitly.
    hostedUiCustomization.node.addDependency(userPoolDomain);

    // -------------------------------------------------------------------------
    // Lambda@Edge — viewer-request: JWT validation + Cognito redirect
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
      description: 'Cognito auth gate for developer.vertex3d.com',
      timeout: cdk.Duration.seconds(5),
      memorySize: 128,
    });
    addEdgeTrust(authFn);
    authFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['ssm:GetParameter'],
        resources: [
          `arn:aws:ssm:${REGION}:${this.account}:parameter/dev-portal/cognito/*`,
          `arn:aws:ssm:${REGION}:${this.account}:parameter/dev-portal/active-domain`,
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

    // dev-portal-auth.vertex3d.com → Cognito's CloudFront alias (for Hosted UI)
    new route53.ARecord(this, 'AuthDomainARecord', {
      zone: hostedZone,
      recordName: AUTH_SUBDOMAIN,
      target: route53.RecordTarget.fromAlias(
        new route53Targets.UserPoolDomainTarget(userPoolDomain)
      ),
    });

    // -------------------------------------------------------------------------
    // Outputs
    // -------------------------------------------------------------------------
    new cdk.CfnOutput(this, 'UserPoolId', {
      value: userPool.userPoolId,
      description: 'Cognito User Pool ID',
    });
    new cdk.CfnOutput(this, 'UserPoolClientId', {
      value: userPoolClient.userPoolClientId,
      description: 'Cognito App Client ID',
    });
    new cdk.CfnOutput(this, 'SlackApiUrl', {
      value: slackApi.url,
      description: 'Base URL for Slack app configuration (append /add-domain and /interact)',
    });
    new cdk.CfnOutput(this, 'CloudFrontDistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront distribution ID',
    });
  }
}
