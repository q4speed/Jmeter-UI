import UnsupportedComponent from "@/jmeter/components/others/unspported-component";
import JmeterTestPlan from "@/jmeter/jmeter-test-plan";

const components = require.context('@/jmeter/components/', true, /index\.js$/)

const map = function (component) {
  let components = {};
  components[component.name] = component;
  return components;
}

const reduce = function (c1, c2) {
  return {...c1, ...c2};
}

const COMPONENTS = {
  ...components.keys().map(key => {
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
