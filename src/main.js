import Vue from 'vue';

import Fragment from 'vue-fragment';
Vue.use(Fragment.Plugin);

import Vue2TouchEvents from 'vue2-touch-events';
Vue.use(Vue2TouchEvents);

import App from './App.vue';
import router from './router';

import '@/assets/scss/style.scss';

Vue.config.productionTip = false;
require('./assets/js/countdown.min');
import './assets/scss/countdown.css';

import vuetimeline from './assets/js/vuetimeline.esm';
//
// import vuetimeline from "@growthbunker/vuetimeline"
Vue.use(vuetimeline)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
