import HashTreeElement from "@/jmeter/hashtree";

export const TYPE = "Timer";

export default class Timer extends HashTreeElement {
  constructor(options = {}) {
    super(options);
    this.$type = TYPE;
  }
}
