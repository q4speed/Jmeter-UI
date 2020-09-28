import ElementProp from "@/jmeter/props";

export default class HashTreeElement extends ElementProp {
  constructor(options = {}) {
    super(options);
  }

  toJson() {
    let json = super.toJson();
    let hashTree = {
      "type": "element",
      "name": "hashTree",
    }
    if (this.hashTree) {
      let elements = [];
      this.hashTree.forEach(e => {
        let json = e.toJson();
        json.forEach(o => {
          elements.push(o);
        })
      })
      hashTree.elements = elements;
    }
    return [json, hashTree];
  }
}
