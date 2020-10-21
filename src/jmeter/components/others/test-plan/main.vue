<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#Test_Plan">
    <el-form ref="object" :model="object" label-width="auto" size="mini">
      <test-plan-variables :items="object.userDefinedVariables"/>

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
    </el-form>
  </component-container>
</template>

<script>
import ComponentContainer from "@/components/ComponentContainer";
import TestPlan from "@/jmeter/components/others/test-plan/index";
import TestPlanVariables from "@/jmeter/components/others/test-plan/TestPlanVariables";
import Locale from "@/mixins/locale";

export default {
  name: "TestPlan",
  components: {TestPlanVariables, ComponentContainer},
  mixins: [Locale],
  props: {
    object: TestPlan
  },
  methods: {}
}
</script>

<style scoped>

</style>
