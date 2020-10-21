import HashTreeElement from "@/jmeter/hashtree";

export const TYPE = "Assertion";

export default class Assertion extends HashTreeElement {
  constructor(options = {}) {
    super(options);
    this.$type = TYPE;
  }
}
