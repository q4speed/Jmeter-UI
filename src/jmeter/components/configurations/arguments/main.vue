<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#User_Defined_Variables">
    <variable-field-set :title="t('wm.configurations.arguments.title')" height="300" :items="object.arguments">
      <el-table-column :label="t('wm.configurations.arguments.name')">
        <template v-slot:default="{row}">
          <el-input v-model="row.name" size="mini"/>
        </template>
      </el-table-column>

      <el-table-column :label="t('wm.configurations.arguments.value')">
        <template v-slot:default="{row}">
          <el-input v-model="row.value" size="mini"/>
        </template>
      </el-table-column>

      <el-table-column :label="t('wm.configurations.arguments.desc')">
        <template v-slot:default="{row}">
          <el-input v-model="row.desc" size="mini"/>
        </template>
      </el-table-column>
    </variable-field-set>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import VariableFieldSet from "@/components/variables/VariableFieldSet";
import Arguments from "./index";
import Locale from "@/mixins/locale";

export default {
  name: "Arguments",
  components: {VariableFieldSet, ComponentContainer},
  mixins: [Locale],
  props: {
    object: Arguments
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
