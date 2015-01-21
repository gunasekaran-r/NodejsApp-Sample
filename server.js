var AWS = require('aws-sdk');
//var proxy = require('proxy-agent');


// configure AWS security tokens


AWS.config.update({
//  httpOptions: { agent: proxy('http://internal.proxy.com') },
    accessKeyId: process.env.AccessKeyID,
    secretAccessKey: process.env.SecretAccessKey
});



// Set your region for future requests.
AWS.config.update({
    region: 'us-west-1'
});

var ec2 = new AWS.EC2();

var params = {
    ImageId: 'ami-d383af96', // Amazon Linux AMI x86_64 EBS
    InstanceType: 't1.micro',
    MinCount: 1,
    MaxCount: 1
};

// Create the instance
ec2.runInstances(params, function(err, data) {
    if (err) {
        console.log("Could not create instance", err);
        return;
    }

    var instanceId = data.Instances[0].InstanceId;
    console.log("Created instance", instanceId);
});