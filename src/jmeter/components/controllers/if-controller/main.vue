<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#If_Controller">
    <el-form ref="object" :model="object" size="mini">
      <el-form-item label="表达式" prop="condition">
        <el-input type="textarea" v-model="object.condition.value" :autosize="{minRows: 4, maxRows: 8}"/>
      </el-form-item>
      <div class="condition-info">表达式的结果必须为true或false</div>

      <component-field-set title="表达式模板">
        <el-row type="flex" justify="center">
          <el-button size="mini" @click="selectTemplate(OP.EQ)">等于</el-button>
          <el-button size="mini" @click="selectTemplate(OP.NE)">不等于</el-button>
          <el-button size="mini" @click="selectTemplate(OP.GT)">大于</el-button>
          <el-button size="mini" @click="selectTemplate(OP.LT)">小于</el-button>
          <el-button size="mini" @click="selectTemplate(OP.LIKE)">包含</el-button>
          <el-button size="mini" @click="selectTemplate(OP.NOT_LIKE)">不包含</el-button>
          <el-button size="mini" @click="selectTemplate(OP.IS_EMPTY)">空</el-button>
          <el-button size="mini" @click="selectTemplate(OP.IS_NOT_EMPTY)">非空</el-button>
          <el-button size="mini" @click="selectTemplate(OP.CLEAR)">清空</el-button>
        </el-row>
      </component-field-set>

      <el-form-item label-width="0" prop="useExpression">
        <el-checkbox v-model="object.useExpression.value">将条件解释为变量表达式？</el-checkbox>
      </el-form-item>
      <el-form-item label-width="0" prop="evaluateAll">
        <el-checkbox v-model="object.evaluateAll.value">对所有孩子生效</el-checkbox>
      </el-form-item>
    </el-form>
  </component-container>
</template>

<script>
import ComponentContainer from "@/components/ComponentContainer";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import IfController from "@/jmeter/components/controllers/if-controller/index";

export default {
  name: "IfController",
  components: {ComponentFieldSet, ComponentContainer},
  props: {
    object: IfController
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
