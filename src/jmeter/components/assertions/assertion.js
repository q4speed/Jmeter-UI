import HashTreeElement from "@/jmeter/hashtree";

export default class Assertion extends HashTreeElement {
  icon = "el-icon-finished"

  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    return false;
  }
}
