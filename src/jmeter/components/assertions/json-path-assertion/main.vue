<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#JSON_Assertion">
    <el-form ref="object" :model="object" label-width="auto" size="mini">
      <el-form-item :label="t('wm.assertions.json_assertion.json_path')" prop="jsonPath">
        <el-input v-model="object.jsonPath.value"/>
      </el-form-item>

      <el-form-item label-width="0" prop="jsonValidation">
        <el-checkbox v-model="object.jsonValidation.value">
          {{ t('wm.assertions.json_assertion.json_validation') }}
        </el-checkbox>
      </el-form-item>

      <el-form-item label-width="0" prop="isRegex">
        <el-checkbox v-model="object.isRegex.value">
          {{ t('wm.assertions.json_assertion.is_regex') }}
        </el-checkbox>
      </el-form-item>

      <el-form-item label-width="1" :label="t('wm.assertions.json_assertion.expected_value')" prop="expectedValue">
        <el-input type="textarea" v-model="object.expectedValue.value" :autosize="{minRows: 3, maxRows: 6}"/>
      </el-form-item>

      <el-form-item label-width="0" prop="expectNull">
        <el-checkbox v-model="object.expectNull.value">
          {{ t('wm.assertions.json_assertion.expect_null') }}
        </el-checkbox>
      </el-form-item>

      <el-form-item label-width="0" prop="invert">
        <el-checkbox v-model="object.invert.value">
          {{ t('wm.assertions.json_assertion.invert') }}
        </el-checkbox>
      </el-form-item>
    </el-form>
  </component-container>
</template>
<script>
import ComponentContainer from "@/components/ComponentContainer";
import Locale from "@/mixins/locale";
import JSONPathAssertion from "./index";

export default {
  name: "JSONPathAssertion",
  components: {ComponentContainer},
  mixins: [Locale],
  props: {
    object: JSONPathAssertion
  }
}
</script>

<style scoped>

</style>
