import UnsupportedComponent from "@/jmeter/components/others/unspported-component";
import JmeterTestPlan from "@/jmeter/jmx/jmeter-test-plan";

const components = require.context('@/jmeter/components/', true, /index\.js$/);
const assertions = require.context('@/jmeter/components/assertions', true, /index\.js$/);
const configurations = require.context('@/jmeter/components/configurations', true, /index\.js$/);
const controllers = require.context('@/jmeter/components/controllers', true, /index\.js$/);
const listeners = require.context('@/jmeter/components/listeners', true, /index\.js$/);
const postProcessors = require.context('@/jmeter/components/post-processors', true, /index\.js$/);
const preProcessors = require.context('@/jmeter/components/pre-processors', true, /index\.js$/);
const samplers = require.context('@/jmeter/components/samplers', true, /index\.js$/);
const timers = require.context('@/jmeter/components/timers', true, /index\.js$/);

const getMenus = list => {
  return [...list.keys().map(key => {
    let component = list(key).default;
    return {label: component.name, value: component.name};
  })]
}
// 菜单分类
export const MENUS = {
  "Assertion": getMenus(assertions),
  "Configuration": getMenus(configurations),
  "Controller": getMenus(controllers),
  "Listener": getMenus(listeners),
  "PostProcessor": getMenus(postProcessors),
  "PreProcessor": getMenus(preProcessors),
  "Sampler": getMenus(samplers),
  "Timer": getMenus(timers),
}

const map = function (component) {
  let components = {};
  components[component.name] = component;
  return components;
}

const reduce = function (c1, c2) {
  return {...c1, ...c2};
}

export const COMPONENTS = {
  ...components.keys().map(key => {
    return map(components(key).default)
  }).reduce(reduce),
  jmeterTestPlan: JmeterTestPlan,
};

export const createComponent = function (name) {
  let component = COMPONENTS[name];
  if (component) {
    return new component();
  } else {
    return new UnsupportedComponent()
  }
}

export const loadComponent = function (element, hashTree) {
  if (element.name) {
    let component = COMPONENTS[element.name];
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
