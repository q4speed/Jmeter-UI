<template>
  <div class="jmx-container">
    <split-pane :min-percent='10' :default-percent='20' split="vertical">
      <template slot="paneL">
        <components-tree :data="element" :select="select"></components-tree>
      </template>
      <template slot="paneR">
        <component :is="selected.name" :object="selected" v-if="selected"></component>
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
    element() {
      // 从TestPlan开始
      return this.jmx.elements[0].hashTree;
    }
  }
}
</script>

<style scoped>
.jmx-container {
  background-color: #F5F5F5;
  position: relative;
  height: 100vh;
}
</style>
