import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from 'vue-router';
import {routes} from './routes'
import {store} from './store.js';
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root='https://stocktraderapp-767c7.firebaseio.com/';
Vue.use(VueRouter);

const router=new VueRouter({routes})


Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  store:store,
  render: h => h(App)
})
