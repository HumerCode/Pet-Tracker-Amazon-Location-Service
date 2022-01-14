// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Stack, StackProps, Construct, SecretValue, Stage, StageProps } from '@aws-cdk/core';
import { CdkPipeline, SimpleSynthAction } from '@aws-cdk/pipelines';

import * as codepipeline from '@aws-cdk/aws-codepipeline';
import * as codepipeline_actions from '@aws-cdk/aws-codepipeline-actions';
import * as codecommit from '@aws-cdk/aws-codecommit';

import { PetTrackerDataIngestionStack } from "./data-ingestion-stack";
import { PetTrackerWebAppStack } from "./webapp-stack";

export class PetTrackerApplication extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    new PetTrackerDataIngestionStack(this, 'PetTrackerDataIngestion', {
      env: {
        region: props?.env?.region,
        account: props?.env?.account
      }
    });

    new PetTrackerWebAppStack(this, 'PetTrackerWebApp', {
      env: {
        region: props?.env?.region,
        account: props?.env?.account
      }
    });
  }
}

export class PetTrackerPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const sourceArtifact = new codepipeline.Artifact();
    const cloudAssemblyArtifact = new codepipeline.Artifact();

    const repo = codecommit.Repository.fromRepositoryName(
      this, 
      'ImportedRepo',
      'iot-workshop-for-pet-tracking-and-geofencing');

    const pipeline = new CdkPipeline(this, 'Pipeline', {
      crossAccountKeys: false,
      pipelineName: 'PetTrackerPipeline',
      cloudAssemblyArtifact,

      sourceAction: new codepipeline_actions.CodeCommitSourceAction({
        actionName: 'CodeCommit',
        repository: repo,
        branch: 'develop',
        output: sourceArtifact,
      }),

      synthAction: SimpleSynthAction.standardNpmSynth({
        sourceArtifact,
        cloudAssemblyArtifact,

        subdirectory: 'cdk',
        buildCommand: 'cd lib/position-lambda && npm install && cd ../../ && npm install && npm run build',
        synthCommand: 'npx cdk synth PetTrackerPipelineStack'
      }),
    });

    pipeline.addApplicationStage(new PetTrackerApplication(this, 'Stg', {
      env: {
        account: props?.env?.account,
        region: props?.env?.region
      }
    }));
  }
}