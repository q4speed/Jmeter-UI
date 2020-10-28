<template>
  <component-field-set :title="t('wm.configurations.jdbc_data_source.db_config')">
    <el-form-item :label="t('wm.configurations.jdbc_data_source.db_url')" prop="dbUrl">
      <el-input v-model="object.dbUrl.value"/>
    </el-form-item>

    <el-form-item :label="t('wm.configurations.jdbc_data_source.driver')" prop="driver">
      <el-select v-model="object.driver.value"
                 :placeholder="t('wm.commons.please_select')"
                 filterable
                 allow-create
                 class="select-100">
        <el-option label="com.mysql.jdbc.Driver" value="com.mysql.jdbc.Driver"/>
        <el-option label="org.postgresql.Driver" value="org.postgresql.Driver"/>
        <el-option label="oracle.jdbc.OracleDriver" value="oracle.jdbc.OracleDriver"/>
        <el-option label="com.ingres.jdbc.IngresDriver" value="com.ingres.jdbc.IngresDriver"/>
        <el-option label="com.microsoft.sqlserver.jdbc.SQLServerDriver"
                   value="com.microsoft.sqlserver.jdbc.SQLServerDriver"/>
        <el-option label="com.microsoft.jdbc.sqlserver.SQLServerDriver"
                   value="com.microsoft.jdbc.sqlserver.SQLServerDriver"/>
        <el-option label="org.apache.derby.jdbc.ClientDriver" value="org.apache.derby.jdbc.ClientDriver"/>
        <el-option label="org.hsqldb.jdbc.JDBCDriver" value="org.hsqldb.jdbc.JDBCDriver"/>
        <el-option label="com.ibm.db2.jcc.DB2Driver" value="com.ibm.db2.jcc.DB2Driver"/>
        <el-option label="org.mariadb.jdbc.Driver" value="org.mariadb.jdbc.Driver"/>
        <el-option label="org.sqlite.JDBC" value="org.sqlite.JDBC"/>
      </el-select>
    </el-form-item>

    <el-row type="flex" :gutter="20">
      <el-col>
        <el-form-item :label="t('wm.configurations.jdbc_data_source.username')" prop="username">
          <el-input v-model="object.username.value"/>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item :label="t('wm.configurations.jdbc_data_source.password')" prop="password">
          <el-input v-model="object.password.value"/>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item :label="t('wm.configurations.jdbc_data_source.connection_properties')"
                  prop="connectionProperties">
      <el-input v-model="object.connectionProperties.value"/>
    </el-form-item>
  </component-field-set>
</template>

<script>
import Locale from "@/mixins/locale";
import JDBCDataSource from "@/jmeter/components/configurations/jdbc-data-source/index";
import ComponentFieldSet from "@/components/ComponentFieldSet";

export default {
  name: "DatabaseConnectionConfiguration",
  components: {ComponentFieldSet},
  mixins: [Locale],
  props: {
    object: JDBCDataSource
  }
}
</script>

<style scoped>
.select-100 {
  width: 100%;
}
</style>
