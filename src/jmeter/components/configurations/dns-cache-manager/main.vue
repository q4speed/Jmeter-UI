<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#DNS_Cache_Manager">
    <component-field-set :title="t('wm.configurations.dns_cache_manager.options')">
      <el-form-item label-width="0" prop="clearEachIteration">
        <el-checkbox v-model="object.clearEachIteration.value">
          {{ t('wm.configurations.dns_cache_manager.clear') }}
        </el-checkbox>
      </el-form-item>
      <el-form-item label-width="0" prop="controlledByThreadGroup">
        <el-radio-group v-model="object.isCustomResolver.value">
          <el-radio :label="false">{{ t('wm.configurations.dns_cache_manager.system') }}</el-radio>
          <el-radio :label="true">{{ t('wm.configurations.dns_cache_manager.custom') }}</el-radio>
        </el-radio-group>
      </el-form-item>
    </component-field-set>
    <variable-field-set :title="t('wm.configurations.dns_cache_manager.servers')" height="200" :items="object.servers"
                        :disabled="!object.isCustomResolver.value">
      <el-table-column :label="t('wm.configurations.dns_cache_manager.server')">
        <template v-slot:default="{row}">
          <el-input v-model="row.server" size="mini"/>
        </template>
      </el-table-column>
    </variable-field-set>
    <variable-field-set :title="t('wm.configurations.dns_cache_manager.hosts')" height="200" :items="object.hosts"
                        :disabled="!object.isCustomResolver.value">
      <el-table-column :label="t('wm.configurations.dns_cache_manager.host')">
        <template v-slot:default="{row}">
          <el-input v-model="row.name" size="mini"/>
        </template>
      </el-table-column>
      <el-table-column :label="t('wm.configurations.dns_cache_manager.address')">
        <template v-slot:default="{row}">
          <el-input v-model="row.address" size="mini"/>
        </template>
      </el-table-column>
    </variable-field-set>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import VariableFieldSet from "@/components/variables/VariableFieldSet";
import DNSCacheManager from "./index";
import Locale from "@/mixins/locale";
import ComponentFieldSet from "@/components/ComponentFieldSet";

export default {
  name: "DNSCacheManager",
  components: {ComponentFieldSet, VariableFieldSet, ComponentContainer},
  mixins: [Locale],
  props: {
    object: DNSCacheManager
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
