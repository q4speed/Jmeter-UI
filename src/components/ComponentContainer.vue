<template>
  <div class="components-container">
    <slot name="title">
      <div class="title">
        {{ object.name }}
        <el-link icon="el-icon-question" :underline="false" :href="helpUrl" v-if="helpUrl" target="_blank"/>
      </div>
      <el-form ref="object" :model="object" label-width="auto" size="mini">
        <el-form-item label="名称" prop="label">
          <el-input v-model="object.label"></el-input>
        </el-form-item>
        <el-form-item label="注释" prop="comments">
          <el-input v-model="object.comments.value"></el-input>
        </el-form-item>
      </el-form>
    </slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ComponentContainer",
  props: ["helpUrl", "object"]
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

.components-container >>> .el-link {
  margin-top: -2px;
  font-size: 16px;
}

.components-container >>> .el-form-item {
  margin-bottom: 10px;
}
</style>
