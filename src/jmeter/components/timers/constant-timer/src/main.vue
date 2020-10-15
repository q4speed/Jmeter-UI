<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#Constant_Timer">
    <el-form ref="object" :model="object" label-width="auto" size="mini">
      <el-form-item label="线程延迟(毫秒)" prop="condition">
        <el-input type="number" v-model="object.delay.value" :min="0" :step="1000"/>
      </el-form-item>
    </el-form>
  </component-container>
</template>

<script>
import ComponentContainer from "@/components/ComponentContainer";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import ConstantTimer from "@/jmeter/components/timers/constant-timer";

export default {
  name: "ConstantTimer",
  components: {ComponentFieldSet, ComponentContainer},
  props: {
    object: ConstantTimer
  },
  data() {
    return {
      OP: {
        CLEAR: "CLEAR",
        EQ: "==",
        NE: "!=",
        LIKE: "=~",
        NOT_LIKE: "!~",
        GT: ">",
        LT: "<",
        IS_EMPTY: "is empty",
        IS_NOT_EMPTY: "is not empty"
      }
    }
  },
  methods: {
    selectTemplate(type) {
      let template;
      if (type === this.OP.CLEAR) {
        this.object.condition.value = "";
        return;
      }
      switch (type) {
        case this.OP.LIKE:
          template = "\"${变量名} =~ \".*值.*\"";
          break;
        case this.OP.NOT_LIKE:
          template = "\"${变量名} !~ \".*值.*\"";
          break;
        case this.OP.IS_EMPTY:
          template = "empty(\"${变量名}\")"
          break;
        case this.OP.IS_NOT_EMPTY:
          template = "!empty(\"${变量名}\")"
          break;
        default:
          template = "\"${变量名} " + type + " \"值\"";
          break;
      }
      this.object.condition.value = "${__jexl3(" + template + ")";
    }
  }
}
</script>

<style scoped>
.condition-info {
  font-size: 12px;
  color: #696969;
  margin-top: -8px;
  margin-bottom: 10px;
}
</style>
