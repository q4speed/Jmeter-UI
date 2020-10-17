import Controller from "@/jmeter/components/controllers/controller";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "IfControllerPanel",
      testclass: "IfController",
      testname: "IfController",
      enabled: "true"
    },
  }
};

export default class IfController extends Controller {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);

    this.condition = this.initStringProp(this.props, 'IfController.condition');
    this.evaluateAll = this.initBoolProp(this.props, 'IfController.evaluateAll');
    this.useExpression = this.initBoolProp(this.props, 'IfController.useExpression', true);
  }
}
