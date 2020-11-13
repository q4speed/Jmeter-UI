<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#XPath2_Extractor">
    <component-field-set :title="t('wm.post_processors.xpath2_extractor.scope')">
      <el-radio-group v-model="scope" @change="changeScope">
        <el-radio label="all">{{ t('wm.post_processors.xpath2_extractor.all') }}</el-radio>
        <el-radio label="main">{{ t('wm.post_processors.xpath2_extractor.main') }}</el-radio>
        <el-radio label="children">{{ t('wm.post_processors.xpath2_extractor.children') }}</el-radio>
        <el-radio label="variable">{{ t('wm.post_processors.xpath2_extractor.variable') }}</el-radio>
        <el-input v-model="object.variable.value" size="mini" class="scope_variable" clearable @focus="clickVariable"/>
      </el-radio-group>
    </component-field-set>

    <el-form-item :label="t('wm.post_processors.xpath2_extractor.ref_name')" label-width="180px" prop="refName">
      <el-input v-model="object.refName.value"/>
    </el-form-item>

    <el-form-item :label="t('wm.post_processors.xpath2_extractor.xpath_query')" label-width="180px" prop="xpathQuery">
      <el-input v-model="object.xpathQuery.value"/>
    </el-form-item>

    <el-form-item :label="t('wm.post_processors.xpath2_extractor.match_number')" label-width="180px" prop="matchNumber">
      <el-input v-model="object.matchNumber.value"/>
    </el-form-item>

    <el-form-item :label="t('wm.post_processors.xpath2_extractor.default')" label-width="180px" prop="default">
      <el-input v-model="object.default.value"/>
    </el-form-item>

    <el-form-item label-width="180px" prop="namespaces">
      <template v-slot:label>
        <span>{{ t('wm.post_processors.xpath2_extractor.namespaces') }}</span>
        <el-tooltip :content="t('wm.post_processors.xpath2_extractor.namespaces_desc')" placement="top-start">
          <el-icon name="question"/>
        </el-tooltip>
      </template>
      <el-input type="textarea" v-model="object.namespaces.value" :autosize="{minRows: 4, maxRows:6}" size="mini"/>
    </el-form-item>

    <el-form-item label-width="0" prop="fragment">
      <el-checkbox v-model="object.fragment.value">
        {{ t('wm.post_processors.xpath2_extractor.fragment') }}
      </el-checkbox>
    </el-form-item>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import Locale from "@/mixins/locale";
import XPath2Extractor from "./index";

export default {
  name: "XPath2Extractor",
  components: {ComponentContainer, ComponentFieldSet},
  mixins: [Locale],
  props: {
    object: XPath2Extractor
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
