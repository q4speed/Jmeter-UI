import {Element} from "@/jmeter/element/element";
import {TestPlan} from "@/jmeter/test-plan";

export default {
  Element,
  UnsupportedComponent,
  JMX,
  JmeterTestPlan,
  TestPlan
}

export class UnsupportedComponent extends Element {
  constructor(options) {
    super(options)
  }
}

export class JMX extends Element {
  constructor(options) {
    super(options)
    this.declaration = options.declaration;
    if (options.elements) {
      this.elements = [];
      options.elements.forEach(e => {
        this.elements.push(this.createElement(e));
      })
    }
  }

  toJson() {
    let json = super.toJson();
    json.declaration = this.declaration;
    return json;
  }
}

export class JmeterTestPlan extends Element {
  constructor(options) {
    super(options)
    if (options.elements) {
      this.hashTree = this.createHashTree(options.elements[0]);
    }
  }
}

export const ELEMENTS = {
  jmeterTestPlan: JmeterTestPlan,
  TestPlan: TestPlan,
  objProp: "",
  intProp: "",
  longProp: "",
  boolProp: "",
  stringProp: "",
  elementProp: "",
  collectionProp: "",
}
