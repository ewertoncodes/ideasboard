import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3001/';


Vue.use(VueRouter);
const router = new VueRouter({ routes,mode: 'history' })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
