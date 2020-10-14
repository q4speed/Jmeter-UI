<template>
  <component-field-set :title="title">
    <el-table
      size="mini"
      :height="height"
      :data="items"
      header-cell-class-name="variable-table-th"
      cell-class-name="variable-table-td"
      class="variable-table">
      <slot></slot>
      <el-table-column label="Enable" width="80">
        <template v-slot:default="{row}">
          <el-checkbox v-model="row.enable"/>
        </template>
      </el-table-column>
      <el-table-column width="100">
        <template v-slot:default="scope">
          <el-button size="mini" @click="remove(scope.$index)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="variable-field-set-footer">
      <slot name="footer">
        <el-row type="flex" justify="center">
          <el-button size="mini" @click="add">Add</el-button>
          <el-button size="mini" @click="clear">Clear</el-button>
        </el-row>
      </slot>
    </div>
  </component-field-set>
</template>

<script>
import ComponentFieldSet from "@/components/ComponentFieldSet";

export default {
  name: "VariableFieldSet",
  components: {ComponentFieldSet},
  props: {
    title: String,
    height: [String, Number],
    items: Array
  },
  data() {
    return {}
  },
  methods: {
    add() {
      this.items.push({enable: true});
    },
    remove(index) {
      this.items.splice(index, 1);
    },
    clear() {
      for (let i = this.items.length - 1; i >= 0; i--) {
        this.items.splice(i, 1);
      }
    },
  },
}
</script>

<style scoped>
.variable-table {
  background-color: inherit;
}

.variable-table >>> .variable-table-th, .variable-table >>> .variable-table-td {
  text-align: center;
}

.variable-field-set-footer {
  margin: 10px 0;
}

</style>
