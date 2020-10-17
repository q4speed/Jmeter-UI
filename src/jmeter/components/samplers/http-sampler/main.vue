<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#HTTP_Request">
    <el-tabs v-model="activeName">
      <el-tab-pane label="基础" name="basic">
        <http-basic-config :object="object"/>
      </el-tab-pane>
      <el-tab-pane label="高级" name="advanced">
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

export default {
  name: "HTTPSamplerProxy",
  components: {HttpAdvancedConfig, HttpBasicConfig, ComponentFieldSet, ComponentContainer},
  props: {
    object: HTTPSamplerProxy
  },
  data() {
    return {
      activeName: "basic",
    }
  },
  methods: {
    handleClick(tab) {
      console.log(tab.name)
    }
  }
}
</script>

<style scoped>

</style>
