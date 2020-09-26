import {Element} from "@/jmeter/element";

export class JMX extends Element {
  constructor(options) {
    super(options);
    this.declaration = options.declaration;
    if (options.elements) {
      this.elements = [];
      options.elements.forEach(e => {
        this.elements.push(this.createElement(e));
      })
    }
  }

  toJson() {
    let json = super.toJson();
    json.declaration = this.declaration;
    return json;
  }
}
