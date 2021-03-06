import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'

Vue.use(require('vue-moment'))
Vue.config.productionTip = false
Vue.use(require('vue-moment'))

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
