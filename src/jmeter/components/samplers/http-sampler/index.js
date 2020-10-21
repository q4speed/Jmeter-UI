import {boolProp, elementProp, stringProp} from "@/jmeter/props";
import Sampler from "@/jmeter/components/samplers/sampler";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "HttpTestSampleGui",
      testclass: "HTTPSamplerProxy",
      testname: "HTTPSamplerProxy",
      enabled: "true"
    },
  }
};

export default class HTTPSamplerProxy extends Sampler {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);
    this.protocol = this.initStringProp(this.props, 'HTTPSampler.protocol', "https");
    this.domain = this.initStringProp(this.props, 'HTTPSampler.domain');
    this.port = this.initStringProp(this.props, 'HTTPSampler.port');

    this.method = this.initStringProp(this.props, 'HTTPSampler.method', "GET");
    this.path = this.initStringProp(this.props, 'HTTPSampler.path');
    this.contentEncoding = this.initStringProp(this.props, 'HTTPSampler.contentEncoding', "UTF-8");

    this.autoRedirects = this.initBoolProp(this.props, 'HTTPSampler.auto_redirects');
    this.followRedirects = this.initBoolProp(this.props, 'HTTPSampler.follow_redirects', true);
    this.useKeepalive = this.initBoolProp(this.props, 'HTTPSampler.use_keepalive', true);
    this.doMultipartPost = this.initBoolProp(this.props, 'HTTPSampler.DO_MULTIPART_POST');
    this.browserCompatibleMultipart = this.initBoolProp(this.props, 'HTTPSampler.BROWSER_COMPATIBLE_MULTIPART');
    this.embeddedUrlRe = this.initStringProp(this.props, 'HTTPSampler.embedded_url_re');
    this.connectTimeout = this.initStringProp(this.props, 'HTTPSampler.connect_timeout');
    this.responseTimeout = this.initStringProp(this.props, 'HTTPSampler.response_timeout');

    this.arguments = [];

    let elementProp = this.initElementProp(this.props, 'HTTPsampler.Arguments', 'Arguments');
    let collectionProp = this.initCollectionProp(elementProp.elements, 'Arguments.arguments');

    collectionProp.forEach(elementProp => {
      let name = elementProp.elements['Argument.name'].value;
      let value = elementProp.elements['Argument.value'].value;

      let alwaysEncode = elementProp.elements['HTTPArgument.always_encode'].value;
      let useEquals = elementProp.elements['HTTPArgument.use_equals'].value || true;
      let arg = {name: name, value: value, alwaysEncode: alwaysEncode, useEquals: useEquals, enable: true};
      let contentType = elementProp.elements['HTTPArgument.content_type'];
      if (contentType) {
        arg.contentType = contentType.value;
      } else {
        arg.contentType = "text/plain";
      }

      this.arguments.push(arg);
    })

    if (this.arguments.length > 0 && this.arguments[0].name === "") {
      this.body = this.arguments[0].value;
    }
  }

  updateProps() {
    let collectionProp = this.props['HTTPsampler.Arguments'].elements['Arguments.arguments'];
    collectionProp.clear();
    this.arguments.forEach(variable => {
      if (variable.enable !== false) {
        let ep = elementProp(variable.name, "HTTPArgument");
        ep.add(stringProp("Argument.name", variable.name));
        ep.add(stringProp("Argument.value", variable.value));
        ep.add(stringProp("Argument.metadata", "="));
        ep.add(boolProp("HTTPArgument.always_encode", variable.alwaysEncode));
        ep.add(boolProp("HTTPArgument.use_equals", variable.useEquals));
        if (variable.contentType) {
          ep.add(stringProp("HTTPArgument.content_type", variable.contentType));
        }
        collectionProp.add(ep)
      }
    })
  }

  toJson() {
    this.updateProps();
    return super.toJson();
  }
}

export const schema = {
  HTTPSamplerProxy: HTTPSamplerProxy
}

