<template>
  <el-container>
    <el-aside class="jmx-tree">
      <components-tree :data="testPlan" :select="select"></components-tree>
    </el-aside>
    <el-main class="jmx-content">
      <component :is="className" :object="selected" v-if="selected"></component>
    </el-main>
  </el-container>
</template>

<script>
import ComponentsTree from "@/components/tree/ComponentsTree";
import JMX from "@/jmeter/jmx/index";
import {hasComponent} from "@/jmeter/components";

export default {
  name: "Jmx",
  components: {ComponentsTree},
  props: {
    jmx: JMX
  },
  data() {
    return {
      selected: "",
    }
  },
  methods: {
    select(data) {
      this.selected = data;
    }
  },
  computed: {
    testPlan() {
      // 从TestPlan开始
      return this.jmx.elements[0].hashTree;
    },
    className() {
      return hasComponent(this.selected.name);
    }
  }
}
</script>

<style scoped>
.jmx-tree {
  border-right: 1px solid #DFDFDF;
  min-width: 300px;
  overflow: auto;
}

.jmx-content {
  padding: 10px 20px;
}
</style>
