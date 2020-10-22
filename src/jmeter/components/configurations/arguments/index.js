import {elementProp, stringProp} from "@/jmeter/props";
import Configuration from "@/jmeter/components/configurations/configuration";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "ArgumentsPanel",
      testclass: "Arguments",
      testname: "Arguments",
      enabled: "true"
    },
  }
};

export default class Arguments extends Configuration {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);

    this.arguments = [];
    let collectionProp = this.initCollectionProp(this.props, 'Arguments.arguments');
    collectionProp.forEach(elementProp => {
      let name = this.initStringProp(elementProp.elements, 'Argument.name').value;
      let value = this.initStringProp(elementProp.elements, 'Argument.value').value;
      let desc = this.initStringProp(elementProp.elements, 'Argument.desc').value;
      let metadata = this.initStringProp(elementProp.elements, 'Argument.metadata', "=").value;
      let argument = {name: name, value: value, desc: desc, metadata: metadata, enable: true};

      this.arguments.push(argument);
    })
  }

  updateProps() {
    let collectionProp = this.props['Arguments.arguments'];
    collectionProp.clear();
    this.arguments.forEach(arg => {
      if (arg.enable !== false) {
        let ep = elementProp(arg.name, "Argument");
        ep.add(stringProp("Argument.name", arg.name));
        ep.add(stringProp("Argument.value", arg.value));
        ep.add(stringProp("Argument.desc", arg.desc));
        ep.add(stringProp("Argument.metadata", arg.metadata || "="));
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
  Arguments: Arguments
}
