<template>
    <section
            class="features-split section"
            :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                    class="features-split-inner section-inner"
                    :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content"/>
                <div
                        class="split-wrap"
                        :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop'
                    ]">
                    <div v-for="(item, index) in sectionContents" :key="index" class="split-item reveal-scale-up">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16">
                                {{ item.title }}
                            </h3>
                            <p class="m-0">
                                {{ item.description }}
                            </p>
                        </div>
                        <div
                                class="split-item-image illustration-element-03"
                                :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                    :src="item.image"
                                    alt="Features split image 01"
                                    :width="528"
                                    :height="396"/>
                        </div>
                    </div>

                    <c-generic-section top-divider>
                        <div class="center-content">
                            <div class="button-group">
                                <c-button tag="a" color="primary" wide-mobile href="/technology">
                                    {{ $t('basic_split.learn_technology')}}
                                </c-button>
                                <c-button tag="a" color="primary" wide-mobile href="/economics">
                                    {{ $t('basic_split.learn_economics')}}
                                </c-button>
                            </div>
                        </div>
                    </c-generic-section>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {SectionSplitProps} from '@/utils/SectionProps.js'
    import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
    import CImage from '@/components/elements/Image.vue'

    import CButton from '@/components/elements/Button.vue'
    import CGenericSection from '@/components/sections/GenericSection.vue'

    export default {
        name: 'CFeaturesSplit',
        components: {
            CSectionHeader,
            CImage,
            CButton,
            CGenericSection
        },
        mixins: [SectionSplitProps],
        data() {
            let v = this
            return {
                sectionHeader: {
                    title: v.$t('basic_split.section_header.title'),
                    paragraph: v.$t('basic_split.section_header.paragraph'),
                },
                sectionContents: [
                    {
                        image: require('@/assets/images/basic-learn-icon-01.svg'),
                        title: v.$t('basic_split.section_contents.item_1.title'),
                        description: v.$t('basic_split.section_contents.item_1.description'),
                    },
                    {
                        image: require('@/assets/images/basic-learn-icon-02.svg'),
                        title: v.$t('basic_split.section_contents.item_2.title'),
                        description: v.$t('basic_split.section_contents.item_2.description'),

                    },
                    {
                        image: require('@/assets/images/basic-learn-icon-03.svg'),
                        title: v.$t('basic_split.section_contents.item_3.title'),
                        description: v.$t('basic_split.section_contents.item_3.description'),
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .split-item-image > img {
        box-shadow: none !important;
    }
</style>
