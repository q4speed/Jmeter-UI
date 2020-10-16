import HashTreeElement from "@/jmeter/hashtree";

export default class ResultCollector extends HashTreeElement {
  constructor(options = {}) {
    super(options);
  }

  allowDrag() {
    return false;
  }

  allowDrop(dragging) {
    return false;
  }
}
