<template>
    <fragment>
        <c-hero-split image-fill class="illustration-section-01"/>
        <c-features-tiles/>
        <c-testimonial class="illustration-section-03"/>
        <c-features-split invert-mobile image-fill class="illustration-section-05"/>
        <c-generic-section top-divider>
            <div class="container-xs">
                <c-section-header class="center-content"/>
                <c-accordion>
                    <c-accordion-item v-for="(faq, index) in faqData" :key="index" :title="`${faq.title}?`"
                                      :active="index===0">
                        <span v-html="faq.answer"></span>

                    </c-accordion-item>
                </c-accordion>
            </div>
        </c-generic-section>
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
    import CGenericSection from '@/components/sections/GenericSection.vue'
    import CAccordion from '@/components/elements/Accordion.vue'
    import CAccordionItem from '@/components/elements/AccordionItem.vue'
    import CTestimonial from '@/components/sections/Testimonial.vue'
    import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'

    export default {
        name: 'Home',
        components: {
            CHeroSplit,
            CFeaturesSplit,
            CFeaturesTiles,
            // CPricing,
            CSectionHeader,
            CGenericSection,
            CAccordion,
            CAccordionItem,
            CTestimonial,
        },
        data() {
            let v = this
            return {
                faqData: [
                    {
                        "title": v.$t('home.faq_data.item_1.title'),
                        "answer": v.$t('home.faq_data.item_1.answer')
                    },
                    // {
                    //   "title": "Who is the team/devs",
                    //   "answer": "The team is anonymous, but a short introduction of every member is available on the website"
                    // },
                    {
                        "title": v.$t('home.faq_data.item_2.title'),
                        "answer": v.$t('home.faq_data.item_2.answer')
                    }, {
                        "title": v.$t('home.faq_data.item_3.title'),
                        "answer": v.$t('home.faq_data.item_3.answer')
                    }, {
                        "title": v.$t('home.faq_data.item_4.title'),
                        "answer": v.$t('home.faq_data.item_4.answer')
                    }, {
                        "title": v.$t('home.faq_data.item_5.title'),
                        "answer": v.$t('home.faq_data.item_5.answer')
                    }, {
                        "title": v.$t('home.faq_data.item_8.title'),
                        "answer": v.$t('home.faq_data.item_8.answer')
                    }, {
                        "title": v.$t('home.faq_data.item_9.title'),
                        "answer": v.$t('home.faq_data.item_9.answer')
                    }, {
                        "title": v.$t('home.faq_data.item_10.title'),
                        "answer": v.$t('home.faq_data.item_10.answer')
                    }, {
                        "title": v.$t('home.faq_data.item_11.title'),
                        "answer": v.$t('home.faq_data.item_11.answer')
                    }, {
                        "title": v.$t('home.faq_data.item_12.title'),
                        "answer": v.$t('home.faq_data.item_12.answer')

                    }, {
                        "title": v.$t('home.faq_data.item_13.title'),
                        "answer": v.$t('home.faq_data.item_13.answer')
                    }
                ]
            }
        },
        created() {
            this.$emit('update:layout', CLayout)
        }
    }
</script>
