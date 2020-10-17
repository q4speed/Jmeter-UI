import HashTreeElement from "@/jmeter/hashtree";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "ConstantTimerGui",
      testclass: "ConstantTimer",
      testname: "ConstantTimer",
      enabled: "true"
    },
  }
};

export default class ConstantTimer extends HashTreeElement {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);
    this.delay = this.initStringProp(this.props, 'ConstantTimer.delay');
  }
}

export const schema = {
  name: "ConstantTimer",
  class: ConstantTimer
}

