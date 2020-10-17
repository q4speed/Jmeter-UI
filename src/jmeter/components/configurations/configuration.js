import HashTreeElement from "@/jmeter/hashtree";

export default class Configuration extends HashTreeElement {
  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    return false;
  }
}
