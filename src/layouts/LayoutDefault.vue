<template>
  <fragment>
    <c-header navPosition="right">
      <main class="site-content">
        <slot />

        <c-cta bottom-divider split />
        <c-footer
          class="illustration-section-08 reveal-from-bottom"
          data-reveal-offset="0"
        />
      </main>
    </c-header>
  </fragment>
</template>

<script>
import CHeader from "@/components/layout/HeaderLeft.vue";
import CFooter from "@/components/layout/Footer.vue";
import CCta from "@/components/sections/Cta";
export default {
  components: {
    CHeader,
    CFooter,
    CCta,
  },
};
</script>
