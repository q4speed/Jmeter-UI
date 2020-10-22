<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#HTTP_Header_Manager">
    <component-field-set :title="t('wm.configurations.cookie_manager.options')">
      <el-form ref="object" :model="object" label-width="auto" label-position="left" size="mini">
        <el-form-item label-width="0" prop="clearEachIteration">
          <el-checkbox v-model="object.clearEachIteration.value" :disabled="object.controlledByThreadGroup.value">
            {{ t('wm.configurations.cookie_manager.clear') }}
          </el-checkbox>
        </el-form-item>
        <el-form-item label-width="0" prop="controlledByThreadGroup">
          <el-checkbox v-model="object.controlledByThreadGroup.value">
            {{ t('wm.configurations.cookie_manager.control') }}
          </el-checkbox>
        </el-form-item>
        <el-form-item :label="t('wm.configurations.cookie_manager.policy')" prop="policy">
          <el-select v-model="object.policy.value" :placeholder="t('wm.commons.please_select')">
            <el-option label="standard" value=""/>
            <el-option label="standard-strict" value="standard-strict"/>
            <el-option label="ignoreCookies" value="ignoreCookies"/>
            <el-option label="netscape" value="netscape"/>
            <el-option label="default" value="default"/>
            <el-option label="rfc2109" value="rfc2109"/>
            <el-option label="rfc2965" value="rfc2965"/>
            <el-option label="best-match" value="best-match"/>
            <el-option label="compatibility" value="compatibility"/>
          </el-select>
        </el-form-item>
      </el-form>
    </component-field-set>
    <variable-field-set :title="t('wm.configurations.cookie_manager.cookies')" height="300" :items="object.cookies">
      <el-table-column :label="t('wm.configurations.cookie_manager.name')">
        <template v-slot:default="{row}">
          <el-input v-model="row.name" size="mini"/>
        </template>
      </el-table-column>
      <el-table-column :label="t('wm.configurations.cookie_manager.value')">
        <template v-slot:default="{row}">
          <el-input v-model="row.value" size="mini"/>
        </template>
      </el-table-column>
      <el-table-column :label="t('wm.configurations.cookie_manager.domain')">
        <template v-slot:default="{row}">
          <el-input v-model="row.domain" size="mini"/>
        </template>
      </el-table-column>
      <el-table-column :label="t('wm.configurations.cookie_manager.path')">
        <template v-slot:default="{row}">
          <el-input v-model="row.path" size="mini"/>
        </template>
      </el-table-column>
      <el-table-column :label="t('wm.configurations.cookie_manager.secure')" width="80">
        <template v-slot:default="{row}">
          <el-checkbox v-model="row.secure"/>
        </template>
      </el-table-column>
    </variable-field-set>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import VariableFieldSet from "@/components/variables/VariableFieldSet";
import CookieManager from "./index";
import Locale from "@/mixins/locale";
import ComponentFieldSet from "@/components/ComponentFieldSet";

export default {
  name: "CookieManager",
  components: {ComponentFieldSet, VariableFieldSet, ComponentContainer},
  mixins: [Locale],
  props: {
    object: CookieManager
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
