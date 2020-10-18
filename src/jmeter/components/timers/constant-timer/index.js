import Timer from "@/jmeter/components/timers/timer";

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

export default class ConstantTimer extends Timer {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);
    this.delay = this.initStringProp(this.props, 'ConstantTimer.delay');
  }
}

export const schema = {
  name: "ConstantTimer",
  class: ConstantTimer
}

