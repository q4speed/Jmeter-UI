import HashTreeElement from "@/jmeter/hashtree";

export default class UnsupportedComponent extends HashTreeElement {
  constructor(options = {}) {
    super(options)
  }

  allowDrag() {
    return false;
  }

  allowDrop(dragging) {
    return false;
  }
}

export const schema = {
  name: "UnsupportedComponent",
  class: UnsupportedComponent
}
