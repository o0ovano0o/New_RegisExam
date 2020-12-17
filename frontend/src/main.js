import Vue from 'vue'
import App from './App.vue'
import routes from './router/index'
// import store from "./store/index";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Toasted from 'vue-toasted';







import VueCookies from 'vue-cookies'
Vue.use(VueCookies)


Vue.use(Toasted)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router: routes,
  render: h => h(App),
}).$mount('#app')
