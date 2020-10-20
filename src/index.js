import locale from "@/locale"

const components = require.context('@/jmeter/components/', true, /main\.vue$/);

const install = function (Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.keys().map(key => {
    let component = components(key).default;
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
