import Assertion from "@/jmeter/components/assertions/assertion";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "DurationAssertionGui",
      testclass: "DurationAssertion",
      testname: "DurationAssertion",
      enabled: "true"
    },
  }
};

export default class DurationAssertion extends Assertion {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);

    this.duration = this.initStringProp("DurationAssertion.duration")
    this.scope = this.initStringProp("Assertion.scope")
  }
}

export const schema = {
  DurationAssertion: DurationAssertion
}
