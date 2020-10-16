<template>
  <div class="component-tree">
    <el-tree
      node-key="id"
      default-expand-all
      draggable
      :highlight-current="true"
      :data="data"
      :props="props"
      :expand-on-click-node="false"
      @node-click="select"
      @node-contextmenu="rightClick"
      :allow-drop="allowDrop"
      :allow-drag="allowDrag">
      <template v-slot:default="{ node }">
        <span class="el-tree-node__label" slot="reference">
          <span>{{ node.label }}</span>
        </span>
      </template>
    </el-tree>
    <div v-show="menuVisible">
      <ul id="menu" class="menu">
        <li class="menu__item">新增</li>
        <li class="menu__item">重命名</li>
        <li class="menu__item">删除</li>
      </ul>
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
    rightClick(event, object, node, element) { // 鼠标右击触发事件
      // node.menu = true
      console.log(node)
      this.menuVisible = false // 先把模态框关死，目的是 第二次或者第n次右键鼠标的时候 它默认的是true
      this.menuVisible = true  // 显示模态窗口，跳出自定义菜单栏
      let menu = document.querySelector('#menu')
      this.styleMenu(event, menu);
    },
    foo() { // 取消鼠标监听事件 菜单栏
      this.menuVisible = false
      document.removeEventListener('click', this.foo) // 要及时关掉监听，不关掉的是一个坑，不信你试试，虽然前台显示的时候没有啥毛病，加一个alert你就知道了
    },
    styleMenu(event, menu) {
      if (event.clientX > 1800) {
        menu.style.left = event.clientX - 100 + 'px';
      } else {
        menu.style.left = event.clientX + 1 + 'px';
      }
      document.addEventListener('click', this.foo); // 给整个document新增监听鼠标事件，点击任何位置执行foo方法
      if (event.clientY > 700) {
        menu.style.top = event.clientY - 30 + 'px';
      } else {
        menu.style.top = event.clientY - 10 + 'px';
      }
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
  padding: 10px;
}

.component-tree > .el-tree {
  background-color: inherit;
}

.menu__item {
  display: block;
  line-height: 20px;
  text-align: center;
  margin: 10px;
  cursor: default;
}

.menu__item:hover {
  color: #FF0000;
}

.menu {
  height: auto;
  width: auto;
  position: absolute;
  font-size: 14px;
  text-align: left;
  border-radius: 10px;
  border: 1px solid #c1c1c1;
  background-color: #ffffff;
}

li:hover {
  background-color: #E0E0E2;
  color: white;
}
</style>
