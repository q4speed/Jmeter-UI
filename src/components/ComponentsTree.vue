<template>
  <div class="component-tree" id="jmeter-tree">
    <el-tree
      node-key="id"
      default-expand-all
      draggable
      :highlight-current="true"
      :data="data"
      :props="props"
      :expand-on-click-node="false"
      @node-click="select"
      @node-contextmenu="showMenu"
      :allow-drop="allowDrop"
      :allow-drag="allowDrag">
      <template v-slot:default="{ node }">
        <span class="el-tree-node__label">
          <span>{{ node.label }}</span>
        </span>
      </template>
    </el-tree>
    <div v-show="menuVisible">
      <el-card id="menu" class="jmeter-menu">

      </el-card>
    </div>
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
      menuVisible: false,
    }
  },
  methods: {
    showMenu(event, data, node, element) {
      let tree = document.querySelector("#jmeter-tree");
      let treeLeft = tree.getBoundingClientRect().left;
      let treeTop = tree.getBoundingClientRect().top;
      let treeBottom = tree.getBoundingClientRect().bottom;
      const MENU_HEIGHT = 100;

      this.menuVisible = true;
      let menu = document.querySelector('#menu');
      menu.style.left = event.clientX + treeLeft + 1 + 'px';
      if (event.clientY + MENU_HEIGHT >= treeBottom) {
        menu.style.top = event.clientY - MENU_HEIGHT - treeTop + 'px';
      } else {
        menu.style.top = event.clientY - treeTop + 'px';
      }
    },
    close() {
      this.menuVisible = false
    },
    allowDrop(draggingNode, dropNode) {
      return dropNode.data.allowDrop(draggingNode.data);
    },
    allowDrag(draggingNode) {
      return draggingNode.data.allowDrag();
    }
  }
}
</script>

<style scoped>
.component-tree {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.component-tree > .el-tree {
  background-color: inherit;
}

.jmeter-menu {
  height: 100px;
  box-sizing: border-box;
  position: absolute;
}
</style>
