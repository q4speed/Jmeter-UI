<template>
  <el-form ref="basic" :model="object" label-width="auto" size="mini">
    <component-field-set title="Web服务器">
      <el-row type="flex" :gutter="10">
        <el-col class="protocol-col">
          <el-form-item label="协议" prop="protocol" label-width="60px">
            <el-select v-model="object.protocol.value" placeholder="请选择">
              <el-option value="https" label="https"/>
              <el-option value="http" label="http"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="服务器名称或IP" prop="domain">
            <el-input v-model="object.domain.value"/>
          </el-form-item>
        </el-col>
        <el-col class="port-col">
          <el-form-item label="端口号" prop="port" label-width="60px">
            <el-input v-model="object.port.value"/>
          </el-form-item>
        </el-col>
      </el-row>
    </component-field-set>
    <component-field-set title="HTTP请求">
      <el-row type="flex" :gutter="10">
        <el-col class="method-col">
          <el-form-item label="方法" prop="method" label-width="60px">
            <el-select v-model="object.method.value" placeholder="请选择">
              <el-option label="GET" value="GET"/>
              <el-option label="POST" value="POST"/>
              <el-option label="PUT" value="PUT"/>
              <el-option label="PATCH" value="PATCH"/>
              <el-option label="DELETE" value="DELETE"/>
              <el-option label="OPTIONS" value="OPTIONS"/>
              <el-option label="HEAD" value="HEAD"/>
              <el-option label="CONNECT" value="CONNECT"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="路径" prop="path" label-width="40px">
            <el-input v-model="object.path.value"/>
          </el-form-item>
        </el-col>
        <el-col class="content-encoding-col">
          <el-form-item label="内容编码" prop="contentEncoding" label-width="80px">
            <el-input v-model="object.contentEncoding.value"/>
          </el-form-item>
        </el-col>
      </el-row>

      <el-checkbox v-model="object.autoRedirects.value">自动重定向</el-checkbox>
      <el-checkbox v-model="object.followRedirects.value">跟随重定向</el-checkbox>
      <el-checkbox v-model="object.useKeepalive.value">使用Keepalive</el-checkbox>
      <el-checkbox v-model="object.doMultipartPost.value">POST使用multipart/form-data</el-checkbox>
      <el-checkbox v-model="object.browserCompatibleMultipart.value">与浏览器兼容的头</el-checkbox>

      <el-tabs v-model="activeName">
        <el-tab-pane label="参数" name="params">
          <http-variables :items="object.arguments"/>
        </el-tab-pane>
        <el-tab-pane label="消息体" name="body">
          <el-input type="textarea" v-model="object.body" :autosize="{minRows: 6, maxRows: 10}"/>
        </el-tab-pane>
        <el-tab-pane label="文件上传" name="file">
          TODO
        </el-tab-pane>
      </el-tabs>
    </component-field-set>
  </el-form>
</template>

<script>
import ComponentFieldSet from "@/components/ComponentFieldSet";
import HTTPSamplerProxy from "@/jmeter/components/samplers/http-sampler/index";
import HttpVariables from "@/jmeter/components/samplers/http-sampler/HttpVariables";

export default {
  name: "HttpBasicConfig",
  components: {HttpVariables, ComponentFieldSet},
  props: {
    object: HTTPSamplerProxy
  },
  data() {
    return {
      activeName: "params",
    }
  },
}
</script>

<style scoped>
.protocol-col, .port-col, .method-col, .content-encoding-col {
  width: 250px;
  min-width: 150px;
}
</style>
