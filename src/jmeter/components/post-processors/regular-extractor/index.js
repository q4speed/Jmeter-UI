import PostProcessor from "@/jmeter/components/post-processors/post-processor";

export default class RegexExtractor extends PostProcessor {
  constructor(options = {}) {
    super(options);
  }
}
