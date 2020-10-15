import HashTreeElement from "@/jmeter/hashtree";

export default class ThreadGroup extends HashTreeElement {
  constructor(options = {}) {
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
}
