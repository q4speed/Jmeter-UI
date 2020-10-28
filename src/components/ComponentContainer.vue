<template>
  <div class="components-container">
    <slot name="title">
      <div class="title">
        <el-row type="flex" align="middle">
          <span v-if="title">{{ title }}</span>
          <span v-else>{{ object.name }}</span>
          <el-link icon="el-icon-question" :underline="false" :href="helpUrl" v-if="helpUrl" target="_blank"/>
        </el-row>
      </div>
      <el-form ref="object" :model="object" label-width="auto" size="mini">
        <el-form-item :label="t('wm.commons.name')" prop="label">
          <el-input v-model="object.label"></el-input>
        </el-form-item>
        <el-form-item :label="t('wm.commons.comments')" prop="comments">
          <el-input v-model="object.comments.value"></el-input>
        </el-form-item>
      </el-form>
    </slot>
    <slot></slot>
  </div>
</template>

<script>
import Locale from "@/mixins/locale"

export default {
  name: "ComponentContainer",
  props: ["helpUrl", "object", "title"],
  mixins: [Locale]
}
</script>

<style scoped>
.components-container {
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
