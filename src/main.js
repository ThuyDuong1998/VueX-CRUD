import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './validate'
import { ValidationProvider, ValidationObserver } from 'vee-validate';

Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
