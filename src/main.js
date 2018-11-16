import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from 'vue-router';
import {routes} from './routes'

Vue.use(VueRouter);

const router=new VueRouter({routes})

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
