<template>
  <component-container :object="object">
    <el-form ref="object" :model="object" size="mini">
    </el-form>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import ResponseAssertion from "@/jmeter/components/assertions/response-assertion/index";

export default {
  name: "ResponseAssertion",
  components: {ComponentContainer},
  props: {
    object: ResponseAssertion
  }
}
</script>

<style scoped>

</style>
