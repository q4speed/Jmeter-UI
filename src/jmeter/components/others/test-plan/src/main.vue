<template>
  <component-container :title="object.name">
    <el-form ref="object" :model="object" label-width="auto" size="mini">
      <el-form-item label="名称" prop="label">
        <el-input v-model="object.label"></el-input>
      </el-form-item>
      <el-form-item label="注释" prop="comments">
        <el-input v-model="object.comments.value"></el-input>
      </el-form-item>

      <test-plan-variables :items="object.userDefinedVariables"/>

      <el-form-item label-width="0" prop="serializeThreadGroups">
        <el-checkbox v-model="object.serializeThreadGroups.value">独立运行每个线程组（例如在一个组结束后运行下一个 ）</el-checkbox>
      </el-form-item>
      <el-form-item label-width="0" prop="tearDownOnShutdown">
        <el-checkbox v-model="object.tearDownOnShutdown.value">主线程结束后运行tearDown线程组</el-checkbox>
      </el-form-item>
      <el-form-item label-width="0" prop="functionalMode">
        <el-checkbox v-model="object.functionalMode.value">函数测试模式</el-checkbox>
      </el-form-item>
      <!-- TODO classpath-->
    </el-form>
  </component-container>
</template>

<script>
import ComponentContainer from "@/components/ComponentContainer";
import TestPlan from "@/jmeter/components/others/test-plan";
import TestPlanVariables from "@/jmeter/components/others/test-plan/src/TestPlanVariables";

export default {
  name: "TestPlan",
  components: {TestPlanVariables, ComponentContainer},
  props: {
    object: TestPlan
  },
  methods: {}
}
</script>

<style scoped>

</style>
