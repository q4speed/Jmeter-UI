<template>
  <div class="component-tree" id="jmeter-tree">
    <el-tree
      ref="tree"
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
    <div id="menu" class="jmeter-menu" v-show="menuVisible">
      <el-cascader-panel ref="menu" v-if="options.length > 0"
                         :props="{expandTrigger:'hover'}"
                         :options="options"
                         :border="false"
                         @change="exec">
        <template v-slot:default="{ node, data }">
          <div class="divider" v-if="data.value === 'Divider'"/>
          <span v-else>{{ data.label }}</span>
        </template>
      </el-cascader-panel>
    </div>
  </div>
</template>

<script>
import {MENUS, createComponent} from "@/jmeter/components";

const BASIC_MENUS = [
  // {value: 'Cut', label: 'Cut'},
  // {value: 'Copy', label: 'Copy'},
  // {value: 'Paste', label: 'Paste'},
  {value: 'Duplicate', label: 'Duplicate'},
  {value: 'Remove', label: 'Remove'},
  {value: 'Divider', label: 'Divider', disabled: true},
];
const addMenus = (node, name) => {
  if (MENUS[name]) {
    let option = {label: name, value: name, children: []};
    MENUS[name].forEach(o => {
      option.children.push(o);
    })
    node.children.push(option);
  }
}

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
      options: [],
      current: null,
      menuVisible: false,
    }
  },
  methods: {
    showMenu(event, data) {
      if (this.$refs.menu) {
        this.$refs.menu.activePath = [];
      }
      this.current = data;
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
      document.addEventListener('click', this.close);
    },
    getMenu(data) {
      this.options = [];
      BASIC_MENUS.forEach(o => {
        this.options.push(o);
      })

      if (data.enabled) {
        this.options.push({value: 'Disable', label: 'Disable'});
      } else {
        this.options.push({value: 'Enable', label: 'Enable'});
      }

      if (data.getAllowMenu) {
        let divider = {value: 'Divider', label: 'Divider', disabled: true}
        this.options.unshift(divider);

        let allowMenu = data.getAllowMenu();
        // 允许的父节点
        if (allowMenu.parent) {
          let parent = {
            label: "Insert Parent", value: "Insert Parent", children: []
          };
          allowMenu.parent.forEach(name => {
            addMenus(parent, name);
          })
          this.options.unshift(parent);
        }

        // 允许的子节点
        if (allowMenu.children) {
          let add = {
            label: "Add", value: "Add", children: []
          };
          allowMenu.children.forEach(name => {
            addMenus(add, name);
          })
          this.options.unshift(add);
        }
      }
    },
    close() {
      this.options = [];
      this.$refs.menu.activePath = [];
      this.$refs.menu.clearCheckedNodes();

      this.menuVisible = false
      document.removeEventListener('click', this.close);
    },
    exec(path) {
      let command = path[path.length - 1];
      let tree = this.$refs.tree;
      switch (command) {
        case "Cut":
          break;
        case "Copy":
          break;
        case "Paste":
          break;
        case "Duplicate":
          let c = this.current.clone();
          tree.insertAfter(c, this.current);
          break;
        case "Remove":
          tree.remove(this.current)
          break;
        case "Enable":
          this.current.enabled = true;
          break;
        case "Disable":
          this.current.enabled = false;
          break;
        default:
          // command为控件类名
          let component = createComponent(command);
          tree.append(component, this.current);
      }
      this.close();
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

.jmeter-menu >>> .el-cascader-menu, .jmeter-menu >>> .el-cascader-menu__wrap {
  height: 100%;
}

.jmeter-menu >>> .el-cascader-node {
  height: 24px;
  line-height: 24px;
}
</style>
