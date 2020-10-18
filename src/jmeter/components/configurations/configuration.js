import HashTreeElement from "@/jmeter/hashtree";

export default class Configuration extends HashTreeElement {
  icon = "el-icon-setting"

  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    return false;
  }
}
