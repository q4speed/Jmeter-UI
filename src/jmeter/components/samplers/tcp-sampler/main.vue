<template>
  <component-container :object="object">
    <el-form ref="object" :model="object" size="mini">
    </el-form>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import TCPSampler from "@/jmeter/components/samplers/tcp-sampler/index";

export default {
  name: "TCPSampler",
  components: {ComponentContainer},
  props: {
    object: TCPSampler
  }
}
</script>

<style scoped>

</style>
