import Element from "@/jmeter/element";
import {loadHashTree} from "@/jmeter/components";

export default class Index extends Element {
  class = "jmeterTestPlan"

  constructor({options: options}) {
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
  jmeterTestPlan: Index
}

