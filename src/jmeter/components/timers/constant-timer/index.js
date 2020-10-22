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
    this.delay = this.initStringProp('ConstantTimer.delay');
  }
}

export const schema = {
  ConstantTimer: ConstantTimer
}

