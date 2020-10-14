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

# TroubleShooting

## AWS lambda: No module named 'cfnresponse'

When you associate a Lambda function with a custom resource, the function is invoked whenever the custom resource is created, updated, or deleted.

While Creating Custom Resouce, Please make sure You should not add function's source code in Zip File. If you specify an actual zip file , that module won't be included.

Use "ZipFile" property to specify your function's source code and that function interacts with an AWS CloudFormation custom resource, you can load the cfn-response module to send responses to those resources. The module contains a send method, which sends a response object to a custom resource by way of an Amazon S3 presigned URL (the ResponseURL).




