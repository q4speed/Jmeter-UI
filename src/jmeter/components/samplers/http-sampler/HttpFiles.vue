<template>
  <variable-field-set :title="t('wm.samplers.http.send_arguments')" height="300" :items="items" :disabled="disabled">
    <el-table-column :label="t('wm.samplers.http.file_path')">
      <template v-slot:default="{row}">
        <el-input v-model="row.path" size="mini"/>
      </template>
    </el-table-column>

    <el-table-column :label="t('wm.samplers.http.param_name')">
      <template v-slot:default="{row}">
        <el-input v-model="row.name" size="mini"/>
      </template>
    </el-table-column>

    <el-table-column label="MIME Type" width="150">
      <template v-slot:default="{row}">
        <el-input v-model="row.type" size="mini"/>
      </template>
    </el-table-column>
  </variable-field-set>
</template>

<script>
import VariableFieldSet from "@/components/variables/VariableFieldSet";
import Locale from "@/mixins/locale";

export default {
  name: "HttpFiles",
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
