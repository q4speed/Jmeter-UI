<template>
  <div class="component-tree">
    <el-tree
      :data="data"
      node-key="id"
      :props="props"
      default-expand-all
      :expand-on-click-node="false"
      draggable
      @node-click="select"
      @node-contextmenu="menu"
      :allow-drop="allowDrop"
      :allow-drag="allowDrag">
      <template v-slot:default="{ node }">
      <span class="el-tree-node__label">
        <span>{{ node.label }}</span>
      </span>
      </template>
    </el-tree>
  </div>
</template>

<script>
export default {
  name: "ComponentsTree",
  props: {
    data: Array,
    select: Function
  },
  data() {
    return {
      props: {
        label: "label",
        children: "hashTree"
      },
    }
  },
  methods: {
    menu(event, data) {
      console.log(event, data)
    },
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
.component-tree {
  padding: 10px;
}

.component-tree > .el-tree {
  background-color: inherit;
}
</style>
