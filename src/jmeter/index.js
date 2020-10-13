const components = require.context('@/jmeter/components/', true, /main\.vue$/);

export default {
  name: "JmeterUI",
  install(Vue) {
    components.keys().map(key => {
      let component = components(key).default;
      Vue.component(component.name, component);
    })
  }
}
