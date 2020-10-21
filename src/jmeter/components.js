import UnsupportedComponent from "@/jmeter/components/others/unspported-component";
import JmeterTestPlan from "@/jmeter/jmx/jmeter-test-plan";

// JMX models
const models = require.context('@/jmeter/components/', true, /index\.js$/);
// Vue控件
const components = require.context('@/jmeter/components/', true, /main\.vue$/);

const map = function (schema) {
  let components = {};
  components[schema.name] = schema.class;
  return components;
}

const reduce = function (c1, c2) {
  return {...c1, ...c2};
}

export const MODELS = {
  ...models.keys().map(key => {
    return map(models(key).schema)
  }).reduce(reduce),
  jmeterTestPlan: JmeterTestPlan,
};

export const createComponent = function (name) {
  let component = MODELS[name];
  if (component) {
    return new component();
  } else {
    return new UnsupportedComponent()
  }
}

export const loadComponent = function (element, hashTree) {
  if (element.name) {
    let component = MODELS[element.name];
    if (component) {
      return new component({options: element, hashTree: hashTree});
    } else {
      return new UnsupportedComponent({options: element, hashTree: hashTree})
    }
  }
}

export const loadHashTree = function (options) {
  if (options.elements) {
    let list = [];
    for (let i = 0; i < options.elements.length; i += 2) {
      let element = loadComponent(options.elements[i], options.elements[i + 1]);
      list.push(element);
    }
    return list;
  }
}

export const COMPONENTS = [
  ...components.keys().map(key => {
    return components(key).default.name;
  })
]

export const hasComponent = name => {
  return COMPONENTS.includes(name) ? name : "UnsupportedComponent";
}
