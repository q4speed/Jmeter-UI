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

    this.functionalMode = this.initBoolProp('TestPlan.functional_mode', false);
    this.serializeThreadGroups = this.initBoolProp('TestPlan.serialize_threadgroups', false);
    this.tearDownOnShutdown = this.initBoolProp('TestPlan.tearDown_on_shutdown', true);
    this.userDefineClasspath = this.initStringProp('TestPlan.user_define_classpath');

    this.userDefinedVariables = [];

    let elementProp = this.initElementProp('TestPlan.user_defined_variables', 'Arguments');
    let collectionProp = elementProp.initCollectionProp('Arguments.arguments');
    collectionProp.forEach(ep => {
      let name = ep.initStringProp('Argument.name').value;
      let value = ep.initStringProp('Argument.value').value;
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
