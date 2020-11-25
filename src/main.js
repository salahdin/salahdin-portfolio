import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSilentbox from 'vue-silentbox'



Vue.config.productionTip = false
Vue.use(VueSilentbox)


import '@/assets/css/showcase.css';


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
