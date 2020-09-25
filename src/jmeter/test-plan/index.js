import {Element} from "@/jmeter/element/element";

export class TestPlan extends Element {
  constructor(options) {
    super(options)
    this.label = options.attributes.testname;
  }
}
