import Element from "@/jmeter/element";
import {loadComponent} from "@/jmeter/components";

const DEFAULT_OPTIONS = {
  declaration: {attributes: {version: "1.0", encoding: "UTF-8"}}
}

export default class JMX extends Element {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);
    this.declaration = options.declaration;
    if (options.elements) {
      this.elements = [];
      options.elements.forEach(e => {
        this.elements.push(loadComponent(e));
      })
    }
  }

  toJson() {
    let json = {
      declaration: this.declaration
    };
    if (this.elements) {
      json.elements = [];
      this.elements.forEach(e => {
        json.elements.push(e.toJson());
      })
    }
    return json;
  }
}
