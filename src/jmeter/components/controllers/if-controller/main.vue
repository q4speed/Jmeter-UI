<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#If_Controller">
    <el-form ref="object" :model="object" size="mini">
      <el-form-item :label="t('wm.Controller.IfController.expression')" prop="condition">
        <el-input type="textarea" v-model="object.condition.value" :autosize="{minRows: 4, maxRows: 8}"/>
      </el-form-item>
      <div class="condition-info">{{ t('wm.Controller.IfController.expressionDesc') }}</div>

      <component-field-set :title="t('wm.Controller.IfController.template')">
        <el-row type="flex" justify="center">
          <el-button size="mini" @click="selectTemplate(OP.EQ)">{{ t('wm.Controller.IfController.eq') }}</el-button>
          <el-button size="mini" @click="selectTemplate(OP.NE)">{{ t('wm.Controller.IfController.ne') }}</el-button>
          <el-button size="mini" @click="selectTemplate(OP.GT)">{{ t('wm.Controller.IfController.gt') }}</el-button>
          <el-button size="mini" @click="selectTemplate(OP.LT)">{{ t('wm.Controller.IfController.lt') }}</el-button>
          <el-button size="mini" @click="selectTemplate(OP.LIKE)">{{ t('wm.Controller.IfController.like') }}</el-button>
          <el-button size="mini" @click="selectTemplate(OP.NOT_LIKE)">
            {{ t('wm.Controller.IfController.notLike') }}
          </el-button>
          <el-button size="mini" @click="selectTemplate(OP.IS_EMPTY)">
            {{ t('wm.Controller.IfController.empty') }}
          </el-button>
          <el-button size="mini" @click="selectTemplate(OP.IS_NOT_EMPTY)">
            {{ t('wm.Controller.IfController.notEmpty') }}
          </el-button>
          <el-button size="mini" @click="selectTemplate(OP.CLEAR)">{{ t('wm.commons.clear') }}</el-button>
        </el-row>
      </component-field-set>

      <el-form-item label-width="0" prop="useExpression">
        <el-checkbox v-model="object.useExpression.value">
          {{ t('wm.Controller.IfController.useExpression') }}
        </el-checkbox>
      </el-form-item>
      <el-form-item label-width="0" prop="evaluateAll">
        <el-checkbox v-model="object.evaluateAll.value">
          {{ t('wm.Controller.IfController.evaluateAll') }}
        </el-checkbox>
      </el-form-item>
    </el-form>
  </component-container>
</template>

<script>
import ComponentContainer from "@/components/ComponentContainer";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import IfController from "@/jmeter/components/controllers/if-controller/index";
import Locale from "@/mixins/locale";

export default {
  name: "IfController",
  components: {ComponentFieldSet, ComponentContainer},
  mixins: [Locale],
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
      let name = this.t('wm.Timer.ConstantTimer.name');
      let value = this.t('wm.Timer.ConstantTimer.value');
      switch (type) {
        case this.OP.LIKE:
          template = "\"${" + name + "} =~ \".*" + value + ".*\"";
          break;
        case this.OP.NOT_LIKE:
          template = "\"${" + name + "} !~ \".*" + value + ".*\"";
          break;
        case this.OP.IS_EMPTY:
          template = "empty(\"${" + name + "}\")"
          break;
        case this.OP.IS_NOT_EMPTY:
          template = "!empty(\"${" + name + "}\")"
          break;
        default:
          template = "\"${" + name + "} " + type + " \"" + value + "\"";
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
