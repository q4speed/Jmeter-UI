export default {basicProps, intProp, longProp, boolProp, stringProp}

export const basicProps = function (elements, name) {
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

export const intProp = function (element) {
  return element.elements ? parseInt(element.elements[0].text) : undefined;
}

export const longProp = function (element) {
  return this.intProp(element);
}

export const boolProp = function (element) {
  return element.elements ? element.elements[0].text === 'true' : undefined;
}

export const stringProp = function (element) {
  return element.elements ? element.elements[0].text : undefined;
}
