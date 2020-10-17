import Listener from "@/jmeter/components/listeners/listener";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "BackendListenerGui",
      testclass: "BackendListener",
      testname: "BackendListener",
      enabled: "true"
    },
  }
};

export default class BackendListener extends Listener {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);
  }
}

export const schema = {
  name: "BackendListener",
  class: BackendListener
}
