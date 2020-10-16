import HashTreeElement from "@/jmeter/hashtree";
import Assertion from "@/jmeter/components/assertions/assertion";
import Configuration from "@/jmeter/components/configurations/configuration";
import Listener from "@/jmeter/components/listeners/listener";
import Timer from "@/jmeter/components/timers/timer";
import PreProcessor from "@/jmeter/components/pre-pocessors/pre-processor";
import PostProcessor from "@/jmeter/components/post-processors/post-processor";

export default class Sampler extends HashTreeElement {
  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    let types = [Assertion, Configuration, PreProcessor, PostProcessor, Timer, Listener];
    for (const type of types) {
      if (dragging instanceof type) return true;
    }
    return false;
  }
}
