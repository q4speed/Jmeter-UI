<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#JSON_Extractor">
    <component-field-set :title="t('wm.post_processors.jsr223_post_processor.script_set')">
      <el-form ref="object" :model="object" label-position="left" label-width="120px" size="mini">
        <el-form-item prop="scriptLanguage">
          <template v-slot:label>
            <span>{{ t('wm.post_processors.jsr223_post_processor.script_language') }}</span>
            <icon-tooltip :content="t('wm.post_processors.jsr223_post_processor.language_desc')"/>
          </template>
          <el-select v-model="object.scriptLanguage.value"
                     :placeholder="t('wm.commons.please_select')"
                     filterable
                     allow-create
                     class="script-language">
            <el-option label="beanshell (BeanShell 2.0b6 / BeanShell Engine 1.0)" value="beanshell"/>
            <el-option label="bsh (BeanShell 2.0b6 / BeanShell Engine 1.0)" value="bsh"/>
            <el-option label="ecmascript (ECMAScript ECMA - 262 Edition 5.1 / Oracle Nashorn 1.8.0_171)"
                       value="ecmascript"/>
            <el-option label="groovy (Groovy 3.0.3 / Groovy Scripting Engine 2.0)" value="groovy"/>
            <el-option label="java (BeanShell 2.0b6 / BeanShell Engine 1.0)" value="java"/>
            <el-option label="javascript (ECMAScript ECMA - 262 Edition 5.1 / Oracle Nashorn 1.8.0_171)"
                       value="javascript"/>
            <el-option label="jexl (JEXL 2.0 / JEXL Engine 2.0)" value="jexl"/>
            <el-option label="jexl2 (JEXL 2.0 / JEXL Engine 2.0)" value="jexl2"/>
            <el-option label="jexl3 (JEXL 3.0 / JEXL Engine 3.0)" value="jexl3"/>
            <el-option label="nashorn (ECMAScript ECMA - 262 Edition 5.1 / Oracle Nashorn 1.8.0_171)" value="nashorn"/>
          </el-select>
        </el-form-item>

        <el-form-item prop="parameters">
          <template v-slot:label>
            <span>{{ t('wm.post_processors.jsr223_post_processor.parameters') }}</span>
            <icon-tooltip :content="t('wm.post_processors.jsr223_post_processor.parameters_desc')"/>
          </template>
          <el-input v-model="object.parameters.value"/>
        </el-form-item>

        <!--        <el-form-item :label="t('wm.post_processors.jsr223_post_processor.filename')" prop="filename">-->
        <!--          <template v-slot:label>-->
        <!--            <span>{{ t('wm.post_processors.jsr223_post_processor.filename') }}</span>-->
        <!--            <icon-tooltip :content="t('wm.post_processors.jsr223_post_processor.filename_desc')"/>-->
        <!--          </template>-->
        <!--          <el-input v-model="object.filename.value"/>-->
        <!--        </el-form-item>-->

        <el-form-item prop="cacheKey">
          <template v-slot:label>
            <span>{{ t('wm.post_processors.jsr223_post_processor.cache') }}</span>
            <icon-tooltip :content="t('wm.post_processors.jsr223_post_processor.cache_desc')"/>
          </template>
          <el-checkbox v-model="object.cacheKey.value"/>
        </el-form-item>
      </el-form>
    </component-field-set>

    <component-field-set :title="t('wm.post_processors.jsr223_post_processor.script')">
      <el-input type="textarea" v-model="object.script.value" :autosize="{minRows: 10, maxRows: 20}"/>
    </component-field-set>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import Locale from "@/mixins/locale";
import JSR223PostProcessor from "./index";
import IconTooltip from "@/components/IconTooltip";

export default {
  name: "JSR223PostProcessor",
  components: {IconTooltip, ComponentContainer, ComponentFieldSet},
  mixins: [Locale],
  props: {
    object: JSR223PostProcessor
  }
}
</script>

<style scoped>
.script-language {
  width: 100%;
}
</style>
