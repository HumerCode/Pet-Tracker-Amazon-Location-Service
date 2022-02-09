// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import * as cdk from '@aws-cdk/core';
import * as codepipeline from '@aws-cdk/aws-codepipeline';
import * as codecommit from '@aws-cdk/aws-codecommit';
import * as amplify from "@aws-cdk/aws-amplify";
import * as iam from '@aws-cdk/aws-iam';
import * as policies from './policy-statements'

import path = require("path");

export class PetTrackerWebAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const region = props?.env?.region || 'us-east-1'
    const account = props?.env?.account || ''

    const repo = codecommit.Repository.fromRepositoryName(
      this, 
      'ImportedRepo',
      'iot-workshop-for-pet-tracking-and-geofencing');

    const amplifyApp = new amplify.App(this, "pettracker-app ", {
      sourceCodeProvider: new amplify.CodeCommitSourceCodeProvider({
        repository: repo,
      }),
    });
    const devBranch = amplifyApp.addBranch("develop");
    const masterBranch = amplifyApp.addBranch("master");

    const customPolicyStatement = iam.PolicyStatement.fromJson(policies.amplifyPolicyDocument);

    amplifyApp.grantPrincipal.addToPrincipalPolicy(customPolicyStatement);
    amplifyApp.addEnvironment('_LIVE_UPDATES', '[{"pkg":"@aws-amplify/cli","type":"npm","version":"5.0.2"}]');

  }
}