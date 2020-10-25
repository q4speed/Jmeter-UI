<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#JSON_Extractor">
    <component-field-set :title="t('wm.post_processors.json_processor.scope')">
      <el-radio-group v-model="scope" @change="changeScope">
        <el-radio label="all">{{ t('wm.post_processors.json_processor.all') }}</el-radio>
        <el-radio label="main">{{ t('wm.post_processors.json_processor.main') }}</el-radio>
        <el-radio label="children">{{ t('wm.post_processors.json_processor.children') }}</el-radio>
        <el-radio label="variable">{{ t('wm.post_processors.json_processor.variable') }}</el-radio>
        <el-input v-model="object.variable.value" size="mini" class="scope_variable" clearable @focus="clickVariable"/>
      </el-radio-group>
    </component-field-set>

    <el-form ref="object" :model="object" label-position="left" label-width="180px" size="mini">
      <el-form-item :label="t('wm.post_processors.json_processor.ref_name')" prop="referenceNames">
        <el-input v-model="object.referenceNames.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.post_processors.json_processor.expression')" prop="jsonPathExprs">
        <el-input v-model="object.jsonPathExprs.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.post_processors.json_processor.match_number')" prop="matchNumber">
        <el-input v-model="object.matchNumber.value"/>
      </el-form-item>

      <el-form-item :label="t('wm.post_processors.json_processor.concat')" prop="computeConcat">
        <el-checkbox v-model="object.computeConcat.value">
          <el-tooltip :content="t('wm.post_processors.json_processor.concat_desc')" placement="top-start">
            <el-icon name="question"/>
          </el-tooltip>
        </el-checkbox>
      </el-form-item>

      <el-form-item :label="t('wm.post_processors.json_processor.default')" prop="default">
        <el-input v-model="object.defaultValues.value"/>
      </el-form-item>
    </el-form>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import Locale from "@/mixins/locale";
import JSONPostProcessor from "./index";

export default {
  name: "JSONPostProcessor",
  components: {ComponentContainer, ComponentFieldSet},
  mixins: [Locale],
  props: {
    object: JSONPostProcessor
  },
  data() {
    return {
      scope: this.object.scope.value || "main",
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
    }
  }
}
</script>

<style scoped>
.scope_variable {
  width: auto;
}
</style>
