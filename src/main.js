import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import splitPane from 'vue-splitpane'
console.log(splitPane)
import JMeterUI from "@/index"

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(JMeterUI);
Vue.component('split-pane', splitPane);
new Vue({
  render: h => h(App),
}).$mount('#app')
