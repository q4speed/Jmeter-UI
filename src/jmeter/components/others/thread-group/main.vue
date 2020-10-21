<template>
  <component-container :object="object"
                       help-url="https://jmeter.apache.org/usermanual/component_reference.html#Thread_Group">
    <el-form ref="object" :model="object" label-width="140px" label-position="left" size="mini">
      <component-field-set :title="t('wm.others.thread_group.on_sample_error')">
        <el-radio-group v-model="object.onSampleError.value">
          <el-radio label="continue">{{ t('wm.others.thread_group.continue') }}</el-radio>
          <el-radio label="startnextloop">{{ t('wm.others.thread_group.next_loop') }}</el-radio>
          <el-radio label="stopthread">{{ t('wm.others.thread_group.stop_thread') }}</el-radio>
          <el-radio label="stoptest">{{ t('wm.others.thread_group.stop_test') }}</el-radio>
          <el-radio label="stoptestnow">{{ t('wm.others.thread_group.stop_test_now') }}</el-radio>
        </el-radio-group>
      </component-field-set>

      <component-field-set :title="t('wm.others.thread_group.thread')">
        <el-form-item :label="t('wm.others.thread_group.num_threads')" prop="numThreads">
          <el-input type="number" v-model="object.numThreads.value"></el-input>
        </el-form-item>
        <el-form-item :label="t('wm.others.thread_group.ramp_time')" prop="rampTime">
          <el-input type="number" v-model="object.rampTime.value"></el-input>
        </el-form-item>

        <el-form-item :label="t('wm.others.thread_group.loops')" prop="loops">
          <el-input type="number" v-model="object.loops.value" :disabled="object.continueForever.value">
            <template slot="prepend">
              <el-checkbox v-model="object.continueForever.value" @change="changeContinueForever">
                {{ t('wm.others.thread_group.forever') }}
              </el-checkbox>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item label-width="0" prop="sameUserOnNextIteration">
          <el-checkbox v-model="object.sameUserOnNextIteration.value">
            {{ t('wm.others.thread_group.iteration') }}
          </el-checkbox>
        </el-form-item>
        <el-form-item label-width="0" prop="delayedStart">
          <el-checkbox v-model="object.delayedStart.value">
            {{ t('wm.others.thread_group.delayed_start') }}
          </el-checkbox>
        </el-form-item>
        <el-form-item label-width="0" prop="scheduler">
          <el-checkbox v-model="object.scheduler.value" @change="changeScheduler">
            {{ t('wm.others.thread_group.scheduler') }}
          </el-checkbox>
        </el-form-item>
        <el-form-item :label="t('wm.others.thread_group.duration')" prop="duration">
          <el-input type="number" v-model="object.duration.value" :disabled="!object.scheduler.value"></el-input>
        </el-form-item>
        <el-form-item :label="t('wm.others.thread_group.delay')" prop="delay">
          <el-input type="number" v-model="object.delay.value" :disabled="!object.scheduler.value"></el-input>
        </el-form-item>
      </component-field-set>
    </el-form>
  </component-container>
</template>

<script>
import ComponentContainer from "@/components/ComponentContainer";
import ComponentFieldSet from "@/components/ComponentFieldSet";
import ThreadGroup from "@/jmeter/components/others/thread-group/index";
import Locale from "@/mixins/locale";

export default {
  name: "ThreadGroup",
  components: {ComponentFieldSet, ComponentContainer},
  mixins: [Locale],
  props: {
    object: ThreadGroup
  },
  methods: {
    changeContinueForever(value) {
      if (value === true) {
        if (this.object.loops.value !== undefined) {
          this.object.loops.value = undefined;
        }
      }
    },
    changeScheduler(value) {
      if (value === false) {
        this.object.duration.value = 0;
        this.object.delay.value = 0
      }
    }
  }
}
</script>

<style scoped>

</style>
