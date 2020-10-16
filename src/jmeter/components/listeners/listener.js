import HashTreeElement from "@/jmeter/hashtree";

export default class Listener extends HashTreeElement {
  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    return false;
  }
}
