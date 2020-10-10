import HashTreeElement from "@/jmeter/hashtree";
import {elementProp, stringProp} from "@/jmeter/props";

export default class TestPlan extends HashTreeElement {
  constructor(options = {}) {
    super(options);
    this.functionalMode = this.props['TestPlan.functional_mode'];
    this.serializeThreadGroups = this.props['TestPlan.serialize_threadgroups'];
    this.tearDownOnShutdown = this.props['TestPlan.tearDown_on_shutdown'];
    this.comments = this.props['TestPlan.comments'];
    this.userDefineClasspath = this.props['TestPlan.user_define_classpath'];

    this.userDefinedVariables = [];
    this.props['TestPlan.user_defined_variables'].value['Arguments.arguments'].value.forEach(elementProp => {
      let name = elementProp.value['Argument.name'].value;
      let value = elementProp.value['Argument.value'].value;
      this.userDefinedVariables.push({name: name, value: value});
    })
  }

  updateProps() {
    this.props['TestPlan.user_defined_variables'].value['Arguments.arguments'].value = [];
    this.userDefinedVariables.forEach(variable => {
      let obj = elementProp(variable.name, "Argument");
      obj.value['Argument.name'] = stringProp("Argument.name", variable.name)
      obj.value['Argument.value'] = stringProp("Argument.value", variable.value)
      obj.value['Argument.metadata'] = stringProp("Argument.metadata", "=")
      this.props['TestPlan.user_defined_variables'].value['Arguments.arguments'].value.push(obj);
    })
  }

  toJson() {
    this.updateProps();
    return super.toJson();
  }
}
