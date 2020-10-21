import PostProcessor from "@/jmeter/components/post-processors/post-processor";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "RegexExtractorGui",
      testclass: "RegexExtractor",
      testname: "RegexExtractor",
      enabled: "true"
    },
  }
};

export default class RegexExtractor extends PostProcessor {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);
  }
}

export const schema = {
  RegexExtractor: RegexExtractor
}

