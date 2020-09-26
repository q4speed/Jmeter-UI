import {Element} from "@/jmeter/element";

export class JmeterTestPlan extends Element {
  constructor(options) {
    super(options);
    if (options.elements) {
      this.hashTree = this.createHashTree(options.elements[0]);
    }
  }
}
