<template>
  <component-container :object="object">
    <component-field-set :title="t('wm.post_processors.regex_extractor.scope')">
      <el-radio-group v-model="scope" @change="changeScope">
        <el-radio label="all">{{ t('wm.post_processors.regex_extractor.all') }}</el-radio>
        <el-radio label="main">{{ t('wm.post_processors.regex_extractor.main') }}</el-radio>
        <el-radio label="children">{{ t('wm.post_processors.regex_extractor.children') }}</el-radio>
        <el-radio label="variable">{{ t('wm.post_processors.regex_extractor.variable') }}</el-radio>
        <el-input v-model="object.variable.value" size="mini" class="scope_variable" clearable @focus="clickVariable"/>
      </el-radio-group>
    </component-field-set>
    <component-field-set :title="t('wm.post_processors.regex_extractor.test_field')">
      <el-radio-group v-model="object.useHeaders.value" class="testField">
        <el-radio v-for="f in fields" :key="f.value" :label="f.value">{{ t(f.name) }}</el-radio>
      </el-radio-group>
    </component-field-set>

    <el-form ref="object" :model="object" label-position="left" label-width="180px" size="mini">
      <el-form-item :label="t('wm.post_processors.regex_extractor.ref_name')" prop="refName">
        <el-input v-model="object.refName.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.post_processors.regex_extractor.regex')" prop="regex">
        <el-input v-model="object.regex.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.post_processors.regex_extractor.template')" prop="template">
        <el-input v-model="object.template.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.post_processors.regex_extractor.match_number')" prop="matchNumber">
        <el-input v-model="object.matchNumber.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.post_processors.regex_extractor.default')" prop="default">
        <el-input type="number" v-model="object.default.value" :disabled="object.defaultEmpty.value">
          <template slot="prepend">
            <el-checkbox v-model="object.defaultEmpty.value" @change="changeEmpty">
              {{ t('wm.post_processors.regex_extractor.default_empty') }}
            </el-checkbox>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import RegexExtractor from "./index";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import Locale from "@/mixins/locale";

export default {
  name: "RegexExtractor",
  components: {ComponentContainer, ComponentFieldSet},
  mixins: [Locale],
  props: {
    object: RegexExtractor
  },
  data() {
    return {
      scope: this.object.scope.value || "main",
      fields: [
        {name: 'wm.post_processors.regex_extractor.response_data', value: 'false'},
        {name: 'wm.post_processors.regex_extractor.unescaped', value: 'unescaped'},
        {name: 'wm.post_processors.regex_extractor.as_document', value: 'as_document'},
        {name: 'wm.post_processors.regex_extractor.response_headers', value: 'true'},
        {name: 'wm.post_processors.regex_extractor.request_headers', value: 'request_headers'},
        {name: 'wm.post_processors.regex_extractor.url', value: 'URL'},
        {name: 'wm.post_processors.regex_extractor.response_code', value: 'code'},
        {name: 'wm.post_processors.regex_extractor.response_message', value: 'message'}
      ]
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
      this.scope = "variable";
      this.object.scope.value = "variable";
    },
    changeEmpty(value) {
      if (value === true) {
        if (this.object.default.value !== undefined) {
          this.object.default.value = undefined;
        }
      }
    },
  }
}
</script>

<style scoped>
.scope_variable {
  width: auto;
}
</style>
