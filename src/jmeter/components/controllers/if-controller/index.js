import Controller from "@/jmeter/components/controllers/controller";

export default class IfController extends Controller {
  constructor(options = {}) {
    super(options);

    this.condition = this.initStringProp(this.props, 'IfController.condition');
    this.evaluateAll = this.initBoolProp(this.props, 'IfController.evaluateAll');
    this.useExpression = this.initBoolProp(this.props, 'IfController.useExpression', true);
  }
}
