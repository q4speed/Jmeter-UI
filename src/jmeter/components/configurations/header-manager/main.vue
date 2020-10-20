<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#HTTP_Header_Manager">
    <variable-field-set :title="t('wm.Configuration.HeaderManager.title')" height="300" :items="object.headers">
      <el-table-column :label="t('wm.Configuration.HeaderManager.name')">
        <template v-slot:default="{row}">
          <el-input v-model="row.name" size="mini"/>
        </template>
      </el-table-column>

      <el-table-column :label="t('wm.Configuration.HeaderManager.value')">
        <template v-slot:default="{row}">
          <el-input v-model="row.value" size="mini"/>
        </template>
      </el-table-column>
    </variable-field-set>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import VariableFieldSet from "@/components/variables/VariableFieldSet";
import HeaderManager from "@/jmeter/components/configurations/header-manager/index";
import Locale from "@/mixins/locale";

export default {
  name: "HeaderManager",
  components: {VariableFieldSet, ComponentContainer},
  mixins: [Locale],
  props: {
    object: HeaderManager
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
