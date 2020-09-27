import Element from "@/jmeter/element";
import {createHashTree} from "@/jmeter/components";

export default class JmeterTestPlan extends Element {
  constructor(options) {
    super(options);
    if (options.elements) {
      this.hashTree = createHashTree(options.elements[0]);
    }
  }

  toJson() {
    let json = super.toJson();
    if (this.hashTree) {
      json.elements = [];
      this.hashTree.forEach(e => {
        json.elements.push(e.toJson());
      })
    }
    return json;
  }
}
