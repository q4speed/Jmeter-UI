import Element from "@/jmeter/element";
import {createHashTree} from "@/jmeter/components";

export default class JmeterTestPlan extends Element {
  constructor(options = {}) {
    super(options);
    if (options.elements) {
      this.hashTree = createHashTree(options.elements[0]);
    }
  }

  toJson() {
    let json = super.toJson();
    if (this.hashTree) {
      json.elements = [];
      let elements = [];
      this.hashTree.forEach(e => {
        let json = e.toJson();
        json.forEach(o => {
          elements.push(o);
        })
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
