// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

export const amplifyPolicyDocument =
{
  "Sid": "VisualEditor0",
  "Effect": "Allow",
  "Action": [
    "amplify:CreateApp",
    "amplify:CreateBackendEnvironment",
    "amplify:CreateBranch",
    "amplify:DeleteApp",
    "amplify:DeleteBackendEnvironment",
    "amplify:DeleteBranch",
    "amplify:GetApp",
    "amplify:GetBackendEnvironment",
    "amplify:ListApps",
    "amplify:ListBackendEnvironments",
    "amplify:ListBranches",
    "amplify:ListDomainAssociations",
    "amplify:UpdateApp",
    "apigateway:DELETE",
    "apigateway:GET",
    "apigateway:PATCH",
    "apigateway:POST",
    "apigateway:PUT",
    "appsync:CreateApiKey",
    "appsync:CreateDataSource",
    "appsync:CreateFunction",
    "appsync:CreateGraphqlApi",
    "appsync:CreateResolver",
    "appsync:CreateType",
    "appsync:DeleteApiKey",
    "appsync:DeleteDataSource",
    "appsync:DeleteFunction",
    "appsync:DeleteGraphqlApi",
    "appsync:DeleteResolver",
    "appsync:DeleteType",
    "appsync:GetDataSource",
    "appsync:GetFunction",
    "appsync:GetGraphqlApi",
    "appsync:GetIntrospectionSchema",
    "appsync:GetResolver",
    "appsync:GetSchemaCreationStatus",
    "appsync:GetType",
    "appsync:GraphQL",
    "appsync:ListApiKeys",
    "appsync:ListDataSources",
    "appsync:ListFunctions",
    "appsync:ListGraphqlApis",
    "appsync:ListResolvers",
    "appsync:ListResolversByFunction",
    "appsync:ListTagsForResource",
    "appsync:ListTypes",
    "appsync:StartSchemaCreation",
    "appsync:TagResource",
    "appsync:UpdateApiKey",
    "appsync:UpdateDataSource",
    "appsync:UpdateFunction",
    "appsync:UpdateGraphqlApi",
    "appsync:UpdateResolver",
    "appsync:UpdateType",
    "cloudformation:CreateChangeSet",
    "cloudformation:CreateStack",
    "cloudformation:CreateStackSet",
    "cloudformation:DeleteStack",
    "cloudformation:DeleteStackSet",
    "cloudformation:DescribeChangeSet",
    "cloudformation:DescribeStackEvents",
    "cloudformation:DescribeStackResource",
    "cloudformation:DescribeStackResources",
    "cloudformation:DescribeStacks",
    "cloudformation:DescribeStackSet",
    "cloudformation:DescribeStackSetOperation",
    "cloudformation:ExecuteChangeSet",
    "cloudformation:GetTemplate",
    "cloudformation:ListStackResources",
    "cloudformation:UpdateStack",
    "cloudformation:UpdateStackSet",
    "cloudfront:CreateCloudFrontOriginAccessIdentity",
    "cloudfront:CreateDistribution",
    "cloudfront:DeleteCloudFrontOriginAccessIdentity",
    "cloudfront:DeleteDistribution",
    "cloudfront:GetCloudFrontOriginAccessIdentity",
    "cloudfront:GetCloudFrontOriginAccessIdentityConfig",
    "cloudfront:GetDistribution",
    "cloudfront:GetDistributionConfig",
    "cloudfront:TagResource",
    "cloudfront:UntagResource",
    "cloudfront:UpdateCloudFrontOriginAccessIdentity",
    "cloudfront:UpdateDistribution",
    "cognito-identity:CreateIdentityPool",
    "cognito-identity:DeleteIdentityPool",
    "cognito-identity:DescribeIdentity",
    "cognito-identity:DescribeIdentityPool",
    "cognito-identity:GetIdentityPoolRoles",
    "cognito-identity:SetIdentityPoolRoles",
    "cognito-identity:TagResource",
    "cognito-identity:UpdateIdentityPool",
    "cognito-idp:AdminAddUserToGroup",
    "cognito-idp:AdminCreateUser",
    "cognito-idp:CreateGroup",
    "cognito-idp:CreateUserPool",
    "cognito-idp:CreateUserPoolClient",
    "cognito-idp:DeleteGroup",
    "cognito-idp:DeleteUser",
    "cognito-idp:DeleteUserPool",
    "cognito-idp:DeleteUserPoolClient",
    "cognito-idp:DescribeUserPool",
    "cognito-idp:DescribeUserPoolClient",
    "cognito-idp:ListTagsForResource",
    "cognito-idp:ListUserPoolClients",
    "cognito-idp:UpdateGroup",
    "cognito-idp:UpdateUserPool",
    "cognito-idp:UpdateUserPoolClient",
    "dynamodb:CreateTable",
    "dynamodb:DeleteItem",
    "dynamodb:DeleteTable",
    "dynamodb:DescribeContinuousBackups",
    "dynamodb:DescribeTable",
    "dynamodb:DescribeTimeToLive",
    "dynamodb:ListStreams",
    "dynamodb:ListTables",
    "dynamodb:PutItem",
    "dynamodb:TagResource",
    "dynamodb:UpdateContinuousBackups",
    "dynamodb:UpdateItem",
    "dynamodb:UpdateTable",
    "dynamodb:UpdateTimeToLive",
    "es:AddTags",
    "es:CreateElasticsearchDomain",
    "es:DeleteElasticsearchDomain",
    "es:DescribeElasticsearchDomain",
    "events:DeleteRule",
    "events:DescribeRule",
    "events:ListRuleNamesByTarget",
    "events:PutRule",
    "events:PutTargets",
    "events:RemoveTargets",
    "iam:AttachRolePolicy",
    "iam:CreatePolicy",
    "iam:CreatePolicyVersion",
    "iam:CreateRole",
    "iam:DeletePolicy",
    "iam:DeletePolicyVersion",
    "iam:DeleteRole",
    "iam:DeleteRolePermissionsBoundary",
    "iam:DeleteRolePolicy",
    "iam:DetachRolePolicy",
    "iam:GetPolicy",
    "iam:GetRole",
    "iam:GetRolePolicy",
    "iam:GetUser",
    "iam:ListAttachedRolePolicies",
    "iam:ListPolicyVersions",
    "iam:PassRole",
    "iam:PutRolePermissionsBoundary",
    "iam:PutRolePolicy",
    "iam:UpdateRole",
    "kinesis:AddTagsToStream",
    "kinesis:CreateStream",
    "kinesis:DeleteStream",
    "kinesis:DescribeStream",
    "kinesis:PutRecords",
    "lambda:AddLayerVersionPermission",
    "lambda:AddPermission",
    "lambda:CreateEventSourceMapping",
    "lambda:CreateFunction",
    "lambda:DeleteEventSourceMapping",
    "lambda:DeleteFunction",
    "lambda:DeleteLayerVersion",
    "lambda:GetEventSourceMapping",
    "lambda:GetFunction",
    "lambda:GetFunctionConfiguration",
    "lambda:GetLayerVersion",
    "lambda:GetLayerVersionByArn",
    "lambda:InvokeAsync",
    "lambda:InvokeFunction",
    "lambda:ListEventSourceMappings",
    "lambda:ListLayerVersions",
    "lambda:PublishLayerVersion",
    "lambda:RemoveLayerVersionPermission",
    "lambda:RemovePermission",
    "lambda:UpdateFunctionCode",
    "lambda:UpdateFunctionConfiguration",
    "lex:GetBot",
    "lex:GetBuiltinIntent",
    "lex:GetBuiltinIntents",
    "lex:GetBuiltinSlotTypes",
    "logs:DescribeLogStreams",
    "logs:GetLogEvents",
    "mobiletargeting:GetApp",
    "rekognition:DescribeCollection",
    "s3:CreateBucket",
    "s3:DeleteBucket",
    "s3:DeleteBucketPolicy",
    "s3:DeleteBucketWebsite",
    "s3:DeleteObject",
    "s3:DeleteObjectVersion",
    "s3:GetBucketLocation",
    "s3:GetObject",
    "s3:ListAllMyBuckets",
    "s3:ListBucket",
    "s3:ListBucketVersions",
    "s3:PutBucketAcl",
    "s3:PutBucketCORS",
    "s3:PutBucketNotification",
    "s3:PutBucketPolicy",
    "s3:PutBucketWebsite",
    "s3:PutEncryptionConfiguration",
    "s3:PutObject",
    "s3:PutObjectAcl",
    "ssm:PutParameter",
    "ssm:DescribeParameters",
    "ssm:GetParameters",
    "ssm:DeleteParameter",
    "ssm:AddTagsToResource",
    "geo:*"
  ],
  "Resource": "*"
}