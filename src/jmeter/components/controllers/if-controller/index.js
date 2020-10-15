import HashTreeElement from "@/jmeter/hashtree";

export default class IfController extends HashTreeElement {
  constructor(options = {}) {
    super(options);

    this.condition = this.initStringProp(this.props, 'IfController.condition');
    this.evaluateAll = this.initBoolProp(this.props, 'IfController.evaluateAll');
    this.useExpression = this.initBoolProp(this.props, 'IfController.useExpression', true);
  }
}
