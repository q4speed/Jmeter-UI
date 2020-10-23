<template>
  <fieldset class="components-field-set">
    <legend class="title" v-if="title">{{ title }}</legend>
    <slot></slot>
  </fieldset>
</template>

<script>
export default {
  name: "ComponentFieldSet",
  props: ["title"]
}
</script>

<style scoped>
.components-field-set {
  min-width: inherit;
  color: #606266;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  margin: 0 0 10px 0;
}

.components-field-set .title {
  font-size: 14px;
}
</style>
