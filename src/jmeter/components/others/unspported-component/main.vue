<template>
  <component-container :object="object">
    <el-form ref="object" :model="object" size="mini">
      <div class="un-support">
        暂不支持，敬请期待
      </div>
    </el-form>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import UnsupportedComponent from "@/jmeter/components/others/unspported-component/index";

export default {
  name: "UnsupportedComponent",
  components: {ComponentContainer},
  props: {
    object: UnsupportedComponent
  }
}
</script>

<style scoped>
.un-support {
  width: 100%;
  height: 200px;
  margin: 50px 0;
  font-size: 20px;
  text-align: center;
}
</style>
