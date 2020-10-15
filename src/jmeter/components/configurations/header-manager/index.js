import HashTreeElement from "@/jmeter/hashtree";
import {elementProp, stringProp} from "@/jmeter/props";

export default class HeaderManager extends HashTreeElement {
  constructor(options = {}) {
    super(options);

    this.headers = [];
    let collectionProp = this.props['HeaderManager.headers'];
    collectionProp.forEach(elementProp => {
      let name = elementProp.elements['Header.name'].value;
      let value = elementProp.elements['Header.value'].value;
      let header = {name: name, value: value, enable: true};

      this.headers.push(header);
    })
  }

  updateProps() {
    let collectionProp = this.props['HeaderManager.headers'];
    collectionProp.clear();
    this.headers.forEach(header => {
      if (header.enable !== false) {
        let ep = elementProp("", "Header");
        ep.add(stringProp("Header.name", header.name));
        ep.add(stringProp("Header.value", header.value));
        collectionProp.add(ep)
      }
    })
  }

  toJson() {
    this.updateProps();
    return super.toJson();
  }
}
