import UnsupportedComponent from "@/jmeter/others/unspported-component";
import JmeterTestPlan from "@/jmeter/others/jmeter-test-plan";

const components = require.context('@/jmeter/', true, /index\.js$/)

const map = function (obj) {
  let component = {};
  component[obj.name] = obj;
  return component;
}

const reduce = function (o1, o2) {
  return {...o1, ...o2};
}

const filter = function (key) {
  let specialKeys = ["others/jmx", "others/jmeter-test-plan"];
  for (let sk of specialKeys) {
    if (key.indexOf(sk) >= 0) {
      return false;
    }
  }
  return true;
}

const COMPONENTS = {
  ...components.keys().filter(filter).map(key => {
    return map(components(key).default)
  }).reduce(reduce),
  jmeterTestPlan: JmeterTestPlan,
};

export const createComponent = function (element) {
  if (element.name) {
    if (COMPONENTS[element.name]) {
      return new COMPONENTS[element.name](element);
    } else {
      return new UnsupportedComponent(element)
    }
  }
}

export const createHashTree = function (options) {
  if (options.elements) {
    let list = [];
    for (let i = 0; i < options.elements.length; i += 2) {
      let element = createComponent(options.elements[i]);
      element.hashTree = createHashTree(options.elements[i + 1]);
      list.push(element);
    }
    return list;
  }
}
