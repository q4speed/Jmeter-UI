<template>
  <div id="app">
    <test-tree :data="element"></test-tree>
  </div>
</template>

<script>

import TestTree from "@/components/TestTree";
import JMX from "@/jmeter/others/jmx";
import json from "@/assets/data";

export default {
  name: 'App',
  components: {TestTree},
  data() {
    return {
      jmx: new JMX(json)
    }
  },
  methods: {},
  computed: {
    element() {
      // 从TestPlan开始
      return this.jmx.elements[0].hashTree;
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
</style>
