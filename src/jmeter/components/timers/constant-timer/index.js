import HashTreeElement from "@/jmeter/hashtree";

export default class ConstantTimer extends HashTreeElement {
  constructor(options = {}) {
    super(options);
    this.delay = this.initStringProp(this.props, 'ConstantTimer.delay');
  }
}
