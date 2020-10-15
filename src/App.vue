<template>
  <div id="app">
    <input id="file" type="file" accept=".jmx" @change="loadFile" v-show="false"/>
    <el-button @click="open" size="mini">
      打开JMX文件
    </el-button>
    <el-button @click="download" size="mini">
      保存JMX文件
    </el-button>
    默认显示的工程里demo.js文件（由demo.xml转换为json）
    <jmx-view :jmx="jmx" v-if="jmx" style="height: 100%"/>
  </div>
</template>

<script>

import JmxView from "@/jmeter/jmx/src/main";
import {xml2json, json2xml} from "xml-js";
import JMX from "@/jmeter/jmx";
import {downloadFile} from "@/commons/utils";
import demo from "@/assets/demo";

export default {
  name: 'App',
  components: {JmxView},
  data() {
    return {
      jmx: new JMX(demo)
    }
  },
  methods: {
    open() {
      document.getElementById("file").click();
    },
    loadFile(e) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        const json = JSON.parse(xml2json(e.target.result));
        this.jmx = new JMX(json);
      };
      reader.readAsText(file);
    },
    download() {
      if (this.jmx) {
        let json = this.jmx.toJson();
        let xml = json2xml(json);
        this.$prompt('请输入文件名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({value}) => {
          if (value.indexOf(".jmx") === -1) {
            value += ".jmx";
          }
          downloadFile(value, xml);
          this.$message({
            type: 'success',
            message: '文件: ' + value
          });
        });
      }
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
#app {
  height: 100vh;
}
</style>
