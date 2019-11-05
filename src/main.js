import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import 'vue-awesome/icons'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from './plugins/axios'
import VuePageTransition from 'vue-page-transition'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  fas
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
window.moment = require('moment');
Vue.use(require('vue-moment'));
Vue.use(VuePageTransition);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')