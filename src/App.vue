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
        methods: {},
        mounted() {
          loadCacheWeb3Client();

          document.body.classList.add('is-loaded')
        }
    }
</script>
