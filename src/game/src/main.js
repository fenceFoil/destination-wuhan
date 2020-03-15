import Vue from 'vue'
import App from './App.vue'
import store from './store'
import drag from '@branu-jp/v-drag'

Vue.config.productionTip = false

new Vue({
  directives: {
    drag
  },
  store,
  render: h => h(App)
}).$mount('#app')
