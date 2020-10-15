<template>
  <el-form ref="advanced" :model="object" label-width="auto" size="mini">
    <component-field-set title="超时（毫秒）">
      <el-row type="flex" :gutter="10">
        <el-col class="connect-col">
          <el-form-item label="连接" prop="connectTimeout" label-width="60px">
            <el-input v-model="object.connectTimeout.value"/>
          </el-form-item>
        </el-col>
        <el-col class="response-col">
          <el-form-item label="响应" prop="responseTimeout" label-width="60px">
            <el-input v-model="object.responseTimeout.value"/>
          </el-form-item>
        </el-col>
      </el-row>
    </component-field-set>
  </el-form>
</template>

<script>
import ComponentFieldSet from "@/components/ComponentFieldSet";
import HTTPSamplerProxy from "@/jmeter/components/samplers/http-sampler";

export default {
  name: "HttpAdvancedConfig",
  components: {ComponentFieldSet},
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
