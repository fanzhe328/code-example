const { MNSClient } = require('./client');

var client, topic
exports.initialize = (context, callback) => {
    // 设置HTTP协议MNS客户端接入点
    const endpoint = process.env.MnsEndpoint;
    // AccessKey ID阿里云身份验证，在阿里云RAM控制台创建。
    const accessKeyId = context.credentials.accessKeyId;
    // AccessKey Secret阿里云身份验证，在阿里云RAM控制台创建。
    const accessKeySecret = context.credentials.accessKeySecret;
    const topicname = process.env.TopicName;
    client = new MNSClient(endpoint, accessKeyId, accessKeySecret);
    topic = client.getMNSTopic(topicname);
    callback(null, "initialize");
};
exports.handler = async (event, context, callback) => {
    //发送一条消息
    res = await topic.publishMessage("hello mns");
    console.log("Publish message succ: MessageID:%s,BodyMD5:%s", res.body.MessageId, res.body.MessageBodyMD5);
    callback(null, "succ");
};
