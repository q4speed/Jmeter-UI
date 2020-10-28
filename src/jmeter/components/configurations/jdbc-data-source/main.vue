<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#JDBC_Connection_Configuration">
    <el-form ref="object" :model="object" label-position="left" label-width="180px" size="mini">
      <el-form-item prop="dataSource">
        <template v-slot:label>
          <span>{{ t('wm.configurations.jdbc_data_source.data_source') }}</span>
          <icon-tooltip :content="t('wm.configurations.jdbc_data_source.data_source_desc')"/>
        </template>
        <el-input v-model="object.dataSource.value"/>
      </el-form-item>

      <pool-configuration :object="object"/>

      <pool-validation :object="object"/>

      <database-connection-configuration :object="object"/>
    </el-form>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import Locale from "@/mixins/locale";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import IconTooltip from "@/components/IconTooltip";
import JDBCDataSource from "./index";
import PoolConfiguration from "@/jmeter/components/configurations/jdbc-data-source/PoolConfiguration";
import PoolValidation from "@/jmeter/components/configurations/jdbc-data-source/PoolValidation";
import DatabaseConnectionConfiguration
  from "@/jmeter/components/configurations/jdbc-data-source/DatabaseConnectionConfiguration";

export default {
  name: "JDBCDataSource",
  components: {
    DatabaseConnectionConfiguration,
    PoolValidation, PoolConfiguration, ComponentContainer, ComponentFieldSet, IconTooltip
  },
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
