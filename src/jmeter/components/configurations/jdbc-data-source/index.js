import {elementProp, stringProp} from "@/jmeter/props";
import Configuration from "@/jmeter/components/configurations/configuration";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "TestBeanGUI",
      testclass: "JDBCDataSource",
      testname: "JDBC Connection Configuration",
      enabled: "true"
    },
  }
};

export default class JDBCDataSource extends Configuration {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);
    this.dataSource = this.initStringProp("dataSource")

    this.poolMax = this.initStringProp("poolMax", 0)
    this.timeout = this.initStringProp("timeout", 10000)
    this.trimInterval = this.initStringProp("trimInterval", 60000)
    this.autoCommit = this.initBoolProp("autocommit", true)
    this.transactionIsolation = this.initStringProp("transactionIsolation", "DEFAULT")
    this.preInit = this.initBoolProp("preinit", false)
    this.initQuery = this.initStringProp("initQuery")

    this.keepAlive = this.initBoolProp("keepAlive", true)
    this.checkQuery = this.initStringProp("checkQuery")
    this.connectionAge = this.initStringProp("connectionAge", 5000)

    this.dbUrl = this.initStringProp("dbUrl")
    this.driver = this.initStringProp("driver")
    this.username = this.initStringProp("username")
    this.password = this.initStringProp("password")
    this.connectionProperties = this.initStringProp("connectionProperties")
  }
}

export const schema = {
  JDBCDataSource: JDBCDataSource
}
