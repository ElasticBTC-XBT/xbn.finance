<template>
    <fragment>
        <c-header navPosition="right" hide-nav />
        <main class="site-content">
            <slot />
        </main>
    </fragment>
</template>

<script>
import CHeader from '@/components/layout/Header.vue'
export default {
  components: {
    CHeader
  }
}
</script>