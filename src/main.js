import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VeeValidate from 'vee-validate';

Vue.use(Buefy)

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3001/';

Vue.use(VueRouter);
Vue.use(VeeValidate);

const router = new VueRouter({ routes,mode: 'history' })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
