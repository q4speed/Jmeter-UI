import locale from "@/locale"
import Setting from "@/jmeter/setting"
import splitPane from 'vue-splitpane'
import JmxView from "@/jmeter/jmx/main";

const components = require.context('@/jmeter/components/', true, /main\.vue$/);

const install = function (Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  Setting.use(opts.setting)

  Vue.component('jmx-view', JmxView);
  Vue.component('split-pane', splitPane);
  components.keys().forEach(key => {
    let component = components(key).default;
    // 允许外部自定义组件
    if (opts.components) {
      let oc = opts.components.find(c => {
        return c.name === component.name;
      })
      component = oc ? oc : component;
    }
    Vue.component(component.name, component);
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  name: "WebMeter",
  version: '1.1.0',
  locale: locale.use,
  i18n: locale.i18n,
  install
}
