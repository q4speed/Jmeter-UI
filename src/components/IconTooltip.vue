<template>
  <el-tooltip :content="content" :placement="placement">
    <el-icon name="question"/>
  </el-tooltip>
</template>

<script>
export default {
  name: "IconTooltip",
  props: {
    content: String,
    placement: {
      type: String,
      default: "top-start"
    }
  }
}
</script>

<style scoped>

</style>
