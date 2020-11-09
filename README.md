# jmeter-ui
仿照Jmeter的界面做的Web UI。比Jmeter更简便，更多的功能，比如写脚本不用查文档，直接给出常用脚本的模板（例如IfController），比如输入框可选择函数而不是自己查文档填写（现在还没做），等等

## Demo
- https://q4speed.github.io/Jmeter-UI/

##  JmeterUI的几个优点
1. 没有版本升级导致的兼容问题，JmeterUI的输入输出均为jmx，中间过程数据不存储(jmx -> model -> jmx)。
2. 开发简单，数据结构清晰，按照Jmeter的控件做即可。
3. 可以实现与Jmeter一致的复杂测试脚本。
4. 比Jmeter更方便，Jmeter中很多需要写脚本的地方只能查文档，JmeterUI可以直接给出常用的脚本，不用再去查文档，例如IfController
5. 反正都是自己做的，想要啥就有啥。

##  v1.0
- [x] 主界面: 左右分栏可拖拽
- [x] 提供基础接口: 导入jmx，输出JMX对象，生成jmx文件，导出jmx文件，json与xml互转
- [x] 完成基本控件: TestPlan, ThreadGroup, HttpSampler, IfController, HeaderManager
- [x] 完成左侧树基本功能，菜单，增删改查，可拖拽(根据控件判断是否可拖拽)

## v1.1
- [x] 提供国际化
- [x] 完成常用控件: TCPSampler, JDBCSampler, ResponseAssertion, DurationAssertion, JSONPathAssertion, 
CookieManager, DNSCacheManager, JSR223PreProcessor, JSR223PostProcessor, RegexExtractor, JSONPostProcessor, XPath2Extractor,ConstantTimer

# Jmeter-UI
