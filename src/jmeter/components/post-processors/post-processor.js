import HashTreeElement from "@/jmeter/hashtree";
import Sampler from "@/jmeter/components/samplers/sampler";
import Assertion from "@/jmeter/components/assertions/assertion";
import Configuration from "@/jmeter/components/configurations/configuration";
import Listener from "@/jmeter/components/listeners/listener";

export default class PostProcessor extends HashTreeElement {
  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    return false;
  }
}
