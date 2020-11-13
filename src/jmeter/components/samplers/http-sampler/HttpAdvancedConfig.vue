<template>
  <component-field-set :title="t('wm.samplers.http.timeout')">
    <el-row type="flex" :gutter="10">
      <el-col class="connect-col">
        <el-form-item :label="t('wm.samplers.http.connect')" prop="connectTimeout" label-width="60px">
          <el-input v-model="object.connectTimeout.value"/>
        </el-form-item>
      </el-col>
      <el-col class="response-col">
        <el-form-item :label="t('wm.samplers.http.response')" prop="responseTimeout" label-width="60px">
          <el-input v-model="object.responseTimeout.value"/>
        </el-form-item>
      </el-col>
    </el-row>
  </component-field-set>
</template>

<script>
import ComponentFieldSet from "@/components/ComponentFieldSet";
import HTTPSamplerProxy from "@/jmeter/components/samplers/http-sampler/index";
import Locale from "@/mixins/locale";

export default {
  name: "HttpAdvancedConfig",
  components: {ComponentFieldSet},
  mixins: [Locale],
  props: {
    object: HTTPSamplerProxy
  },
}
</script>

<style scoped>
.connect-col, .response-col {
  width: 300px;
  min-width: 250px;
}
</style>
