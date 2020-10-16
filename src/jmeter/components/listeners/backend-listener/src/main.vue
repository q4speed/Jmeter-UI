<template>
  <component-container :object="object">
    <el-form ref="object" :model="object" size="mini">
    </el-form>
  </component-container>
</template>

<script>
import ComponentContainer from "@/components/ComponentContainer";
import BackendListener from "@/jmeter/components/listeners/backend-listener/index";

export default {
  name: "BackendListener",
  components: {ComponentContainer},
  props: {
    object: BackendListener
  }
}
</script>

<style scoped>

</style>
