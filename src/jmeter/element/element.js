/**
 * ViewData:用于显示的数据
 */
export class ViewData {
  toComponent(element) {
    if (element.name) {
      if (ELEMENTS[element.name]) {
        return new ELEMENTS[element.name](element);
      } else {
        return new UnsupportedComponent(element)
      }
    }
  }

  toElements(elements) {
    if (elements) {
      let list = [];
      if (elements.length > 1) {
        for (let i = 0; i < elements.length; i += 2) {
          let element = this.toComponent(elements[i]);
          element.hashTree = this.toComponent(elements[i + 1]);
          list.push(element);
        }
      } else {
        list.push(this.toComponent(elements[0]));
      }
      return list;
    }
  }
}

/**
 * JSON(由JMX转换)与ViewData互相转换
 */
export class Element extends ViewData {
  constructor(options = {}) {
    super();
    if (options.type) {
      this.type = options.type;
    }
    if (options.name) {
      this.name = options.name;
    }
    if (options.attributes) {
      this.attributes = options.attributes;
    }
    if (options.elements) {
      // this.elements = this.toElements(options.elements);
      this.elements = [];
      options.elements.forEach(element => {
        this.elements.push(this.toComponent(element));
      })
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
    })
    return json;
  }
}

//
// let intProp = function (element) {
//   let options = {};
//   options[element.attributes.name] = element.elements ? parseInt(element.elements[0].text) : undefined
//   return options;
// }
//
// let longProp = function (element) {
//   return intProp(element);
// }
//
// let boolProp = function (element) {
//   let options = {};
//   options[element.attributes.name] = element.elements ? element.elements[0].text === 'true' : undefined
//   return options;
// }
//
// let stringProp = function (element) {
//   let options = {};
//   options[element.attributes.name] = element.elements ? element.elements[0].text : undefined
//   return options;
// }

export class UnsupportedComponent extends Element {
  constructor(options) {
    super(options)
  }
}

export class JMX extends Element {
  constructor(options) {
    super(options)
    this.version = options.declaration.attributes.version;
    this.encoding = options.declaration.attributes.encoding;
  }

  toJson() {
    let json = super.toJson();
    json.declaration = {
      version: this.version,
      encoding: this.encoding
    }
    return json;
  }
}

export class JmeterTestPlan extends Element {
  constructor(options) {
    super(options)
  }
}

export class HashTree extends Element {
  constructor(options) {
    super(options)
  }
}

export class TestPlan extends Element {
  constructor(options) {
    super(options)
  }
}

export const ELEMENTS = {
  jmeterTestPlan: JmeterTestPlan,
  hashTree: HashTree,
  TestPlan: TestPlan,
}
