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
      <template v-slot:default="{ node, data }">
        <span class="el-tree-node__label" :class="{disabled: !data.enabled}">
          <i :class="getIcon(data)"></i>
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
          <span v-else>{{ t(data.label) }}</span>
        </template>
      </el-cascader-panel>
    </div>
  </div>
</template>

<script>
import {createComponent} from "@/jmeter/components";
import {allowDrag, allowDrop, getComponentMenus, getIcon} from "./tree";
import Locale from "@/mixins/locale";
import {Setting} from "@/jmeter/setting";

const BASIC_MENUS = [
  {value: 'Cut', label: 'wm.commons.cut', disabled: true},
  {value: 'Copy', label: 'wm.commons.copy', disabled: true},
  {value: 'Paste', label: 'wm.commons.paste', disabled: true},
  {value: 'Duplicate', label: 'wm.commons.duplicate'},
  {value: 'Remove', label: 'wm.commons.remove'},
  {value: 'Divider', label: 'Divider', disabled: true},
];

export default {
  name: "ComponentsTree",
  mixins: [Locale],
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
      // Setting中设置了禁用菜单
      let setting = Setting[data.name];
      if (setting && setting.menu && setting.menu.disabled) {
        return;
      }

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
        this.options.push({value: 'Disable', label: 'wm.commons.disable'});
      } else {
        this.options.push({value: 'Enable', label: 'wm.commons.enable'});
      }

      let allowMenu = getComponentMenus(data);
      if (allowMenu.children.length > 0 || allowMenu.parent.length > 0) {
        let divider = {value: 'Divider', label: 'Divider', disabled: true}
        this.options.unshift(divider);

        if (allowMenu.parent.length > 0) {
          this.options.unshift({
            label: "wm.commons.insert", value: "Insert Parent", children: allowMenu.parent
          });
        }

        if (allowMenu.children.length > 0) {
          this.options.unshift({
            label: "wm.commons.add", value: "Add", children: allowMenu.children
          });
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
    enable(data) {
      data.enabled = true;
      if (data.hashTree) {
        data.hashTree.forEach(child => {
          this.enable(child);
        })
      }
    },
    disable(data) {
      data.enabled = false;
      if (data.hashTree) {
        data.hashTree.forEach(child => {
          this.disable(child);
        })
      }
    },
    exec(path) {
      let command = path[0];
      let name = path[path.length - 1];
      let tree = this.$refs.tree;
      switch (command) {
        case "Cut":
          break;
        case "Copy":
          break;
        case "Paste":
          break;
        case "Duplicate":
          let clone = this.current.clone();
          tree.insertAfter(clone, this.current.id);
          break;
        case "Remove":
          tree.remove(this.current.id);
          break;
        case "Enable":
          this.enable(this.current);
          break;
        case "Disable":
          this.disable(this.current);
          break;
        case "Add":
          let component = createComponent(name);
          tree.append(component, this.current.id);
          break;
        case "Insert Parent":
          let parent = createComponent(name);
          tree.insertBefore(parent, this.current.id);
          tree.remove(this.current.id);
          tree.append(this.current, parent.id);
          break;
      }
      this.close();
    },
    allowDrop(draggingNode, dropNode, type) {
      let drag = draggingNode.data;
      let drop = dropNode.data;
      if (type !== "inner") {
        drop = dropNode.parent.data
      }
      let setting = Setting[drop.name];
      if (setting && setting.tree && setting.tree.drop === false) {
        return false;
      }
      return allowDrop(drag, drop, type);
    },
    allowDrag(draggingNode) {
      let setting = Setting[draggingNode.data.name];
      if (setting && setting.tree && setting.tree.drag === false) {
        return false;
      }
      return allowDrag(draggingNode.data);
    },
    getIcon(data) {
      return getIcon(data);
    },
  },
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
  height: 100%;
}

.component-tree >>> .el-tree-node__children {
  width: fit-content;
}

.component-tree >>> .el-tree-node__label i {
  margin-right: 5px;
}

.component-tree >>> .el-tree-node__label.disabled {
  color: #FFF;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
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
  margin: 5px 0;
  border-top: 1px solid #dcdfe6;
  position: relative;
}

.jmeter-menu >>> .el-cascader-menu, .jmeter-menu >>> .el-cascader-menu__wrap {
  height: 100%;
}

.jmeter-menu >>> .el-cascader-node {
  height: auto;
  line-height: 24px;
}
</style>
