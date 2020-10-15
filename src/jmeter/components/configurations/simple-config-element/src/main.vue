<template>
  <component-container :object="object">
    <el-form ref="object" :model="object" size="mini">
    </el-form>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import SimpleConfigElement from "@/jmeter/components/configurations/simple-config-element";

export default {
  name: "SimpleConfigElement",
  components: {ComponentContainer},
  props: {
    object: SimpleConfigElement
  }
}
</script>

<style scoped>

</style>
