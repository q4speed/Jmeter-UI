import HashTreeElement from "@/jmeter/hashtree";

const AllowChildren = ["Assertion", "Configuration", "Controller", "Sampler", "PreProcessor", "PostProcessor", "Timer", "Listener"];
const AllowParent = ["Controller"];

export default class Controller extends HashTreeElement {
  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    for (const type of AllowChildren) {
      if (dragging instanceof type) return true;
    }
    return false;
  }

  getAllowMenu() {
    return {children: AllowChildren, parent: AllowParent};
  }

}
