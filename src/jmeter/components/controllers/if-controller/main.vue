<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#If_Controller">
    <component-field-set>
      <template v-slot:legend>
        <legend class="title">
          <el-row type="flex" align="middle">
            <div>{{ t('wm.controllers.if.expression') }}</div>
            <icon-tooltip :content="t('wm.controllers.if.expressionDesc')"/>
          </el-row>
        </legend>
      </template>
      <el-input type="textarea" v-model="object.condition.value" :autosize="{minRows: 4, maxRows: 8}"/>
    </component-field-set>

    <component-field-set :title="t('wm.controllers.if.template')">
      <el-row type="flex" justify="center">
        <el-button size="mini" @click="selectTemplate(OP.EQ)">{{ t('wm.controllers.if.eq') }}</el-button>
        <el-button size="mini" @click="selectTemplate(OP.NE)">{{ t('wm.controllers.if.ne') }}</el-button>
        <el-button size="mini" @click="selectTemplate(OP.GT)">{{ t('wm.controllers.if.gt') }}</el-button>
        <el-button size="mini" @click="selectTemplate(OP.LT)">{{ t('wm.controllers.if.lt') }}</el-button>
        <el-button size="mini" @click="selectTemplate(OP.LIKE)">{{ t('wm.controllers.if.like') }}</el-button>
        <el-button size="mini" @click="selectTemplate(OP.NOT_LIKE)">
          {{ t('wm.controllers.if.notLike') }}
        </el-button>
        <el-button size="mini" @click="selectTemplate(OP.IS_EMPTY)">
          {{ t('wm.controllers.if.empty') }}
        </el-button>
        <el-button size="mini" @click="selectTemplate(OP.IS_NOT_EMPTY)">
          {{ t('wm.controllers.if.notEmpty') }}
        </el-button>
        <el-button size="mini" @click="selectTemplate(OP.CLEAR)">{{ t('wm.commons.clear') }}</el-button>
      </el-row>
    </component-field-set>

    <el-form-item label-width="0" prop="useExpression">
      <el-checkbox v-model="object.useExpression.value">
        {{ t('wm.controllers.if.useExpression') }}
      </el-checkbox>
    </el-form-item>
    <el-form-item label-width="0" prop="evaluateAll">
      <el-checkbox v-model="object.evaluateAll.value">
        {{ t('wm.controllers.if.evaluateAll') }}
      </el-checkbox>
    </el-form-item>
  </component-container>
</template>

<script>
import ComponentContainer from "@/components/ComponentContainer";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import IfController from "@/jmeter/components/controllers/if-controller/index";
import Locale from "@/mixins/locale";
import IconTooltip from "@/components/IconTooltip";

export default {
  name: "IfController",
  components: {IconTooltip, ComponentFieldSet, ComponentContainer},
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
}
</style>
