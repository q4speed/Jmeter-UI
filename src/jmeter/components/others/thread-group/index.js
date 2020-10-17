import HashTreeElement from "@/jmeter/hashtree";

const AllowChildren = ["Assertion", "Configuration", "Controller", "Sampler", "PreProcessor", "PostProcessor", "Timer", "Listener"];

const DEFAULT_OPTIONS = {
  options: {
    attributes: {guiclass: "ThreadGroupGui", testclass: "ThreadGroup", testname: "ThreadGroup", enabled: "true"},
  }
};

export default class ThreadGroup extends HashTreeElement {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);

    this.onSampleError = this.initStringProp(this.props, 'ThreadGroup.on_sample_error');
    this.numThreads = this.initStringProp(this.props, 'ThreadGroup.num_threads', 1);
    this.rampTime = this.initStringProp(this.props, 'ThreadGroup.ramp_time', 1);

    let loopController = this.props['ThreadGroup.main_controller'];
    this.continueForever = this.initBoolProp(loopController.elements, 'ThreadGroup.continue_forever');
    this.loops = this.initStringProp(loopController.elements, 'ThreadGroup.loops', 1);

    this.sameUserOnNextIteration = this.initBoolProp(this.props, 'ThreadGroup.same_user_on_next_iteration');
    this.delayedStart = this.initBoolProp(this.props, 'ThreadGroup.delayedStart');
    this.scheduler = this.initBoolProp(this.props, 'ThreadGroup.scheduler');
    this.delay = this.initStringProp(this.props, 'ThreadGroup.delay');
    this.duration = this.initStringProp(this.props, 'ThreadGroup.duration');
  }

  getAllowMenu() {
    return {children: AllowChildren};
  }
}
