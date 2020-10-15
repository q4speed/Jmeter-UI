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
    if (map[name] === undefined) {
      map[name] = intProp(name, value);
    }
    return map[name];
  }

  initLongProp(map, name, value) {
    if (map[name] === undefined) {
      map[name] = longProp(name, value);
    }
    return map[name];
  }

  initBoolProp(map, name, value) {
    if (map[name] === undefined) {
      map[name] = boolProp(name, value);
    }
    return map[name];
  }

  initStringProp(map, name, value) {
    if (map[name] === undefined) {
      map[name] = stringProp(name, value);
    }
    return map[name];
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
