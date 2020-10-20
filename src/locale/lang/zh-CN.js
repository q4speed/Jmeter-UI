export default {
  jmeter: {
    commons: {
      add: "添加",
      remove: "删除",
      clear: "清除",
      name: "名称",
      comments: "注释",
      pleaseSelect: "请选择"
    },
    assertions: {
      responseAssertion: {}
    },
    configurations: {
      headerManager: {
        title: "发送参数",
        name: "名称",
        value: "值",
      }
    },
    controllers: {
      ifController: {
        expression: "表达式",
        expressionDesc: "表达式的结果必须为true或false",
        template: "表达式模板",
        useExpression: "将条件解释为变量表达式",
        evaluateAll: "对所有孩子生效",
      }
    },
    listeners: {
      backendListener: {}
    },
    postProcessors: {
      regularExtractor: {}
    },
    preProcessors: {},
    samplers: {
      httpSampler: {
        basic: "基础",
        advanced: "高级",
        titleWebServer: "Web服务器",
        protocol: "协议",
        domain: "服务器名称或IP",
        port: "端口号",
        titleHttpRequest: "HTTP请求",
        method: "方法",
        path: "路径",
        contentEncoding: "内容编码",
        autoRedirects: "自动重定向",
        followRedirects: "跟随重定向",
        useKeepalive: "使用Keepalive",
        doMultipartPost: "POST使用multipart/form-data",
        browserCompatibleMultipart: "与浏览器兼容的头",
        arguments: "参数",
        body: "消息体",
        file: "文件上传",
        titleTimeout: "超时（毫秒）",
        connectTimeout: "连接",
        responseTimeout: "响应"
      }
    },
    timers: {},
    others: {},
  }
}
