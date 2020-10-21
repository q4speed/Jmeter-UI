<template>
  <variable-field-set :title="t('wm.others.test_plan.variables')" height="300" :items="items">
    <el-table-column :label="t('wm.others.test_plan.name')">
      <template v-slot:default="{row}">
        <el-input v-model="row.name" size="mini"/>
      </template>
    </el-table-column>
    <el-table-column :label="t('wm.others.test_plan.value')">
      <template v-slot:default="{row}">
        <el-input v-model="row.value" size="mini"/>
      </template>
    </el-table-column>
  </variable-field-set>
</template>

<script>
import VariableFieldSet from "@/components/variables/VariableFieldSet";
import Locale from "@/mixins/locale";

export default {
  name: "TestPlanVariables",
  components: {VariableFieldSet},
  mixins: [Locale],
  props: {
    items: Array
  }
}
</script>

<style scoped>

</style>
