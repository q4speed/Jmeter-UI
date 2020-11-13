<template>
  <component-field-set :title="t('wm.configurations.jdbc_data_source.validation_pool')">
    <el-form-item :label="t('wm.configurations.jdbc_data_source.keep_alive')" label-width="100px" prop="keepAlive">
      <el-checkbox v-model="object.keepAlive.value"/>
    </el-form-item>

    <el-row type="flex" :gutter="20">
      <el-col>
        <el-form-item :label="t('wm.configurations.jdbc_data_source.connection_age')" label-width="100px"
                      prop="connectionAge">
          <el-input v-model="object.connectionAge.value"/>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item :label="t('wm.configurations.jdbc_data_source.check_query')" label-width="100px"
                      prop="checkQuery">
          <el-select v-model="object.checkQuery.value"
                     :placeholder="t('wm.commons.please_select')"
                     filterable
                     allow-create
                     class="select-100">
            <el-option label="select 1" value="select 1"/>
            <el-option label="select 1 from INFORMATION_SCHEMA.SYSTEM_USERS"
                       value="select 1 from INFORMATION_SCHEMA.SYSTEM_USERS"/>
            <el-option label="select 1 from dual" value="select 1 from dual"/>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
  </component-field-set>
</template>

<script>
import Locale from "@/mixins/locale";
import JDBCDataSource from "@/jmeter/components/configurations/jdbc-data-source/index";
import ComponentFieldSet from "@/components/ComponentFieldSet";

export default {
  name: "PoolValidation",
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
