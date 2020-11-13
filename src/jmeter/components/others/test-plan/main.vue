<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#Test_Plan">
    <variable-field-set :title="t('wm.others.test_plan.variables')" height="300" :items="object.userDefinedVariables">
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

    <el-form-item label-width="0" prop="serializeThreadGroups">
      <el-checkbox v-model="object.serializeThreadGroups.value">{{ t('wm.others.test_plan.serialize') }}</el-checkbox>
    </el-form-item>
    <el-form-item label-width="0" prop="tearDownOnShutdown">
      <el-checkbox v-model="object.tearDownOnShutdown.value">{{ t('wm.others.test_plan.tear_down') }}</el-checkbox>
    </el-form-item>
    <el-form-item label-width="0" prop="functionalMode">
      <el-checkbox v-model="object.functionalMode.value">{{ t('wm.others.test_plan.functional') }}</el-checkbox>
    </el-form-item>
    <!-- TODO classpath-->
  </component-container>
</template>

<script>
import ComponentContainer from "@/components/ComponentContainer";
import TestPlan from "@/jmeter/components/others/test-plan/index";
import Locale from "@/mixins/locale";
import VariableFieldSet from "@/components/variables/VariableFieldSet";

export default {
  name: "TestPlan",
  components: {VariableFieldSet, ComponentContainer},
  mixins: [Locale],
  props: {
    object: TestPlan
  },
  methods: {}
}
</script>

<style scoped>

</style>
