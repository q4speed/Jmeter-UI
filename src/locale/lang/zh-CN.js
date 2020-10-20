export default {
  wm: {
    commons: {
      clear: "清除",
      name: "名称",
      comments: "注释",
      pleaseSelect: "请选择",
      cut: "剪切",
      copy: "复制",
      paste: "粘贴",
      duplicate: "复写",
      enable: "启用",
      disable: "禁用",
      add: "添加",
      remove: "删除",
      insert: "插入上级",
    },
    Assertion: {
      label: "断言",
      ResponseAssertion: {
        label: "响应断言",
      }
    },
    Configuration: {
      label: "配置",
      HeaderManager: {
        label: "请求头管理器",
        title: "发送参数",
        name: "名称",
        value: "值",
      }
    },
    Controller: {
      label: "控制器",
      IfController: {
        label: "条件控制器",
        expression: "表达式",
        expressionDesc: "表达式的结果必须为true或false",
        template: "表达式模板",
        useExpression: "将条件解释为变量表达式",
        evaluateAll: "对所有孩子生效",
        eq: "等于",
        ne: "不等于",
        gt: "大于",
        lt: "小于",
        like: "包含",
        notLike: "不包含",
        empty: "空",
        notEmpty: "非空",
        name: "变量名",
        value: "值"
      }
    },
    Listener: {
      label: "监听器",
      BackendListener: {
        label: "后端监听器",
      }
    },
    PostProcessor: {
      label: "后置处理器",
      RegexExtractor: {
        label: "正则提取器",
      }
    },
    PreProcessor: {
      label: "前置处理器",
    },
    Sampler: {
      label: "取样器",
      HTTPSamplerProxy: {
        label: "HTTP取样器",
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
    Timer: {
      label: "计时器",
      ConstantTimer: {
        label: "固定计时器",
        delay: "线程延迟(毫秒)"
      }
    },
    others: {},
  }
}
