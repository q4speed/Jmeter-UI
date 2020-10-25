import Element from "@/jmeter/element";
import {loadHashTree} from "@/jmeter/components";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {version: "1.2", properties: "5.0", jmeter: "5.2.1"},
  }
};

export default class JmeterTestPlan extends Element {
  class = "jmeterTestPlan"

  constructor({options = DEFAULT_OPTIONS} = {options}) {
    super(options);
    this.hashTree = [];
    if (options.elements) {
      this.hashTree = loadHashTree(options.elements[0]);
    }
  }

  toJson() {
    let json = super.toJson();
    if (this.hashTree) {
      json.elements = [];
      let elements = [];
      this.hashTree.forEach(e => {
        let json = e.toJson();
        elements.push(json.options);
        elements.push(json.hashTree);
      })
      let hashTree = {
        "type": "element",
        "name": "hashTree",
        "elements": elements
      }
      json.elements.push(hashTree);
    }
    return json;
  }
}

export const schema = {
  jmeterTestPlan: JmeterTestPlan
}

