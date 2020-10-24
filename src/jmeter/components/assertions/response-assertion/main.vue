<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#Response_Assertion">
    <component-field-set>
      <el-checkbox v-model="object.assumeSuccess.value">
        {{ t('wm.assertions.response_assertion.ignore_status') }}
      </el-checkbox>
      <el-tooltip :content="t('wm.assertions.response_assertion.ignore_status_desc')" placement="top-start">
        <el-icon name="question"></el-icon>
      </el-tooltip>
    </component-field-set>
    <component-field-set :title="t('wm.assertions.response_assertion.scope')">
      <el-radio-group v-model="scope" @change="changeScope">
        <el-radio label="all">{{ t('wm.assertions.response_assertion.all') }}</el-radio>
        <el-radio label="main">{{ t('wm.assertions.response_assertion.main') }}</el-radio>
        <el-radio label="children">{{ t('wm.assertions.response_assertion.children') }}</el-radio>
        <el-radio label="variable">{{ t('wm.assertions.response_assertion.variable') }}</el-radio>
        <el-input v-model="object.variable.value" size="mini" class="scope_variable" clearable @focus="clickVariable"/>
      </el-radio-group>
    </component-field-set>
    <component-field-set :title="t('wm.assertions.response_assertion.test_field')">
      <el-radio-group v-model="object.testField.value" class="testField">
        <el-radio v-for="f in fields" :key="f.value" :label="f.value">{{ t(f.name) }}</el-radio>
      </el-radio-group>
    </component-field-set>
    <component-field-set :title="t('wm.assertions.response_assertion.test_type')">
      <el-radio-group v-model="testType.value" class="testType" @change="changeTestType">
        <el-radio :label="contains">{{ t('wm.assertions.response_assertion.contains') }}</el-radio>
        <el-radio :label="match">{{ t('wm.assertions.response_assertion.match') }}</el-radio>
        <el-radio :label="equals">{{ t('wm.assertions.response_assertion.equals') }}</el-radio>
        <el-radio :label="substring">{{ t('wm.assertions.response_assertion.substring') }}</el-radio>
        <el-checkbox v-model="testType.not" @change="changeTestType">
          {{ t('wm.assertions.response_assertion.not') }}
        </el-checkbox>
        <el-checkbox v-model="testType.or" @change="changeTestType">
          {{ t('wm.assertions.response_assertion.or') }}
        </el-checkbox>
      </el-radio-group>
    </component-field-set>
    <test-string-field-set :items="object.testStrings"/>
    <component-field-set :title="t('wm.assertions.response_assertion.message')">
      <el-input type="textarea" v-model="object.customMessage.value" :autosize="{minRows: 2, maxRows:4}" size="mini"/>
    </component-field-set>
  </component-container>
</template>
<script>
import ComponentContainer from "@/components/ComponentContainer";
import ResponseAssertion from "@/jmeter/components/assertions/response-assertion/index";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import Locale from "@/mixins/locale";
import VariableFieldSet from "@/components/variables/VariableFieldSet";
import TestStringFieldSet from "@/jmeter/components/assertions/response-assertion/TestStringFieldSet";

export default {
  name: "ResponseAssertion",
  components: {TestStringFieldSet, VariableFieldSet, ComponentFieldSet, ComponentContainer},
  mixins: [Locale],
  props: {
    object: ResponseAssertion
  },
  data() {
    const MATCH = 1
    const CONTAINS = 1 << 1
    const EQUALS = 1 << 3
    const SUBSTRING = 1 << 4
    const NOT = 1 << 2
    const OR = 1 << 5
    return {
      scope: this.object.scope.value || "main",
      fields: [
        {name: 'wm.assertions.response_assertion.response_data', value: 'Assertion.response_data'},
        {name: 'wm.assertions.response_assertion.response_code', value: 'Assertion.response_code'},
        {name: 'wm.assertions.response_assertion.response_message', value: 'Assertion.response_message'},
        {name: 'wm.assertions.response_assertion.response_headers', value: 'Assertion.response_headers'},
        {name: 'wm.assertions.response_assertion.request_data', value: 'Assertion.request_data'},
        {name: 'wm.assertions.response_assertion.request_headers', value: 'Assertion.request_headers'},
        {name: 'wm.assertions.response_assertion.document', value: 'Assertion.response_data_as_document'},
        {name: 'wm.assertions.response_assertion.sample_label', value: 'Assertion.sample_label'}
      ],
      match: MATCH,
      contains: CONTAINS,
      equals: EQUALS,
      substring: SUBSTRING,
      not: NOT,
      or: OR,
      testType: (() => {
        let testType = this.object.testType.value;
        return {
          value: testType & ~NOT & ~OR,
          not: (testType & NOT) !== 0,
          or: (testType & OR) !== 0,
        }
      })()
    }
  },
  methods: {
    changeScope(label) {
      if (label === "main") {
        this.object.scope.value = undefined;
      } else {
        this.object.scope.value = label;
      }
    },
    clickVariable() {
      this.object.scope.value = "variable";
    },
    changeTestType() {
      let testType = this.testType.value;
      if (this.testType.not) {
        testType = testType | this.not;
      }
      if (this.testType.or) {
        testType = testType | this.or;
      }
      this.object.testType.value = testType;
    }
  }
}
</script>

<style scoped>
.scope_variable {
  width: auto;
}

</style>
