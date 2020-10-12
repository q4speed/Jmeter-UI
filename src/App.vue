<template>
  <div id="app">
    <test-tree :data="element"></test-tree>
    <pre>{{ xml }}</pre>
    <el-button @click="showXML">showXML</el-button>
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
      jmx: new JMX(json),
      xml: ""
    }
  },
  methods: {
    showXML() {
      let json = this.jmx.toJson();
      this.xml = this.json2xml(json);
    },
    json2xml(json) {
      return json2xml(json);
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

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
</style>
