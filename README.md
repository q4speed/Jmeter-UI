# jmeter-ui
仿照Jmeter的界面做的Web UI。比Jmeter更简便，更多的功能，比如写脚本不用查文档，直接给出常用脚本的模板（例如IfController），比如输入框可选择函数而不是自己查文档填写（现在还没做），等等

## Demo
- https://q4speed.github.io/Jmeter-UI/

 ##  JmeterUI对比MeterSphere接口测试的几个优点
1. JmeterUI的输入输出均为jmx，从而避免因为版本升级导致中间数据不兼容，MeterSphere每次升级必须仔细考虑是否兼容以前的数据，JmeterUI没有版本兼容问题。
2. 数据结构清晰，开发简便(只需要按照Jmeter做就行了)，不需要用异构数据(MS存储的接口测试数据)转换为jmx
3. 方便jmx导入(MeterSphere不能jmx导入到接口测试), 不用随着开发更新导入功能，即使jmx中存在未实现的控件或者用户自定义的控件，也不会影响使用。

 ##  JmeterUI对比Jmeter界面的几个优点
1. 操作更方便，例如Jmeter中很多需要写脚本的地方只能查文档，JmeterUI可以直接给出常用的脚本，不用再去查文档，例如IfController
2. JmeterUI可以与MeterSphere集成，管理测试脚本非常方便。

 ##  v1.0
 
- [x] 主界面: 左右分栏可拖拽
- [x] 提供基础接口: 导入jmx，输出JMX对象，生成jmx文件，导出jmx文件，json与xml互转
- [x] 完成基本控件: TestPlan, ThreadGroup, HttpSampler, IfController, HeaderManager
- [x] 完成左侧树基本功能，菜单，增删改查，可拖拽(根据控件判断是否可拖拽)


# Jmeter-UI
