import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use( axios)
new Vue({
  store,axios,VueAxios,
  vuetify,
  render: h => h(App)
}).$mount('#app')
