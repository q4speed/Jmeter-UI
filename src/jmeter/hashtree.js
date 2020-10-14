import Element from "@/jmeter/element";
import {boolProp, getProps, intProp, longProp, stringProp} from "@/jmeter/props";

export default class HashTreeElement extends Element {
  constructor(options = {}) {
    super(options);
    if (options.elements) {
      this.props = getProps(options.elements);
    }

    this.comments = this.initStringProp(this.props, 'TestPlan.comments');
  }

  initIntProp(map, name, value) {
    return map[name] || intProp(name, value);
  }

  initLongProp(map, name, value) {
    return map[name] || longProp(name, value);
  }

  initBoolProp(map, name, value) {
    return map[name] || boolProp(name, value);
  }

  initStringProp(map, name, value) {
    return map[name] || stringProp(name, value);
  }

  toJson() {
    let self = super.toJson();
    if (this.props !== undefined) {
      self.elements = [];
      Object.keys(this.props).forEach(key => {
        self.elements.push(this.props[key].toJson());
      });
    }

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
    return [self, hashTree];
  }
}
