import Element from "@/jmeter/element";

export class Prop extends Element {
    constructor(options = {}) {
        super(options);
        if (options.attributes) {
            this.key = options.attributes.name;
        }
    }
}

/**
 * int, long, bool, string
 */
export class BasicProp extends Prop {
    constructor(options = {}) {
        super(options);
        if (options.elements) {
            this.value = options.elements[0].text;
        }
    }

    set(value = "") {
        this.value = value;
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
export class IntProp extends BasicProp {
    constructor(options = {}) {
        super(options);
        this.value = options.elements ? parseInt(options.elements[0].text) : undefined;
    }
}

/**
 * value:数值
 */
export class LongProp extends BasicProp {
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
export class StringProp extends BasicProp {
    constructor(options = {}) {
        super(options);
        this.value = options.elements ? options.elements[0].text : undefined;
    }
}


/**
 * value: name/value 对象
 */
export class ObjProp extends Prop {
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

export class ObjValue extends Element {
    constructor(options = {}) {
        super(options);
        if (options.elements) {
            this.value = {}
            options.elements.forEach(e => {
                this.value[e.name] = new BasicProp(e);
            })
        }
    }

    toJson() {
        let json = super.toJson();
        if (this.value !== undefined) {
            json.elements = [];
            Object.keys(this.value).forEach(v => {
                json.elements.push(this.value[v].toJson());
            })
        }
        return json;
    }
}

/**
 * elements:数组
 */
export class CollectionProp extends Prop {
    constructor(options = {}) {
        super(options);
        this.elements = [];
        if (options.elements) {
            options.elements.forEach(e => {
                this.add(new ElementProp(e));
            })
        }
    }

    add(prop) {
        if (prop instanceof Prop) {
            this.elements.push(prop);
        } else {
            console.error("prop is not Prop");
        }
    }

    clear() {
        this.elements = [];
    }

    forEach(func) {
        this.elements.forEach(func);
    }

    toJson() {
        let json = super.toJson();
        if (this.elements && this.elements.length > 0) {
            json.elements = [];
            this.elements.forEach(v => {
                json.elements.push(v.toJson());
            })
        }
        return json;
    }
}

/**
 * elements: Map
 */
export class ElementProp extends Prop {
    constructor(options = {}) {
        super(options);
        this.elements = {};
        if (options.elements) {
            this.elements = getProps(options.elements);
        }
    }

    add(prop) {
        if (prop instanceof Prop) {
            this.elements[prop.key] = prop;
        } else {
            console.error("prop is not Prop");
        }
    }

    remove(key) {
        delete this.elements[key];
    }

    toJson() {
        let json = super.toJson();
        let keys = Object.keys(this.elements);
        if (keys.length > 0) {
            json.elements = [];
            keys.forEach(key => {
                json.elements.push(this.elements[key].toJson());
            });
        }
        return json;
    }
}

export const getProps = function (elements) {
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
                    props[name] = new CollectionProp(e);
                    break;
                case "objProp":
                    const obj = new ObjProp(e);
                    props[obj.key] = obj;
                    break;
            }
        });
        return props;
    }
}

export const basicProp = function (type, name, value) {
    let tag = type.name.replace(type.name[0], type.name[0].toLowerCase());
    let options = {
        "type": "element",
        "name": tag,
        "attributes": {
            "name": name
        },
        "elements": [
            {
                "type": "text",
                "text": "" + value
            }
        ]
    }

    return new type(options);
}

export const intProp = function (name, value) {
    return basicProp(IntProp, name, value)
}

export const longProp = function (name, value) {
    return basicProp(LongProp, name, value)
}

export const boolProp = function (name, value) {
    return basicProp(BoolProp, name, value)
}

export const stringProp = function (name, value) {
    return basicProp(StringProp, name, value)
}

export const collectionProp = function (name) {
    let options = {
        "type": "element",
        "name": "collectionProp",
        "attributes": {
            "name": name
        },
        elements: []
    };
    return new CollectionProp(options);
}

export const elementProp = function (name, elementType) {
    let options = {
        "type": "element",
        "name": "elementProp",
        "attributes": {
            "name": name,
            "elementType": elementType
        },
        elements: []
    };
    return new ElementProp(options);
}

