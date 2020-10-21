import HashTreeElement from "@/jmeter/hashtree";

export const TYPE = "Sampler";

export default class Sampler extends HashTreeElement {
  constructor(options = {}) {
    super(options);
    this.$type = TYPE;
  }
}
