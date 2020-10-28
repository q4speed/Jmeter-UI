<template>
  <component-field-set :title="t('wm.configurations.jdbc_data_source.pool_config')">
    <el-row type="flex" :gutter="20">
      <el-col>
        <el-form-item :label="t('wm.configurations.jdbc_data_source.pool_max')" prop="poolMax">
          <el-input v-model="object.poolMax.value"/>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item :label="t('wm.configurations.jdbc_data_source.timeout')" prop="timeout">
          <el-input v-model="object.timeout.value"/>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row type="flex" :gutter="20">
      <el-col>
        <el-form-item :label="t('wm.configurations.jdbc_data_source.trim_interval')" prop="trimInterval">
          <el-input v-model="object.trimInterval.value"/>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item :label="t('wm.configurations.jdbc_data_source.transaction_isolation')"
                      prop="transactionIsolation">
          <el-select v-model="object.transactionIsolation.value"
                     :placeholder="t('wm.commons.please_select')"
                     filterable
                     allow-create
                     class="select-100">
            <el-option label="DEFAULT" value="DEFAULT"/>
            <el-option label="TRANSACTION_NONE" value="TRANSACTION_NONE"/>
            <el-option label="TRANSACTION_READ_UNCOMMITTED" value="TRANSACTION_READ_UNCOMMITTED"/>
            <el-option label="TRANSACTION_READ_COMMITTED" value="TRANSACTION_READ_COMMITTED"/>
            <el-option label="TRANSACTION_SERIALIZABLE" value="TRANSACTION_SERIALIZABLE"/>
            <el-option label="TRANSACTION_REPEATABLE_READ" value="TRANSACTION_REPEATABLE_READ"/>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row type="flex" :gutter="20">
      <el-col>
        <el-form-item :label="t('wm.configurations.jdbc_data_source.auto_commit')" prop="autoCommit">
          <el-checkbox v-model="object.autoCommit.value"/>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item :label="t('wm.configurations.jdbc_data_source.pre_init')" prop="preInit">
          <el-checkbox v-model="object.preInit.value"/>
        </el-form-item>
      </el-col>
    </el-row>

    <component-field-set :title="t('wm.configurations.jdbc_data_source.init_query')">
      <el-input type="textarea" v-model="object.initQuery.value" :autosize="{minRows: 8, maxRows: 16}"/>
    </component-field-set>
  </component-field-set>
</template>

<script>
import Locale from "@/mixins/locale";
import JDBCDataSource from "@/jmeter/components/configurations/jdbc-data-source/index";
import ComponentFieldSet from "@/components/ComponentFieldSet";

export default {
  name: "PoolConfiguration",
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
