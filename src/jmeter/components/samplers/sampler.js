import HashTreeElement from "@/jmeter/hashtree";
import Assertion from "@/jmeter/components/assertions/assertion";
import Configuration from "@/jmeter/components/configurations/configuration";
import PreProcessor from "@/jmeter/components/pre-processors/pre-processor";
import PostProcessor from "@/jmeter/components/post-processors/post-processor";
import Timer from "@/jmeter/components/timers/timer";
import Listener from "@/jmeter/components/listeners/listener";
import Controller from "@/jmeter/components/controllers/controller";

const AllowDrop = [Assertion, Configuration, PreProcessor, PostProcessor, Timer, Listener];
const AllowChildren = ["Assertion", "Configuration", "PreProcessor", "PostProcessor", "Timer", "Listener"];
const AllowParent = ["Controller"];

export default class Sampler extends HashTreeElement {
  icon = "el-icon-link"

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
