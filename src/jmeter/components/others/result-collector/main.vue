<template>
  <component-container :object="object">
    <el-form ref="object" :model="object" size="mini">
    </el-form>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import ResultCollector from "@/jmeter/components/others/result-collector/index";

export default {
  name: "ResultCollector",
  components: {ComponentContainer},
  props: {
    object: ResultCollector
  }
}
</script>

<style scoped>
</style>
