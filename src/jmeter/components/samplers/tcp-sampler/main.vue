<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#TCP_Sampler">
    <el-form ref="object" :model="object" label-position="left" size="mini">
      <el-form-item :label="t('wm.samplers.tcp.classname')" label-width="80px" prop="classname">
        <el-select v-model="object.classname.value"
                   :placeholder="t('wm.commons.please_select')"
                   filterable
                   allow-create
                   class="tcp-classname">
          <el-option label="TCPClientImpl" value="TCPClientImpl"/>
          <el-option label="BinaryTCPClientImpl" value="BinaryTCPClientImpl"/>
          <el-option label="LengthPrefixedBinaryTCPClientImpl" value="LengthPrefixedBinaryTCPClientImpl"/>
        </el-select>
      </el-form-item>

      <component-field-set :title="t('wm.samplers.tcp.target_server')">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form-item :label="t('wm.samplers.tcp.server')" label-width="120px" prop="server">
              <el-input v-model="object.server.value"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item :label="t('wm.samplers.tcp.port')" label-width="40px" prop="port">
              <el-input v-model="object.port.value"/>
            </el-form-item>
          </el-col>
        </el-row>
      </component-field-set>

      <component-field-set :title="t('wm.samplers.tcp.timeout')">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item :label="t('wm.samplers.tcp.connect')" label-width="40px" prop="connectTimeout">
              <el-input v-model="object.connectTimeout.value"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="t('wm.samplers.tcp.response')" label-width="40px" prop="responseTimeout">
              <el-input v-model="object.responseTimeout.value"/>
            </el-form-item>
          </el-col>
        </el-row>
      </component-field-set>

      <component-field-set>
        <el-row type="flex">
          <el-row type="flex" align="middle" class="tcp-item">
            <el-checkbox v-model="object.reUseConnection.value">{{ t('wm.samplers.tcp.re_use') }}</el-checkbox>
            <el-checkbox v-model="object.closeConnection.value">{{ t('wm.samplers.tcp.close') }}</el-checkbox>
            <el-checkbox v-model="object.nodelay.value">{{ t('wm.samplers.tcp.no_delay') }}</el-checkbox>
          </el-row>

          <el-row type="flex" align="middle" class="tcp-item">
            <label class="el-form-item__label nowrap">{{ t('wm.samplers.tcp.so_linger') }}</label>
            <el-input v-model="object.soLinger.value" size="mini"/>
          </el-row>

          <el-row type="flex" align="middle" class="tcp-item">
            <label class="el-form-item__label nowrap">{{ t('wm.samplers.tcp.eol_byte') }}</label>
            <el-input v-model="object.eolByte.value" size="mini"/>
          </el-row>
        </el-row>
      </component-field-set>

      <component-field-set :title="t('wm.samplers.tcp.request')">
        <el-input type="textarea" v-model="object.request.value" :autosize="{minRows: 5, maxRows: 10}"/>
      </component-field-set>

      <component-field-set :title="t('wm.samplers.tcp.login')">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item :label="t('wm.samplers.tcp.username')" label-width="80px" prop="username">
              <el-input v-model="object.username.value"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="t('wm.samplers.tcp.password')" label-width="80px" prop="password">
              <el-input v-model="object.password.value"/>
            </el-form-item>
          </el-col>
        </el-row>
      </component-field-set>
    </el-form>
  </component-container>
</template>

<script>

import ComponentContainer from "@/components/ComponentContainer";
import TCPSampler from "./index";
import Locale from "@/mixins/locale";
import ComponentFieldSet from "@/components/ComponentFieldSet";

export default {
  name: "TCPSampler",
  components: {ComponentContainer, ComponentFieldSet},
  mixins: [Locale],
  props: {
    object: TCPSampler
  }
}
</script>

<style scoped>
.tcp-classname {
  width: 100%;
}

.tcp-item {
  margin: 0 10px;
}

.nowrap {
  white-space: nowrap;
}
</style>
