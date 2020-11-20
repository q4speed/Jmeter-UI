<template>
  <div id="app">
    <input id="file" type="file" accept=".jmx" @change="loadFile" v-show="false"/>
    <el-button @click="create" size="mini">
      创建JMX
    </el-button>
    <el-button @click="open" size="mini">
      打开JMX文件
    </el-button>
    <el-button @click="log" size="mini">
      控制台查看JMX
    </el-button>
    <el-button @click="download" size="mini">
      保存JMX文件
    </el-button>
    <span> 增删控件：右键菜单</span>
    <jmeter-view ref="jmeter" :xml="xml" style="height: calc(100% - 28px)"/>
  </div>
</template>

<script>

import {downloadFile} from "@/commons/utils";
import demo from "./assets/demo"
import {js2xml} from "xml-js"

export default {
  name: 'App',
  data() {
    return {
      xml: js2xml(demo)
    }
  },
  methods: {
    create() {
      this.$refs.jmeter.create();
    },
    open() {
      document.getElementById("file").click();
    },
    loadFile(e) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        this.$refs.jmeter.edit(e.target.result)
      };
      reader.readAsText(file);
    },
    log() {
      let xml = this.$refs.jmeter.get();
      console.log(xml)
    },
    download() {
      if (this.jmx) {
        let xml = this.$refs.jmeter.get();
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
