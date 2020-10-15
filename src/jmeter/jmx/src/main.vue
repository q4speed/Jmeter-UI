<template>
  <div class="jmx-container">
    <split-pane :min-percent='10' :default-percent='20' split="vertical">
      <template slot="paneL">
        <components-tree :data="testPlan" :select="select"></components-tree>
      </template>
      <template slot="paneR">
        <component :is="className" :object="selected" v-if="selected"></component>
      </template>
    </split-pane>
  </div>
</template>

<script>
import ComponentsTree from "@/components/ComponentsTree";
import JMX from "@/jmeter/jmx";
import json from "@/assets/demo";

export default {
  name: "jmx",
  components: {ComponentsTree},
  data() {
    return {
      jmx: new JMX(json),
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
      return this.selected.constructor.name
    }
  }
}
</script>

<style scoped>
.jmx-container {
  background-color: #F9F9F9;
  position: relative;
  height: 100vh;
}
</style>
