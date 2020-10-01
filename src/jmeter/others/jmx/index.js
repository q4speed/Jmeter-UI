import Element from "@/jmeter/element";
import {createComponent} from "@/jmeter/components";

export default class JMX extends Element {
  constructor(options = {}) {
    super(options);
    this.declaration = options.declaration;
    if (options.elements) {
      this.elements = [];
      options.elements.forEach(e => {
        this.elements.push(createComponent(e));
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
