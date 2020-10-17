import HashTreeElement from "@/jmeter/hashtree";
import Assertion from "@/jmeter/components/assertions/assertion";
import Configuration from "@/jmeter/components/configurations/configuration";
import Sampler from "@/jmeter/components/samplers/sampler";
import PreProcessor from "@/jmeter/components/pre-processors/pre-processor";
import PostProcessor from "@/jmeter/components/post-processors/post-processor";
import Timer from "@/jmeter/components/timers/timer";
import Listener from "@/jmeter/components/listeners/listener";

const AllowDrop = [Assertion, Configuration, Controller, Sampler, PreProcessor, PostProcessor, Timer, Listener];

const AllowChildren = ["Assertion", "Configuration", "Controller", "Sampler", "PreProcessor", "PostProcessor", "Timer", "Listener"];
const AllowParent = ["Controller"];

export default class Controller extends HashTreeElement {
  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging, drop, type) {
    for (const type of AllowDrop) {
      if (dragging instanceof type) return true;
    }
    return false;
  }

  getAllowMenu() {
    return {children: AllowChildren, parent: AllowParent};
  }

}
