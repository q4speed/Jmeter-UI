import HashTreeElement from "@/jmeter/hashtree";
import Assertion from "@/jmeter/components/assertions/assertion";
import Configuration from "@/jmeter/components/configurations/configuration";
import Listener from "@/jmeter/components/listeners/listener";
import Sampler from "@/jmeter/components/samplers/sampler";
import PreProcessor from "@/jmeter/components/pre-pocessors/pre-processor";
import PostProcessor from "@/jmeter/components/post-processors/post-processor";
import Timer from "@/jmeter/components/timers/timer";

export default class Controller extends HashTreeElement {
  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    let types = [Assertion, Configuration, Controller, Sampler, PreProcessor, PostProcessor, Timer, Listener];
    for (const type of types) {
      if (dragging instanceof type) return true;
    }
    return false;
  }
}
