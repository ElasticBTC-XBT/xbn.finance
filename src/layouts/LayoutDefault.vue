<template>
    <fragment>
        <c-header navPosition="right" />
        <main class="site-content">
            <slot />
        </main>
        <c-cta top-divider bottom-divider split/>
        <c-footer class="illustration-section-08 reveal-from-bottom" data-reveal-offset="0" />
    </fragment>
</template>

<script>
import CHeader from '@/components/layout/Header.vue'
import CFooter from '@/components/layout/Footer.vue'
import CCta from "@/components/sections/Cta";
export default {
  components: {
    CHeader,
    CFooter,
    CCta
  }
}
</script>
