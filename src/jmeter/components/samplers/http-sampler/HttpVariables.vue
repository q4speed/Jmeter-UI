<template>
  <variable-field-set title="发送参数" height="300" :items="items">
    <el-table-column label="Name">
      <template v-slot:default="{row}">
        <el-input v-model="row.name" size="mini"/>
      </template>
    </el-table-column>

    <el-table-column label="Value">
      <template v-slot:default="{row}">
        <el-input v-model="row.value" size="mini"/>
      </template>
    </el-table-column>

    <el-table-column label="编码" width="80">
      <template v-slot:default="{row}">
        <el-checkbox v-model="row.alwaysEncode"/>
      </template>
    </el-table-column>

    <el-table-column label="内容类型" width="150">
      <template v-slot:default="{row}">
        <el-input v-model="row.contentType" size="mini"/>
      </template>
    </el-table-column>

    <el-table-column label="包含等于" width="100">
      <template v-slot:default="{row}">
        <el-checkbox v-model="row.useEquals" :checked="true" :disabled="true"/>
      </template>
    </el-table-column>
  </variable-field-set>
</template>

<script>
import VariableFieldSet from "@/components/variables/VariableFieldSet";

export default {
  name: "HttpVariables",
  components: {VariableFieldSet},
  props: {
    items: Array
  }
}
</script>

<style scoped>

</style>
