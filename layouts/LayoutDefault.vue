<template>
    <fragment>
        <c-header navPosition="right" />
        <main class="site-content">
            <slot />
        </main>
        <c-footer class="illustration-section-08 reveal-from-bottom" data-reveal-offset="0" />
    </fragment>
</template>

<script>
import CHeader from '@/components/layout/Header.vue'
import CFooter from '@/components/layout/Footer.vue'
export default {
  components: {
    CHeader,
    CFooter
  }
}
</script>