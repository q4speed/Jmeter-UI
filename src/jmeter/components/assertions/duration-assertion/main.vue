<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#Duration_Assertion">
    <component-field-set :title="t('wm.assertions.duration_assertion.scope')">
      <el-radio-group v-model="scope" @change="change">
        <el-radio label="all">{{ t('wm.assertions.duration_assertion.all') }}</el-radio>
        <el-radio label="main">{{ t('wm.assertions.duration_assertion.main') }}</el-radio>
        <el-radio label="children">{{ t('wm.assertions.duration_assertion.children') }}</el-radio>
      </el-radio-group>
    </component-field-set>
    <component-field-set :title="t('wm.assertions.duration_assertion.duration')">
      <el-input v-model="object.duration.value" size="mini"/>
    </component-field-set>
  </component-container>
</template>

<script>
import ComponentContainer from "@/components/ComponentContainer";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import Locale from "@/mixins/locale";
import DurationAssertion from "./index";

export default {
  name: "DurationAssertion",
  components: {ComponentFieldSet, ComponentContainer},
  mixins: [Locale],
  props: {
    object: DurationAssertion
  },
  data() {
    return {
      scope: this.object.scope.value || "main"
    }
  },
  methods: {
    change(label) {
      if (label === "main") {
        this.object.scope.value = undefined;
      } else {
        this.object.scope.value = label;
      }
    }
  }
}
</script>

<style scoped>

</style>
