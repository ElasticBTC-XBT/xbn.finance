import Vue from 'vue';

import Fragment from 'vue-fragment';
import VueI18n from 'vue-i18n'

Vue.use(Fragment.Plugin);

import Vue2TouchEvents from 'vue2-touch-events';

Vue.use(Vue2TouchEvents);

import VueSweetalert2 from "vue-sweetalert2";
Vue.use(VueSweetalert2);

import App from './App.vue';
import router from './router';

import vnMessage from './lang/vi.json'
import enMessage from './lang/en.json'
import krMessage from './lang/kr.json'


import '@/assets/scss/style.scss';

Vue.config.productionTip = false;
require('./assets/js/countdown.min');
import './assets/scss/countdown.css';

import vuetimeline from './assets/js/vuetimeline.esm';
//
// import vuetimeline from "@growthbunker/vuetimeline"
Vue.use(vuetimeline)

Vue.use(VueI18n)

import SweetModal from 'sweet-modal-vue/src/plugin.js';
Vue.use(SweetModal);

import 'element-ui/lib/theme-chalk/index.css';

import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)
Vue.use(ElementUI);

const messages = {
    vi: vnMessage,
    en: enMessage,
    kr: krMessage
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages,
    fallbackLocale: 'en',
})


router.beforeEach((to, from, next) => {
    const hasLang = to.params && to.params.lang;
    const hadLang = from.params && from.params.lang;

    // If the language hasn't changed since last route we're done
    if (hasLang && hadLang && from.params.lang.toLowerCase() === to.params.lang.toLowerCase()) {
        next();
    }

    // Get the save language if it exists
    // let lang = localStorage.getItem('lang_elastic') ? localStorage.getItem('lang_elastic').toLowerCase() : 'en';
    let lang = localStorage.lang ? localStorage.lang.toLowerCase() : 'en';

    // Overwrite the language with the route if there is one
    if (hasLang) {
        lang = to.params.lang.toLowerCase();
    }

    // Make sure the language is valid
    if (!['vi', 'kr'].includes(lang)) {
        lang = 'en';
    }

    // Set the website language based on the URL
    i18n.locale = lang;
    localStorage.lang = lang;

    // Redirect to a url with the language
    if (!hasLang) {
        if (lang !== 'en') return next(`/${lang}${to.fullPath}`);
        else return next();
    }

    return next();
});

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
