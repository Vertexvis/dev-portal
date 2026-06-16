#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DevPortalAuthStack } from '../lib/dev-portal-auth-stack';

const app = new cdk.App();

new DevPortalAuthStack(app, 'DevPortalAuthStack', {
  // Lambda@Edge requires us-east-1. The ops account already hosts the
  // wildcard *.vertex3d.com ACM cert there, so this is a natural fit.
  env: {
    account: '396783039869', // ops
    region: 'us-east-1',
  },
  description: 'CloudFront + Cognito auth layer for developer.vertex3d.com',
});
