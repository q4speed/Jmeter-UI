<template>
  <jmx :jmx="jmx" v-if="jmx"/>
</template>

<script>
import Jmx from "@/jmeter/jmx/main";
import JMX from "@/jmeter/jmx";

export default {
  name: "JmeterView",
  components: {Jmx},
  props: {
    xml: String
  },
  data() {
    return {
      jmx: this.xml ? JMX.fromJMX(this.xml) : undefined
    }
  },
  methods: {
    create() {
      this.jmx = JMX.create();
    },
    edit(jmx) {
      this.jmx = JMX.fromJMX(jmx);
    },
    get() {
      if (this.jmx) {
        return this.jmx.toXML();
      }
    }
  },
}
</script>

<style scoped>

</style>
