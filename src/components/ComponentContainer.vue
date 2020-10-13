<template>
  <div class="components-container">
    <slot name="title">
      <div class="title">{{ title }}</div>
    </slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ComponentContainer",
  props: ["title"]
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
</style>
