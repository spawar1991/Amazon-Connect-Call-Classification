# connect-call-classification
## Call Classification For Amazon Connect

# TroubleShooting

## AWS lambda: No module named 'cfnresponse'

When you associate a Lambda function with a custom resource, the function is invoked whenever the custom resource is created, updated, or deleted.

While Creating Custom Resouce, Please make sure You should add unction's source code in ZipFile. If you specify an actual zip file , that module won't be included.




