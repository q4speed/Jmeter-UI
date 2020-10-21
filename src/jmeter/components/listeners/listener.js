import HashTreeElement from "@/jmeter/hashtree";

export const TYPE = "Listener";

export default class Listener extends HashTreeElement {
  constructor(options = {}) {
    super(options);
    this.$type = TYPE;
  }
}
