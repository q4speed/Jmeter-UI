import HashTreeElement from "@/jmeter/hashtree";
import {elementProp, stringProp} from "@/jmeter/props";

export default class TestPlan extends HashTreeElement {
  constructor(options = {}) {
    super(options);

    this.functionalMode = this.initBoolProp(this.props, 'TestPlan.functional_mode');
    this.serializeThreadGroups = this.initBoolProp(this.props, 'TestPlan.serialize_threadgroups');
    this.tearDownOnShutdown = this.initBoolProp(this.props, 'TestPlan.tearDown_on_shutdown');
    this.userDefineClasspath = this.initStringProp(this.props, 'TestPlan.user_define_classpath');

    this.userDefinedVariables = [];

    let collectionProp = this.props['TestPlan.user_defined_variables'].elements['Arguments.arguments'];
    collectionProp.forEach(elementProp => {
      let name = elementProp.elements['Argument.name'].value;
      let value = elementProp.elements['Argument.value'].value;
      this.userDefinedVariables.push({name: name, value: value, enable: true});
    })
  }

  updateProps() {
    let collectionProp = this.props['TestPlan.user_defined_variables'].elements['Arguments.arguments'];
    collectionProp.clear();
    this.userDefinedVariables.forEach(variable => {
      if (variable.enable !== false) {
        let ep = elementProp(variable.name, "Argument");
        ep.add(stringProp("Argument.name", variable.name));
        ep.add(stringProp("Argument.value", variable.value));
        ep.add(stringProp("Argument.metadata", "="));
        collectionProp.add(ep)
      }
    })
  }

  toJson() {
    this.updateProps();
    return super.toJson();
  }

  allowDrag() {
    return false;
  }

  allowDrop(dragging) {
    return dragging instanceof HashTreeElement;
  }
}
