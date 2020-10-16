import HashTreeElement from "@/jmeter/hashtree";

export default class Assertion extends HashTreeElement {
  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    return false;
  }
}
