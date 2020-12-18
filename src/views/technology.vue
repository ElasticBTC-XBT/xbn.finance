<template>
    <div>


        <section
                class="signin section illustration-section-01"
                :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
            <div class="container">
                <div
                        class="signin-inner section-inner"
                        :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                    <c-section-header :data="sectionHeader" class="center-content">

                    </c-section-header>

                    <c-generic-section top-divider>
                        <div class="container-xs">

                            <h4>{{ $t('technology.title_1') }}</h4>

                            <p> {{ $t('technology.desc_1') }}<br/>

                            <p>
                                {{ $t('technology.desc_1_5') }}
                            </p>
                            <p>
                                {{ $t('technology.desc_2') }}

                            </p>

                            <p>
                                {{ $t('technology.desc_3') }}
                            </p>
                        </div>
                    </c-generic-section>

                    <c-generic-section top-divider>
                        <div class="container-xs">
                            <h4> {{ $t('technology.title_2') }}</h4>
                            <p>
                                {{ $t('technology.desc_4') }}
                            </p>
                            <figure>
                                <c-image
                                        class="image-larger"
                                        src="https://assets.fragments.org/images/ampl/technology_flow_4.jpg"
                                        alt="Image placeholder"
                                        :width="712"
                                        :height="400"/>
                            </figure>
                        </div>
                    </c-generic-section>

                    <c-generic-section top-divider>
                        <div class="container-xs">
                            <h4>{{ $t('technology.title_3') }}</h4>
                            <c-accordion>
                                <c-accordion-item v-for="(faq, index) in faqData" :key="index" :title="`${faq.title}?`"
                                                  :active="index===0">
                                    {{ faq.description }}
                                </c-accordion-item>
                            </c-accordion>
                        </div>
                    </c-generic-section>

                    <c-generic-section top-divider>
                        <div class="center-content">
                            <div class="button-group">
                                <c-button tag="a" color="primary" wide-mobile href="/basics">
                                    {{ $t('basic_split.learn_basic')}}
                                </c-button>
                                <c-button tag="a" color="primary" wide-mobile href="/economics">
                                    {{ $t('basic_split.learn_economics')}}
                                </c-button>
                            </div>
                        </div>
                    </c-generic-section>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    // import layout
    import CLayout from '@/layouts/LayoutDefault.vue'
    // import sections
    import {SectionProps} from '@/utils/SectionProps.js'
    import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
    import CImage from '@/components/elements/Image.vue'

    import CAccordion from '@/components/elements/Accordion.vue'
    import CAccordionItem from '@/components/elements/AccordionItem.vue'
    import CButton from '@/components/elements/Button.vue'
    import CGenericSection from '@/components/sections/GenericSection.vue'

    export default {
        name: 'Login',
        components: {
            CImage,
            CAccordion,
            CAccordionItem,
            CGenericSection,
            CSectionHeader,
            CButton
        },
        mixins: [SectionProps],
        created() {
            this.$emit('update:layout', CLayout)
        },
        data() {
            let v = this
            return {
                sectionHeader: {
                    title: v.$t('technology.section_header.title'),
                    paragraph: v.$t('technology.section_header.paragraph'),
                },
                faqData: [
                    {
                        "title": v.$t('technology.faq_data.item_1.title'),
                        "description": v.$t('technology.faq_data.item_1.description')
                    }, {
                        "title": v.$t('technology.faq_data.item_2.title'),
                        "description": v.$t('technology.faq_data.item_2.description')
                    }, {
                        "title": v.$t('technology.faq_data.item_3.title'),
                        "description": v.$t('technology.faq_data.item_3.description')
                    }, {
                        "title": v.$t('technology.faq_data.item_4.title'),
                        "description": v.$t('technology.faq_data.item_4.description')
                    }, {
                        "title": v.$t('technology.faq_data.item_5.title'),
                        "description": v.$t('technology.faq_data.item_5.description')
                    }, {
                        "title": v.$t('technology.faq_data.item_6.title'),
                        "description": v.$t('technology.faq_data.item_6.description')
                    }, {
                        "title": v.$t('technology.faq_data.item_7.title'),
                        "description": v.$t('technology.faq_data.item_7.description')
                    }, {
                        "title": v.$t('technology.faq_data.item_8.title'),
                        "description": v.$t('technology.faq_data.item_8.description')
                    }
                ]
            }
        }
    }
</script>
