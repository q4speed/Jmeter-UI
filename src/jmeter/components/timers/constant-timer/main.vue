<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#Constant_Timer">
    <el-form-item :label="t('wm.timers.constant.delay')" prop="condition">
      <el-input v-model="object.delay.value" :min="0" :step="1000"/>
    </el-form-item>
  </component-container>
</template>

<script>
import ComponentContainer from "@/components/ComponentContainer";
import ConstantTimer from "@/jmeter/components/timers/constant-timer/index";
import Locale from "@/mixins/locale";

export default {
  name: "ConstantTimer",
  components: {ComponentContainer},
  mixins: [Locale],
  props: {
    object: ConstantTimer
  }
}
</script>

<style scoped>
</style>
