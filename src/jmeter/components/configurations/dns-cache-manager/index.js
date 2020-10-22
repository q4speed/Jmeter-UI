import {elementProp, stringProp} from "@/jmeter/props";
import Configuration from "@/jmeter/components/configurations/configuration";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "DNSCachePanel",
      testclass: "DNSCacheManager",
      testname: "DNS Cache Manager",
      enabled: "true"
    },
  }
};

export default class DNSCacheManager extends Configuration {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);

    this.clearEachIteration = this.initBoolProp(this.props, "DNSCacheManager.clearEachIteration", false)
    this.isCustomResolver = this.initBoolProp(this.props, "DNSCacheManager.isCustomResolver", false)

    this.servers = [];
    let serversCollectionProp = this.initCollectionProp(this.props, 'DNSCacheManager.servers');
    serversCollectionProp.forEach(stringProp => {
      this.servers.push({server: stringProp.value, enable: true});
    })

    this.hosts = [];
    let hostsCollectionProp = this.initCollectionProp(this.props, 'DNSCacheManager.hosts');
    hostsCollectionProp.forEach(elementProp => {
      let name = this.initStringProp(elementProp.elements, 'StaticHost.Name').value;
      let address = this.initStringProp(elementProp.elements, 'StaticHost.Address').value;
      let host = {name: name, address: address, enable: true};
      this.hosts.push(host);
    })
  }

  updateProps() {
    let serversCollectionProp = this.props['DNSCacheManager.servers'];
    serversCollectionProp.clear();
    this.servers.forEach(item => {
      if (item.enable !== false) {
        serversCollectionProp.add(stringProp("", item.server));
      }
    })

    let hostsCollectionProp = this.props['DNSCacheManager.servers'];
    hostsCollectionProp.clear();
    this.hosts.forEach(item => {
      if (item.enable !== false) {
        let ep = elementProp(item.name, "StaticHost");
        ep.add(stringProp("StaticHost.Name", item.name));
        ep.add(stringProp("StaticHost.Address", item.value));
        hostsCollectionProp.add(ep)
      }
    })
  }

  toJson() {
    this.updateProps();
    return super.toJson();
  }
}

export const schema = {
  DNSCacheManager: DNSCacheManager
}
