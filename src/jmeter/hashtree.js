import Element from "@/jmeter/element";
import {boolProp, intProp, longProp, stringProp, collectionProp, elementProp, getProps} from "@/jmeter/props";
import {loadHashTree, loadComponent} from "@/jmeter/components";

export default class HashTreeElement extends Element {
  constructor({options: options, hashTree: hashTree}) {
    super(options);
    this.props = getProps(options.elements);
    this.comments = this.initStringProp(this.props, 'TestPlan.comments');

    if (hashTree) {
      this.hashTree = loadHashTree(hashTree);
    }
  }

  clone() {
    let json = this.toJson();
    return loadComponent(json.options, json.hashTree);
  }

  initIntProp(map, name, defaultValue) {
    if (map[name] === undefined) {
      map[name] = intProp(name, defaultValue);
    }
    return map[name];
  }

  initLongProp(map, name, defaultValue) {
    if (map[name] === undefined) {
      map[name] = longProp(name, defaultValue);
    }
    return map[name];
  }

  initBoolProp(map, name, defaultValue) {
    if (map[name] === undefined) {
      map[name] = boolProp(name, defaultValue);
    }
    return map[name];
  }

  initStringProp(map, name, defaultValue) {
    if (map[name] === undefined) {
      map[name] = stringProp(name, defaultValue);
    }
    return map[name];
  }

  initElementProp(map, name, elementType) {
    if (map[name] === undefined) {
      map[name] = elementProp(name, elementType);
    }
    return map[name];
  }

  initCollectionProp(map, name) {
    if (map[name] === undefined) {
      map[name] = collectionProp(name);
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
        elements.push(json.options);
        elements.push(json.hashTree);
      })
      hashTree.elements = elements;
    }
    return {options: self, hashTree: hashTree}
  }
}
