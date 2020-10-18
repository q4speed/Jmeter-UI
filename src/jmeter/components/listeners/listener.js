import HashTreeElement from "@/jmeter/hashtree";

export default class Listener extends HashTreeElement {
  icon = "el-icon-view"

  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    return false;
  }
}
