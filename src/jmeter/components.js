import UnsupportedComponent from "@/jmeter/others/unspported-component";
import JmeterTestPlan from "@/jmeter/others/jmeter-test-plan";
import TestPlan from "@/jmeter/others/test-plan";

export const COMPONENTS = {
  jmeterTestPlan: JmeterTestPlan,
  TestPlan: TestPlan,
};

export const createElement = function (element) {
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
      let element = createElement(options.elements[i]);
      element.hashTree = createHashTree(options.elements[i + 1]);
      list.push(element);
    }
    return list;
  }
}
