import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Chart from "chart.js";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Charts
// Vue.use(Chart);
// Install BootstrapVue
Vue.use(BootstrapVue)
// The BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
