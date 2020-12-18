import Vue from 'vue';

import Fragment from 'vue-fragment';

Vue.use(Fragment.Plugin);

import Vue2TouchEvents from 'vue2-touch-events';

Vue.use(Vue2TouchEvents);

import App from './App.vue';
import router from './router';
import VueI18n from 'vue-i18n'

import vnMessage from './lang/vi.json'
import enMessage from './lang/en.json'


import '@/assets/scss/style.scss';

Vue.config.productionTip = false;
require('./assets/js/countdown.min');
import './assets/scss/countdown.css';

import vuetimeline from './assets/js/vuetimeline.esm';
//
// import vuetimeline from "@growthbunker/vuetimeline"
Vue.use(vuetimeline)

Vue.use(VueI18n)

const messages = {
    vi: vnMessage,
    en: enMessage,
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages,
    fallbackLocale: 'en',
})

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
