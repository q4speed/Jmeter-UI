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
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
<!--      <el-cascader-panel :options="options" id="menu" class="jmeter-menu" @change="exec" ref="menu">-->
<!--        <template v-slot:default="{ node, data }">-->
<!--          <div class="divider" v-if="data.value === 'Divider'"></div>-->
<!--          <span v-else>{{ data.label }}</span>-->
<!--        </template>-->
<!--      </el-cascader-panel>-->
    </div>
  </div>
</template>

<script>
import {MENUS} from "@/jmeter/components";

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
      basic: [
        {value: 'Cut', label: 'Cut'},
        {value: 'Copy', label: 'Copy'},
        {value: 'Paste', label: 'Paste'},
        {value: 'Duplicate', label: 'Duplicate'},
        {value: 'Remove', label: 'Remove'},
      ],
      options: [],
      menuVisible: false,
    }
  },
  methods: {
    showMenu(event, data, node, element) {
      this.getMenu(data);
      let tree = document.querySelector("#jmeter-tree");
      let treeLeft = tree.getBoundingClientRect().left;
      let treeTop = tree.getBoundingClientRect().top;
      let treeBottom = tree.getBoundingClientRect().bottom;
      const MENU_HEIGHT = 300;

      this.menuVisible = true;
      let menu = document.querySelector('#menu');
      menu.style.left = event.clientX + treeLeft + 1 + 'px';
      if (event.clientY + MENU_HEIGHT >= treeBottom) {
        menu.style.top = event.clientY - MENU_HEIGHT - treeTop + 'px';
      } else {
        menu.style.top = event.clientY - treeTop + 'px';
      }
    },
    getMenu(data) {
      let options = [];
      this.basic.forEach(o => {
        options.push(o);
      })
      if (data.enabled) {
        options.push({value: 'Disable', label: 'Disable'});
      } else {
        options.push({value: 'Enable', label: 'Enable'});
      }
      if (data.getAllowMenu) {
        let divider = {value: 'Divider', label: 'Divider', disabled: true}
        options.unshift(divider);

        let allowMenu = data.getAllowMenu();
        // TODO Insert Parent
        let add = {
          label: "Add", value: "Add", children: []
        };
        options.unshift(add);
        allowMenu.children.forEach(c => {
          let option = {label: c, value: c, children: []};
          if (MENUS[c]) {
            MENUS[c].forEach(o => {
              option.children.push(o);
            })
          }
          add.children.push(option);
        })
      }
      this.options = options;
    },
    exec(value) {
      console.log(value)
      this.$refs.menu.clearCheckedNodes();
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
  z-index: 99;
  background-color: #FFFFFF;
  height: 300px;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
}

.jmeter-menu .divider {
  height: 1px;
  background-color: #dcdfe6;
  position: relative;
}

.jmeter-menu >>> .el-cascader-node {
  height: 24px;
  line-height: 24px;
}
</style>
