import HashTreeElement from "@/jmeter/hashtree";
import Sampler from "@/jmeter/components/samplers/sampler";
import Assertion from "@/jmeter/components/assertions/assertion";
import Configuration from "@/jmeter/components/configurations/configuration";

export default class Listener extends HashTreeElement {
  constructor(options = {}) {
    super(options);
  }

  allowDrop(dragging) {
    let types = [HashTreeElement];
    for (const type of types) {
      if (dragging instanceof type) return true;
    }
    return false;
  }
}
