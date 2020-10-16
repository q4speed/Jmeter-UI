import HashTreeElement from "@/jmeter/hashtree";

export default class Timer extends HashTreeElement {
  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    return false;
  }
}
