<template>
  <component :is="layout">
    <router-view :layout.sync="layout"/>
  </component>
</template>

<script>
import {ScrollReveal} from '@/utils/ScrollReveal.js'
import {loadCacheWeb3Client} from "@/libs/web3";


export default {
  name: 'App',
  mixins: [ScrollReveal],
  data() {
    return {
      layout: 'div'
    }
  },
  methods: {
    getLangFromURL() {
      let url_string = window.location.href
      let url = new URL(url_string);
      let lang = url.searchParams.get("lang");
      return lang
    },
    setLang(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('lang_elastic', lang)
    }
  },
  mounted() {
    loadCacheWeb3Client();
    document.body.classList.add('is-loaded')

    if (this.getLangFromURL()) {
      this.setLang(this.getLangFromURL())
    } else {
      let lang_local_storage = localStorage.getItem('lang_elastic')
      if (!lang_local_storage) {
        this.setLang('en')
      } else {
        this.setLang(lang_local_storage)
      }
    }
  }
}
</script>
