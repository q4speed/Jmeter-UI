<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#HTTP_Request">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="t('wm.samplers.http.basic')" name="basic">
        <http-basic-config :object="object"/>
      </el-tab-pane>
      <el-tab-pane :label="t('wm.samplers.http.advanced')" name="advanced">
        <http-advanced-config :object="object"/>
      </el-tab-pane>
    </el-tabs>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import HTTPSamplerProxy from "@/jmeter/components/samplers/http-sampler/index";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import HttpBasicConfig from "@/jmeter/components/samplers/http-sampler/HttpBasicConfig";
import HttpAdvancedConfig from "@/jmeter/components/samplers/http-sampler/HttpAdvancedConfig";
import Locale from "@/mixins/locale";

export default {
  name: "HTTPSamplerProxy",
  components: {HttpAdvancedConfig, HttpBasicConfig, ComponentFieldSet, ComponentContainer},
  mixins: [Locale],
  props: {
    object: HTTPSamplerProxy
  },
  data() {
    return {
      activeName: "basic",
    }
  }
}
</script>

<style scoped>

</style>
