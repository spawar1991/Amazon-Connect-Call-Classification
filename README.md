# connect-call-classification
## Call Classification For Amazon Connect

# TroubleShooting

## AWS lambda: No module named 'cfnresponse'

When you associate a Lambda function with a custom resource, the function is invoked whenever the custom resource is created, updated, or deleted.

While Creating Custom Resouce, Please make sure You should not add function's source code in ZipFile. If you specify an actual zip file , that module won't be included.

Use "ZipFile" property to specify your function's source code and that function interacts with an AWS CloudFormation custom resource, you can load the cfn-response module to send responses to those resources. The module contains a send method, which sends a response object to a custom resource by way of an Amazon S3 presigned URL (the ResponseURL).




