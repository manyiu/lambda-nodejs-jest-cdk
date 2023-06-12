import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaNodejsJestCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaLayer = new cdk.aws_lambda.LayerVersion(
      this,
      "LambdaNodejsJestCdkLayer",
      {
        compatibleRuntimes: [cdk.aws_lambda.Runtime.NODEJS_18_X],
        compatibleArchitectures: [cdk.aws_lambda.Architecture.ARM_64],
        code: cdk.aws_lambda.Code.fromAsset("lambdas/layers/base"),
      }
    );

    const helloLambda = new cdk.aws_lambda_nodejs.NodejsFunction(
      this,
      "HelloLambda",
      {
        entry: "lambdas/hello/index.ts",
        handler: "handler",
        runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
        bundling: {
          tsconfig: "lambdas/tsconfig.json",
          externalModules: ["@aws-sdk/*", "axios"],
        },
        layers: [lambdaLayer],
      }
    );
  }
}
