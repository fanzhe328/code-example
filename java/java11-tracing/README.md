# java11 tracing 示例程序
本示例为您展示了 java11 Runtime 使用jaeger SDK的链路追踪使用示例。




## 准备开始
- [可选] 安装并配置 Serverless Devs 工具。（https://help.aliyun.com/document_detail/195474.html）

## 快速开始
### 方式一、使用 Serverless Devs 工具编译部署

#### 1. 修改 s.yaml 配置
- 根据需要修改 access 配置
- 在 service 处添加角色配置。
```yaml
role: acs:ram::{your account id}:role/aliyunfcdefaultrole
```

#### 2. 安装依赖并部署

编译部署代码包
```shell
s deploy
```


#### 3. 调用测试

```shell
s invoke
```

调用函数时收到的响应如下所示：

```bash
========= FC invoke Logs begin =========
FC Invoke Start RequestId: 35d49cf8-5c2a-495a-bb46-a04700c70fd4
[Name] Register [com.aliyun.serverless.runtime.classloader.FunctionClassLoader@58372a00] as [com.aliyun.serverless.runtime.classloader.FunctionClassLoader@com.aliyun.serverless.runtime.classloader.FunctionClassLoader@/code/HelloFCJava-1.0-SNAPSHOT.jar/code/original-HelloFCJava-1.0-SNAPSHOT.jar]: hash [8bbd2e0] (normal mode)
[main] INFO io.jaegertracing.Configuration - Initialized tracer=JaegerTracer(version=Java-1.8.1, serviceName=FCTracer, reporter=RemoteReporter(sender=HttpSender(), closeEnqueueTimeout=1000), sampler=ConstSampler(decision=true, tags={sampler.type=const, sampler.param=true}), tags={hostname=sr-63579326-4c1152ff9ad44b809ab8, jaeger.version=Java-1.8.1, ip=21.0.12.152}, zipkinSharedRpcSpan=false, expandExceptionLogs=false, useTraceId128Bit=false)
FC Invoke End RequestId: 35d49cf8-5c2a-495a-bb46-a04700c70fd4

Duration: 996.34 ms, Billed Duration: 997 ms, Memory Size: 128 MB, Max Memory Used: 55.60 MB
========= FC invoke Logs end =========

FC Invoke instanceId: c-63579d5a-bf0add8273384f69817c

FC Invoke Result:



End of method: invoke

```
#### 4. 测试函数

进入函数计算控制台点击链路追踪，查看函数的调用链路、耗时时间等信息。

![img_5](assets/img_3.png)


### 方式二、使用控制台创建

#### 1. 编译打包

```shell
# 编译部署
mvn package
# 打包文件
cd target && zip -r java11-tracing.zip *
```


#### 2. 创建服务和函数

创建服务
- 点击创建服务
- 点击显示高级选项
- 开启链路追踪功能
- 其他设置可使用默认


![img_5](assets/img_1.png)

选择服务（或创建服务）后，单击创建函数，如图所示
- 选择 `从零开始创建`
- 填入函数名称
- 选择运行环境 java11
- 选择函数触发方式：通过事件请求触发
- [请求处理程序](https://help.aliyun.com/document_detail/323526.html)（函数入口）设为：main
- 其他设置使用默认


> 详细创建函数流程见文档: [使用控制台创建函数](https://help.aliyun.com/document_detail/51783.html)

#### 3. 测试函数

点击测试函数后，点击链路追踪，查看函数的调用链路、耗时时间等信息。

![img_5](assets/img_3.png)