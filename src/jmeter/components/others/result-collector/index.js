import HashTreeElement from "@/jmeter/hashtree";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {guiclass: "ViewResultsFullVisualizer", testclass: "ResultCollector", testname: "View Results Tree", enabled: "true"},
  }
};

export default class ResultCollector extends HashTreeElement {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);
  }

  allowDrag() {
    return false;
  }

  allowDrop(dragging) {
    return false;
  }
}
