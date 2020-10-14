<template>
  <fieldset class="components-field-set">
    <legend class="title">{{ title }}</legend>
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
  border-color: #EFEFEF;
  margin-bottom: 10px;
}

.components-field-set .title {
  font-size: 14px;
}
</style>
