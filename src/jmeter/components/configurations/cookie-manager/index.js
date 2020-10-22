import {boolProp, elementProp, longProp, stringProp} from "@/jmeter/props";
import Configuration from "@/jmeter/components/configurations/configuration";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "CookiePanel",
      testclass: "CookieManager",
      testname: "HTTP Cookie Manager",
      enabled: "true"
    },
  }
};

export default class CookieManager extends Configuration {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);

    this.clearEachIteration = this.initBoolProp(this.props, "CookieManager.clearEachIteration", false)
    this.controlledByThreadGroup = this.initBoolProp(this.props, "CookieManager.controlledByThreadGroup", false)
    this.policy = this.initStringProp(this.props, "CookieManager.policy")

    this.cookies = [];
    let collectionProp = this.initCollectionProp(this.props, 'CookieManager.cookies');
    collectionProp.forEach(elementProp => {
      let name = elementProp.key;
      let value = elementProp.elements['Cookie.value'].value;
      let domain = elementProp.elements['Cookie.domain'].value;
      let path = elementProp.elements['Cookie.path'].value;
      let secure = elementProp.elements['Cookie.secure'].value;
      let expires = elementProp.elements['Cookie.expires'].value;
      let pathSpecified = elementProp.elements['Cookie.path_specified'].value;
      let domainSpecified = elementProp.elements['Cookie.domain_specified'].value;
      let cookie = {
        name: name,
        value: value,
        domain: domain,
        path: path,
        secure: secure,
        expires: expires,
        pathSpecified: pathSpecified,
        domainSpecified: domainSpecified,
        enable: true
      };
      this.cookies.push(cookie);
    })
  }

  updateProps() {
    let collectionProp = this.props['CookieManager.cookies'];
    collectionProp.clear();
    this.cookies.forEach(cookie => {
      if (cookie.enable !== false) {
        let ep = elementProp(cookie.name, "Cookie", {testname: cookie.name});
        ep.add(stringProp("Cookie.value", cookie.value));
        ep.add(stringProp("Cookie.domain", cookie.domain));
        ep.add(stringProp("Cookie.path", cookie.path));
        ep.add(boolProp("Cookie.secure", cookie.secure));
        ep.add(longProp("Cookie.expires", cookie.expires === undefined ? 0 : cookie.expires));
        ep.add(boolProp("Cookie.path_specified", cookie.pathSpecified));
        ep.add(boolProp("Cookie.domain_specified", cookie.domainSpecified));
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
  CookieManager: CookieManager
}
