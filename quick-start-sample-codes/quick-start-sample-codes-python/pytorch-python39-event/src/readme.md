# pytorch-python39-event 帮助文档

<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=pytorch-python39-event&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=pytorch-python39-event" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=pytorch-python39-event&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=pytorch-python39-event" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=pytorch-python39-event&type=packageDownload">
  </a>
</p>

<description>

快速部署一个 Python 3.9 的 Event 类型的 配置torch公共层的函数到阿里云函数计算。

</description>

<table>

## 前期准备
使用该项目，推荐您拥有以下的产品权限 / 策略：

| 服务/业务 | 函数计算 |     
| --- |  --- |   
| 权限/策略 | AliyunFCFullAccess |

</table>

<codepre id="codepre">

# 代码 & 预览

- 为了能够成功部署本样例代码，您在部署过程中需要提供以下参数：
    - 地域 (region): 您需要通过这个参数配置您函数计算服务需要部署的地域，默认值为 cn-hangzhou (杭州)。
        - 为您提供的地域选项为：
            - cn-beijing (北京)
            - cn-hangzhou (杭州)
            - cn-shanghai (上海)
            - cn-qingdao (青岛)
            - cn-zhangjiakou (张家口)
            - cn-huhehaote (呼和浩特)
            - cn-shenzhen (深圳)
            - cn-chengdu (成都)
            - cn-hongkong (香港)
            - ap-southeast-1 (新加坡)
            - ap-southeast-2 (悉尼)
            - ap-southeast-3 (吉隆坡)
            - ap-southeast-5 (雅加达)
            - ap-northeast-1 (东京)
            - eu-central-1 (法兰克福)
            - eu-west-1 (伦敦)
            - us-west-1 (硅谷)
            - us-east-1 (弗吉尼亚)
            - ap-south-1 (孟买)
    - 服务名 (service name): 您需要给您的函数计算服务进行命名，服务名称，只能包含字母、数字、下划线和中划线。不能以数字、中划线开头。长度在 1-128 之间。
    - 函数名 (function name): 您需要给您的函数计算函数进行命名，函数名称，只能包含字母、数字、下划线和中划线。不能以数字、中划线开头。长度在 1-64 之间。

<deploy>

## 部署 & 体验

<appcenter>

-  :fire:  通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=pytorch-python39-event) ，
   [![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=pytorch-python39-event)  该应用。

</appcenter>

- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
    - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://www.serverless-devs.com/fc/config) ；
    - 初始化项目：`s init pytorch-python39-event -d pytorch-python39-event`
    - 填入在以上模块介绍的参数
    - 进入项目，并进行项目部署：`cd pytorch-python39-event && s deploy -y`

- 本地调试
    - 使用测试样例进行触发测试，运行 `s cli fc invoke --service-name ${serviceNamme} --function-name ${functionName} --region ${regionName}`

- 端对端测试
    - 建议参考[文档](https://help.aliyun.com/document_detail/73333.html)，使用 OpenAPI 手动测试。
    - 登录函数计算控制台，找到刚才部署的函数，查看 `调用日志`, 如果没有开通日志请点击一键开通

</deploy>

<appdetail id="flushContent">

# 应用详情

本应用从官方公共层直接引入pytorch，有关公共层的详细信息请参见[在函数中配置官方公共层](https://help.aliyun.com/document_detail/451191.html)

本应用仅作为学习和参考使用，您可以基于本项目进行二次开发和完善，实现自己的业务逻辑



</appdetail>

<devgroup>

## 开发者社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="130px" > |
|--- | --- | --- |
| <center>微信公众号：`serverless`</center> | <center>微信小助手：`xiaojiangwh`</center> | <center>钉钉交流群：`33947367`</center> | 

</p>

</devgroup>