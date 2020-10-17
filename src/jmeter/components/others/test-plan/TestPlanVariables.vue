<template>
  <variable-field-set title="用户自定义变量" height="300" :items="items">
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
  </variable-field-set>
</template>

<script>
import VariableFieldSet from "@/components/variables/VariableFieldSet";

export default {
  name: "TestPlanVariables",
  components: {VariableFieldSet},
  props: {
    items: Array
  }
}
</script>

<style scoped>

</style>
