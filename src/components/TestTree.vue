<template>
  <el-tree
    :data="data"
    node-key="id"
    :props="props"
    default-expand-all
    draggable
    :allow-drop="allowDrop"
    :allow-drag="allowDrag">
    <template v-slot:default="{ node }">
      <span class="el-tree-node__label">
        <span>{{ node.label }}</span>
      </span>
    </template>
  </el-tree>
</template>

<script>
export default {
  name: "TestTree",
  props: {
    data: Array,
    label: String,
    children: String,
  },
  data() {
    return {
      props: {
        label: this.label || "label",
        children: this.children || "hashTree"
      },
    }
  },
  methods: {
    allowDrop(draggingNode, dropNode) {
      return dropNode.data.name !== 'ConstantTimer';
    },
    allowDrag(draggingNode) {
      return draggingNode.data.name !== 'TestPlan';
    }
  }
}
</script>

<style scoped>

</style>
