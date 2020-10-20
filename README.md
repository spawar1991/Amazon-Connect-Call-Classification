# Amazon Connect Call Classification

Making it easy to get started with Call classification for Amazon Connect

# Project Overview

The purpose of this project is to provide an code example and fully functional lamnda function to get you started with capturing the call details (After call Work) by providing an agent an option.
This Lambda function captures the call category, Reason and other details and make an API call to amazon connect API to store them as Contact Attributes. These contact attributes can then be use for further analysis using CTR Record.
To enable these, there are multiple environment variables and parameters in the invocation event that control the behavior of the deployent template

# Description

This solution can be configured to use the following services: Amazon Connect, Amazon API Gateway, AWS Lambda, AWS IAM, and Amazon S3.

# Getting Started

Getting started with this project is easy. The most basic use case of capturing call classification in the Amazon Connect can be accomplished by downloading the pre-packaged Lambda Functions, deploying the CloudFormation template in your account, and importing pre-packaged the Static Website assets in S3 buckets.

## Pre-requisites

* S3 bucket should be present. You are going to configure in the next steps.

## Easy Setup

1. Make Sure You have Amazon Connect Instance Ready. Nou need amazon connect Instance ID in order to successfully deploy the template.
2. Clone the github repo into your account.
3. Create an S3 bucket and create a new folder “Deployment” and upload the deployment/ folder into it.
        Open the Call-classification-template-inline-lambda-v2.yaml file and copy the S3 url on it's detail page.
4. Create new folder WebsiteArtifacts into S3 bucket and upload the website/ folder into it.
5. Go to CloudFormation and select 'Create Stack'.
        Create the stack from an S3 url and paste the url from the Call-classification-template-inline-lambda-v2.yaml file.
        Fill in the parameters for the stack. The "existingLambdaZipsS3Bucket" ,"existingwebsiteS3KeyPrefix" and "existingwebsiteS3KeyPrefix" should be the ones created above that contain all the deployment related code.
6. Once the stack is complete, go to "outputs" section of the cloudformation stack. Copy the Cloudfront URL which is serving static website from s3 bucket.
7. Since We are copying files from the central bucket, If you modify the central bucket file it wont automatically gets updated in the newly serving S3 bucket. So You can either add "Same region Replication" configutation on exisitng S3 bucket or manually perform code updation  on newly website serving bucket.
8. To access CCP Panel integrated into the S3 static website, you need to add the cloudfront URL as a Approved origin under application integration tab in Amazon Connect.
9. Once you are done with the all the settings then you can access the Cloudfront URL and you'll be able to see CCP and ready to take calls. 

# TroubleShooting

## AWS lambda: No module named 'cfnresponse'

When you associate a Lambda function with a custom resource, the function is invoked whenever the custom resource is created, updated, or deleted.

While Creating Custom Resouce, Please make sure You should not add function's source code in Zip File. If you specify an actual zip file , that module won't be included.

Use "ZipFile" property to specify your function's source code and that function interacts with an AWS CloudFormation custom resource, you can load the cfn-response module to send responses to those resources. The module contains a send method, which sends a response object to a custom resource by way of an Amazon S3 presigned URL (the ResponseURL).




