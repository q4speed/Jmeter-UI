import {Element, DefaultTestElement} from "@/jmeter/element/element";

export class TestPlan extends DefaultTestElement {
  constructor(testName, options = {}) {
    super('TestPlan', 'TestPlanGui', 'TestPlan', testName);
    this.mode = options.mode;
    this.serializeThreadGroups = options.serializeThreadGroups;
    this.tearDownOnShutdown = options.tearDownOnShutdown;
    this.comments = options.comments;
    this.classpath = options.classpath;
    this.args = options.args;

    this.boolProp("TestPlan.functional_mode", this.mode, false);
    this.boolProp("TestPlan.serialize_threadgroups", this.serializeThreadGroups, true);
    this.boolProp("TestPlan.tearDown_on_shutdown", this.tearDownOnShutdown, true);
    this.stringProp("TestPlan.comments", this.comments);
    this.stringProp("TestPlan.user_define_classpath", this.classpath);
    this.add(new ElementArguments(this.args, "TestPlan.user_defined_variables", "User Defined Variables"));
  }
}

export class ElementArguments extends Element {
  constructor(testName, name, args) {
    super('elementProp', {
      name: name || "arguments",
      elementType: "Arguments",
      guiclass: "ArgumentsPanel",
      testclass: "Arguments",
      testname: testName || "",
      enabled: "true"
    });

    let collectionProp = this.collectionProp('Arguments.arguments');
    if (args) {
      args.forEach(arg => {
        if (arg.enable === true || arg.enable === undefined) { // 非禁用的条件加入执行
          let elementProp = collectionProp.elementProp(arg.name, 'Argument');
          elementProp.stringProp('Argument.name', arg.name);
          elementProp.stringProp('Argument.value', arg.value);
          elementProp.stringProp('Argument.metadata', arg.metadata, "=");
        }
      });
    }
  }
}
