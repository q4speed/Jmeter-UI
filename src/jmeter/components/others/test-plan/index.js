import HashTreeElement from "@/jmeter/hashtree";
import {elementProp, stringProp} from "@/jmeter/props";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {guiclass: "TestPlanGui", testclass: "TestPlan", testname: "TestPlan", enabled: "true"},
  }
};

export const TYPE = "TestPlan";

export default class TestPlan extends HashTreeElement {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);
    this.$type = TYPE;

    this.functionalMode = this.initBoolProp(this.props, 'TestPlan.functional_mode');
    this.serializeThreadGroups = this.initBoolProp(this.props, 'TestPlan.serialize_threadgroups');
    this.tearDownOnShutdown = this.initBoolProp(this.props, 'TestPlan.tearDown_on_shutdown');
    this.userDefineClasspath = this.initStringProp(this.props, 'TestPlan.user_define_classpath');

    this.userDefinedVariables = [];

    let elementProp = this.initElementProp(this.props, 'TestPlan.user_defined_variables', 'Arguments');
    let collectionProp = this.initCollectionProp(elementProp.elements, 'Arguments.arguments');
    collectionProp.forEach(element => {
      let name = element.elements['Argument.name'].value;
      let value = element.elements['Argument.value'].value;
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
}

export const schema = {
  TestPlan: TestPlan
}
