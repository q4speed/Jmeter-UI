<template>
  <component-container :object="object">
    <el-form ref="object" :model="object" size="mini">
    </el-form>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import RegexExtractor from "@/jmeter/components/post-processors/regular-extractor/index";

export default {
  name: "RegexExtractor",
  components: {ComponentContainer},
  props: {
    object: RegexExtractor
  }
}
</script>

<style scoped>

</style>
