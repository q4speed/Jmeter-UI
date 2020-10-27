<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#JDBC_Request">
    <el-form ref="object" :model="object" label-position="left" label-width="120px" size="mini">
      <el-form-item prop="dataSource">
        <template v-slot:label>
          <span>{{ t('wm.samplers.jdbc.data_source') }}</span>
          <icon-tooltip :content="t('wm.samplers.jdbc.data_source_desc')"/>
        </template>
        <el-input v-model="object.dataSource.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.samplers.jdbc.query_type')" prop="server">
        <el-select v-model="object.queryType.value"
                   :placeholder="t('wm.commons.please_select')"
                   filterable
                   allow-create
                   class="select-100">
          <el-option label="Select Statement" value="Select Statement"/>
          <el-option label="Update Statement" value="Update Statement"/>
          <el-option label="Callable Statement" value="Callable Statement"/>
          <el-option label="Prepared Select Statement" value="Prepared Select Statement"/>
          <el-option label="Prepared Update Statement" value="Prepared Update Statement"/>
          <el-option label="Commit" value="Commit"/>
          <el-option label="Rollback" value="Rollback"/>
          <el-option label="AutoCommit(false)" value="AutoCommit(false)"/>
          <el-option label="AutoCommit(true)" value="AutoCommit(true)"/>
        </el-select>
      </el-form-item>

      <component-field-set :title="t('wm.samplers.jdbc.query')">
        <el-input type="textarea" v-model="object.query.value" :autosize="{minRows: 10, maxRows: 20}"/>
      </component-field-set>

      <el-form-item :label="t('wm.samplers.jdbc.query_arguments')" prop="queryArguments">
        <el-input v-model="object.queryArguments.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.samplers.jdbc.query_arguments_types')" prop="queryArgumentsTypes">
        <el-input v-model="object.queryArgumentsTypes.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.samplers.jdbc.variable_names')" prop="variableNames">
        <el-input v-model="object.variableNames.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.samplers.jdbc.result_variable')" prop="resultVariable">
        <el-input v-model="object.resultVariable.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.samplers.jdbc.query_timeout')" prop="queryTimeout">
        <el-input v-model="object.queryTimeout.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.samplers.jdbc.result_set_max_rows')" prop="resultSetMaxRows">
        <el-input v-model="object.resultSetMaxRows.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.samplers.jdbc.query_type')" prop="resultSetHandler">
        <el-select v-model="object.resultSetHandler.value"
                   :placeholder="t('wm.commons.please_select')"
                   filterable
                   allow-create
                   class="select-100">
          <el-option label="Store as String" value="Store as String"/>
          <el-option label="Store as Object" value="Store as Object"/>
          <el-option label="Count Records" value="Count Records"/>
        </el-select>
      </el-form-item>
    </el-form>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import Locale from "@/mixins/locale";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import IconTooltip from "@/components/IconTooltip";
import JDBCSampler from "./index";

export default {
  name: "JDBCSampler",
  components: {ComponentContainer, ComponentFieldSet, IconTooltip},
  mixins: [Locale],
  props: {
    object: JDBCSampler
  }
}
</script>

<style scoped>
.select-100 {
  width: 100%;
}
</style>
