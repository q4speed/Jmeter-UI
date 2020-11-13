<template>
  <variable-field-set :title="t('wm.samplers.http.send_arguments')" height="300" :items="items" :disabled="disabled">
    <el-table-column :label="t('wm.samplers.http.name')">
      <template v-slot:default="{row}">
        <el-input v-model="row.name" size="mini"/>
      </template>
    </el-table-column>

    <el-table-column :label="t('wm.samplers.http.value')">
      <template v-slot:default="{row}">
        <el-input v-model="row.value" size="mini"/>
      </template>
    </el-table-column>

    <el-table-column :label="t('wm.samplers.http.encode')" width="80">
      <template v-slot:default="{row}">
        <el-checkbox v-model="row.alwaysEncode"/>
      </template>
    </el-table-column>

    <el-table-column :label="t('wm.samplers.http.content_type')" width="150">
      <template v-slot:default="{row}">
        <el-input v-model="row.contentType" size="mini"/>
      </template>
    </el-table-column>

    <el-table-column :label="t('wm.samplers.http.use_equals')" width="100">
      <template v-slot:default="{row}">
        <el-checkbox v-model="row.useEquals" :checked="true" :disabled="true"/>
      </template>
    </el-table-column>
  </variable-field-set>
</template>

<script>
import VariableFieldSet from "@/components/variables/VariableFieldSet";
import Locale from "@/mixins/locale";

export default {
  name: "HttpVariables",
  components: {VariableFieldSet},
  mixins: [Locale],
  props: {
    disabled: Boolean,
    items: Array
  }
}
</script>

<style scoped>

</style>
