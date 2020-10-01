<template>
  <div id="app">
    <test-tree :data="element"></test-tree>
    <span>{{ json2xml(this.jmx.toJson()) }}</span>
  </div>
</template>

<script>

import TestTree from "@/components/TestTree";
import JMX from "@/jmeter/others/jmx";
import json from "@/assets/demo";
import {json2xml} from "xml-js"

export default {
  name: 'App',
  components: {TestTree},
  data() {
    return {
      jmx: new JMX(json)
    }
  },
  methods: {
    json2xml(json) {
      return json2xml(json);
    }
  },
  computed: {
    element() {
      // 从TestPlan开始
      console.log(this.jmx.elements[0].hashTree)
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
