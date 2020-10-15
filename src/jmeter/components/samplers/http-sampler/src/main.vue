<template>
  <component-container :object="object">
    <el-form ref="object" :model="object" size="mini">
    </el-form>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import HTTPSamplerProxy from "@/jmeter/components/samplers/http-sampler";

export default {
  name: "HTTPSamplerProxy",
  components: {ComponentContainer},
  props: {
    object: HTTPSamplerProxy
  }
}
</script>

<style scoped>

</style>
