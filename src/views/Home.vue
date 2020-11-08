<template>
    <fragment>
        <c-hero-split image-fill class="illustration-section-01" />
        <c-features-tiles />
        <c-features-split invert-mobile image-fill class="illustration-section-05" />
        <c-pricing pricing-switcher class="illustration-section-03" />
        <c-cta top-divider bottom-divider split />
    </fragment>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutDefault.vue'
// import sections
import CHeroSplit from '@/components/sections/HeroSplit.vue'
import CFeaturesSplit from '@/components/sections/FeaturesSplit.vue'
import CFeaturesTiles from '@/components/sections/FeaturesTiles.vue'
import CPricing from '@/components/sections/Pricing.vue'
import CCta from '@/components/sections/Cta.vue'

export default {
  name: 'Home',
  components: {
    CHeroSplit,
    CFeaturesSplit,
    CFeaturesTiles,
    CPricing,
    CCta
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
