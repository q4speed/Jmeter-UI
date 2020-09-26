import {TestPlan} from "@/jmeter/others/test-plan";
import {JmeterTestPlan} from "@/jmeter/others/jmeter-test-plan";
import {UnsupportedComponent} from "@/jmeter/others/unspported-component";

export const uuid = function () {
  let d = new Date().getTime();
  let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
};

export const ELEMENTS = {
  jmeterTestPlan: JmeterTestPlan,
  TestPlan: TestPlan,
};

export class Element {
  constructor(options = {}) {
    this.id = options.id || uuid();
    if (options.type) {
      this.type = options.type;
    }
    if (options.name) {
      this.name = options.name;
    }
    if (options.attributes) {
      this.attributes = options.attributes;
      if (options.attributes.testname) {
        this.label = options.attributes.testname;
      }
    }
  }

  createElement(element) {
    if (element.name) {
      if (ELEMENTS[element.name]) {
        return new ELEMENTS[element.name](element);
      } else {
        return new UnsupportedComponent(element)
      }
    }
  }

  createHashTree(options) {
    if (options.elements) {
      let list = [];
      for (let i = 0; i < options.elements.length; i += 2) {
        let element = this.createElement(options.elements[i]);
        element.hashTree = this.createHashTree(options.elements[i + 1]);
        list.push(element);
      }
      return list;
    }
  }

  toJson() {
    let json = {};
    if (this.type) {
      json.type = this.type;
    }
    if (this.name) {
      json.name = this.name;
    }
    if (this.attributes) {
      json.attributes = this.attributes;
    }
    this.elements.forEach(element => {
      json.push(element.toJson());
    });
    return json;
  }
}

export class TestElement extends Element {
  constructor(options) {
    super(options);
  }

  basicProps(elements, name) {
    if (elements) {
      let props = {};
      elements.forEach(e => {
        if (e.attributes.name === name) {
          switch (e.name) {
            case "intProp":
              props[name] = this.intProp(e);
              break;
            case "longProp":
              props[name] = this.longProp(e);
              break;
            case "boolProp":
              props[name] = this.boolProp(e);
              break;
            case "stringProp":
              props[name] = this.stringProp(e);
              break;
          }
        }
      });
      return props;
    }
  }

  intProp(element) {
    return element.elements ? parseInt(element.elements[0].text) : undefined;
  }

  longProp(element) {
    return this.intProp(element);
  }

  boolProp(element) {
    return element.elements ? element.elements[0].text === 'true' : undefined;
  }

  stringProp(element) {
    return element.elements ? element.elements[0].text : undefined;
  }
}





