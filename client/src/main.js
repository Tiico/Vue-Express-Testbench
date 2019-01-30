import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message'
import App from './App.vue'

require('vue-flash-message/dist/vue-flash-message.min.css');

Vue.use(VueFlashMessage);
Vue.use(require('vue-cookies'));


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
