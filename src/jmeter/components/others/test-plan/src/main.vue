<template>
  <component-container :title="object.name">
    <el-form ref="object" :model="object" label-width="auto" size="mini">
      <el-form-item label="名称">
        <el-input v-model="object.label"></el-input>
      </el-form-item>
      <el-form-item label="注释">
        <el-input v-model="object.comments.value"></el-input>
      </el-form-item>

      <component-field-set title="用户自定义变量">

      </component-field-set>
    </el-form>
  </component-container>
</template>

<script>
import ComponentContainer from "@/components/ComponentContainer";
import TestPlan from "@/jmeter/components/others/test-plan";
import ComponentFieldSet from "@/components/ComponentFieldSet";

export default {
  name: "TestPlan",
  components: {ComponentFieldSet, ComponentContainer},
  props: {
    object: TestPlan
  }
}
</script>

<style scoped>

</style>
