import Sampler from "@/jmeter/components/samplers/sampler";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "TCPSamplerGui",
      testclass: "TCPSampler",
      testname: "TCPSampler",
      enabled: "true"
    },
  }
};

export default class TCPSampler extends Sampler {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);
  }
}

export const schema = {
  name: "TCPSampler",
  class: TCPSampler
}
