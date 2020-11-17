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
    <jmx-view :jmx="jmx" v-if="jmx" style="height: calc(100% - 28px)"/>
  </div>
</template>

<script>

import JmxView from "@/jmeter/jmx/main";
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
    create() {
      this.jmx = JMX.create();
    },
    open() {
      document.getElementById("file").click();
    },
    loadFile(e) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        this.jmx = JMX.fromJMX(e.target.result);
      };
      reader.readAsText(file);
    },
    log() {
      let xml = this.jmx.toXML();
      console.log(xml)
    },
    download() {
      if (this.jmx) {
        let xml = this.jmx.toXML();
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
