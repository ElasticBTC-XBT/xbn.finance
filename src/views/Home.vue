<template>
    <fragment>
        <c-hero-split image-fill class="illustration-section-01" />
        <c-features-tiles />
        <c-testimonial class="illustration-section-03" />
        <c-features-split invert-mobile image-fill class="illustration-section-05" />
<!--        <c-pricing pricing-switcher class="illustration-section-03" />-->
        <c-generic-section top-divider>
            <div class="container-xs">
                <c-section-header :data="genericSection04Header" class="center-content" />
                <c-accordion>
                    <c-accordion-item title="Nisi porta lorem mollis aliquam ut." active>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </c-accordion-item>
                    <c-accordion-item title="Nisi porta lorem mollis aliquam ut.">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </c-accordion-item>
                    <c-accordion-item title="Nisi porta lorem mollis aliquam ut.">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </c-accordion-item>
                    <c-accordion-item title="Nisi porta lorem mollis aliquam ut.">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </c-accordion-item>
                    <c-accordion-item title="Nisi porta lorem mollis aliquam ut.">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </c-accordion-item>
                </c-accordion>
            </div>
        </c-generic-section>
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
// import CPricing from '@/components/sections/Pricing.vue'
import CCta from '@/components/sections/Cta.vue'
import CGenericSection from '@/components/sections/GenericSection.vue'
import CAccordion from '@/components/elements/Accordion.vue'
import CAccordionItem from '@/components/elements/AccordionItem.vue'
import CTestimonial from '@/components/sections/Testimonial.vue'
export default {
  name: 'Home',
  components: {
    CHeroSplit,
    CFeaturesSplit,
    CFeaturesTiles,
    // CPricing,
      CGenericSection,
      CAccordion,
      CAccordionItem,
      CTestimonial,
    CCta
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
