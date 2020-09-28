import Element from "@/jmeter/element";

/**
 * int, long, bool, string
 */
class BasicProp extends Element {
  constructor(options = {}) {
    super(options);
    if (options.elements) {
      this.value = options.elements[0].text;
    }
  }

  toJson() {
    let json = super.toJson();
    if (this.value !== undefined) {
      json.elements = [{
        "type": "text",
        "text": "" + this.value
      }]
    }
    return json;
  }
}

/**
 * value:数值
 */
class IntProp extends BasicProp {
  constructor(options = {}) {
    super(options);
    this.value = options.elements ? parseInt(options.elements[0].text) : undefined;
  }
}

/**
 * value:数值
 */
class LongProp extends BasicProp {
  constructor(options = {}) {
    super(options);
    this.value = options.elements ? parseInt(options.elements[0].text) : undefined;
  }
}

/**
 * value:布尔
 */
class BoolProp extends BasicProp {
  constructor(options = {}) {
    super(options);
    this.value = options.elements ? options.elements[0].text === 'true' : undefined;
  }
}

/**
 * value:字符串
 */
class StringProp extends BasicProp {
  constructor(options = {}) {
    super(options);
    this.value = options.elements ? options.elements[0].text : undefined;
  }
}


/**
 * value: name/value 对象
 */
class ObjProp extends Element {
  constructor(options = {}) {
    super(options);
    if (options.elements) {
      this.value = {};
      options.elements.forEach(e => {
        if (e.name === "name") {
          this.key = e.elements[0].text;
          this.value.name = new BasicProp(e)
        } else {
          this.value.value = new ObjValue(e);
        }
      })
    }
  }

  toJson() {
    let json = super.toJson();
    if (this.value !== undefined) {
      json.elements = [];
      if (this.value.name) json.elements.push(this.value.name.toJson());
      if (this.value.value) json.elements.push(this.value.value.toJson());
    }
    return json;
  }
}

class ObjValue extends Element {
  constructor(options = {}) {
    super(options);
    if (options.elements) {
      this.values = {}
      options.elements.forEach(e => {
        this.values[e.name] = new BasicProp(e);
      })
    }
  }

  toJson() {
    let json = super.toJson();
    if (this.values !== undefined) {
      json.elements = [];
      Object.keys(this.values).forEach(v => {
        json.elements.push(this.values[v].toJson());
      })
    }
    return json;
  }
}

/**
 * values:数组
 */
class CollectionProp extends Element {
  constructor(options = {}) {
    super(options);
    if (options.elements) {
      this.values = [];
      options.elements.forEach(e => {
        this.values.push(new ElementProp(e));
      })
    }
  }

  toJson() {
    let json = super.toJson();
    if (this.values !== undefined) {
      json.elements = [];
      this.values.forEach(v => {
        json.elements.push(v.toJson());
      })
    }
    return json;
  }
}

/**
 * values:对象
 */
export default class ElementProp extends Element {
  constructor(options = {}) {
    super(options);
    if (options.elements) {
      this.values = this.getProps(options.elements);
    }
  }

  getProps(elements) {
    if (elements) {
      let props = {};
      elements.forEach(e => {
        let type = e.name;
        let name;
        if (e.attributes && e.attributes.name) {
          name = e.attributes.name;
        }
        switch (type) {
          case "intProp":
            props[name] = new IntProp(e);
            break;
          case "longProp":
            props[name] = new LongProp(e);
            break;
          case "boolProp":
            props[name] = new BoolProp(e);
            break;
          case "stringProp":
            props[name] = new StringProp(e);
            break;
          case "elementProp":
            props[name] = new ElementProp(e);
            break;
          case "collectionProp":
            props = new CollectionProp(e);
            break;
          case "objProp":
            // eslint-disable-next-line no-case-declarations
            const obj = new ObjProp(e);
            props[obj.key] = obj;
            break;
        }
      });
      return props;
    }
  }

  toJson() {
    let json = super.toJson();
    if (this.values !== undefined) {
      json.elements = [];
      if (this.values instanceof CollectionProp) {
        json.elements.push(this.values.toJson());
      } else {
        Object.keys(this.values).forEach(key => {
          json.elements.push(this.values[key].toJson());
        });
      }
    }
    return json;
  }
}

