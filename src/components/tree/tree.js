import {TYPE as Assertion} from "@/jmeter/components/assertions/assertion";
import {TYPE as Configuration} from "@/jmeter/components/configurations/configuration";
import {TYPE as Controller} from "@/jmeter/components/controllers/controller";
import {TYPE as Listener} from "@/jmeter/components/listeners/listener";
import {TYPE as PostProcessor} from "@/jmeter/components/post-processors/post-processor";
import {TYPE as PreProcessor} from "@/jmeter/components/pre-processors/pre-processor";
import {TYPE as Sampler} from "@/jmeter/components/samplers/sampler";
import {TYPE as Timer} from "@/jmeter/components/timers/timer";
import {TYPE as TestPlan} from "@/jmeter/components/others/test-plan";
import {TYPE as ThreadGroup} from "@/jmeter/components/others/thread-group";
import {TYPE as UnsupportedComponent} from "@/jmeter/components/others/unspported-component";
import {TYPE as ResultCollector} from "@/jmeter/components/others/result-collector";

const MENUS = {};
MENUS[Assertion] = {
  label: "wm.assertions.label",
  value: Assertion,
  children: [
    {label: "wm.assertions.response_assertion.label", value: "ResponseAssertion"},
    {label: "wm.assertions.duration_assertion.label", value: "DurationAssertion"},
    {label: "wm.assertions.json_assertion.label", value: "JSONPathAssertion"},

  ],
};
MENUS[Configuration] = {
  label: "wm.configurations.label",
  value: Configuration,
  children: [
    {label: "wm.configurations.header_manager.label", value: "HeaderManager"},
    {label: "wm.configurations.cookie_manager.label", value: "CookieManager"},
    {label: "wm.configurations.dns_cache_manager.label", value: "DNSCacheManager"},
    {label: "wm.configurations.arguments.label", value: "Arguments"},
  ],
}
MENUS[Controller] = {
  label: "wm.controllers.label",
  value: Controller,
  children: [
    {label: "wm.controllers.if.label", value: "IfController"}
  ]
}
MENUS[Listener] = {
  label: "wm.listeners.label",
  value: Listener,
  children: [
    {label: "wm.listeners.backend.label", value: "BackendListener"}
  ]
}
MENUS[PostProcessor] =
  {
    label: "wm.post_processors.label",
    value: PostProcessor,
    children: [
      {label: "wm.post_processors.regex_extractor.label", value: "RegexExtractor"},
      {label: "wm.post_processors.json_processor.label", value: "JSONPostProcessor"}
    ],
  }
MENUS[PreProcessor] = {
  label: "wm.pre_processors.label",
  value: PreProcessor,
  children: [],
}
MENUS[Sampler] = {
  label: "wm.samplers.label",
  value: Sampler,
  children: [
    {label: "wm.samplers.http.label", value: "HTTPSamplerProxy"},
    {label: "wm.samplers.tcp.label", value: "TCPSampler"}
  ],
}
MENUS[Timer] = {
  label: "wm.timers.label",
  value: Timer,
  children: [
    {label: "wm.timers.constant.label", value: "ConstantTimer"}
  ],
}
MENUS[ThreadGroup] = {
  label: "wm.others.thread_group.label",
  value: ThreadGroup,
}


const ICONS = {};
ICONS[Assertion] = "el-icon-finished";
ICONS[Configuration] = "el-icon-setting";
ICONS[Controller] = "el-icon-guide";
ICONS[Listener] = "el-icon-view";
ICONS[PostProcessor] = "el-icon-attract";
ICONS[PreProcessor] = "";
ICONS[Sampler] = "el-icon-link";
ICONS[Timer] = "el-icon-date";
ICONS[TestPlan] = "el-icon-tickets";
ICONS[ThreadGroup] = "el-icon-s-unfold";
ICONS[UnsupportedComponent] = "el-icon-warning";

const allowParent = (component) => {
  let parent;
  switch (component.$type) {
    case Controller:
      parent = [Controller];
      break;
    case Sampler:
      parent = [Controller];
      break;
    default:
      parent = [];
      break;
  }
  return parent;
}

const allowChildren = (component) => {
  let children;
  switch (component.$type) {
    case Controller:
      children = [Assertion, Configuration, Controller, Sampler, PreProcessor, PostProcessor, Timer, Listener];
      break;
    case Sampler:
      children = [Assertion, Configuration, PreProcessor, PostProcessor, Timer, Listener];
      break;
    case TestPlan:
      children = [Assertion, Configuration, Controller, Sampler, PreProcessor, PostProcessor, Timer, Listener];
      break;
    case ThreadGroup:
      children = [Assertion, Configuration, Controller, Sampler, PreProcessor, PostProcessor, Timer, Listener];
      break;
    default:
      children = [];
      break;
  }
  return children;
}

export const allowDrop = (dragging, drop, type) => {
  if (type === "inner") {
    let allowDrop = allowChildren(drop);
    return allowDrop.includes(dragging.$type);
  }
  return true;
}

export const allowDrag = (dragging) => {
  let allow;
  switch (dragging.$type) {
    case TestPlan:
      allow = false;
      break;
    case ResultCollector:
      allow = false;
      break;
    case UnsupportedComponent:
      allow = false;
      break;
    default:
      allow = true;
      break;
  }
  return allow;
}

export const getComponentMenus = (component) => {
  let children = allowChildren(component).map(name => {
    return MENUS[name];
  });
  let parent = allowParent(component).map(name => {
    return MENUS[name];
  });
  return {children: children, parent: parent};
}

export const getIcon = (component) => {
  return ICONS[component.$type] || "";
}

export default {allowDrop, allowDrag, getIcon, getComponentMenus}
