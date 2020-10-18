import HashTreeElement from "@/jmeter/hashtree";

export default class Timer extends HashTreeElement {
  icon = "el-icon-date"

  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    return false;
  }
}
