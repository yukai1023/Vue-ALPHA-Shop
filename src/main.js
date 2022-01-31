import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSwal from 'vue-swal'
import './scss/styles.scss'
Vue.use(VueSwal)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
