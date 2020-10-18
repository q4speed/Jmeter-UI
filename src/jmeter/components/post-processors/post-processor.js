import HashTreeElement from "@/jmeter/hashtree";

export default class PostProcessor extends HashTreeElement {
  icon = "el-icon-attract"

  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    return false;
  }
}
