import Assertion from "@/jmeter/components/assertions/assertion";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "AssertionGui",
      testclass: "ResponseAssertion",
      testname: "ResponseAssertion",
      enabled: "true"
    },
  }
};
export default class ResponseAssertion extends Assertion {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);
  }
}
