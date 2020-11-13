<template>
  <div class="components-container">
    <el-form ref="object" :model="object" label-width="auto" label-position="left" size="mini"
             :disabled="disabled">
      <slot name="title">
        <div class="title">
          <el-row type="flex" align="middle">
            <span v-if="title">{{ title }}</span>
            <span v-else>{{ object.name }}</span>
            <el-link icon="el-icon-question" :underline="false" :href="helpUrl" v-if="helpUrl" target="_blank"/>
          </el-row>
        </div>

        <el-form-item :label="t('wm.commons.name')" label-width="80px" prop="label">
          <el-input v-model="object.label"></el-input>
        </el-form-item>
        <el-form-item :label="t('wm.commons.comments')" label-width="80px" prop="comments">
          <el-input v-model="object.comments.value"></el-input>
        </el-form-item>
      </slot>
      <slot></slot>
    </el-form>
  </div>
</template>

<script>
import Locale from "@/mixins/locale"
import {Setting} from "@/jmeter/setting";

export default {
  name: "ComponentContainer",
  props: ["helpUrl", "object", "title", "props"],
  mixins: [Locale],
  computed: {
    disabled() {
      let setting = Setting[this.object.name];
      return setting !== undefined && setting.edit !== undefined && setting.edit.disabled === true
    }
  }
}
</script>

<style scoped>
.components-container {
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  padding: 10px 20px;
}

.components-container .title {
  font-size: 16px;
  margin-bottom: 10px;
}

.components-container >>> i {
  margin-left: 5px;
  font-size: 16px;
}

.components-container >>> .el-form-item {
  margin-bottom: 5px;
}
</style>
