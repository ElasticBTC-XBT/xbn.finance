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
                    <div class="split-item reveal-scale-up">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16">
                                Tokenomics
                            </h3>
                            <p class="m-0">
                              Total Supply: 1 Quadrillion XBC
                              <br/>
                              <br/>

                              90% for the fair launch. We add 90% of token to LP on Pancakeswap and burn LP token
                              <br/>
                              <br/>
                              6% for the XBN holder to swap into XBC at 15% discounted market price
                              <br/>
                              <br/>
                              4% for the foundation: Team only gets 4%

                              <br/>
                              <br/>
                              <a target="_blank" href="https://docs.xbc.xbn.finance/tokenomics/xbc-community-driven-token">Learn more</a>
                            </p>
                        </div>
                        <div
                                class="split-item-image"
                                :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                    :src="require('@/assets/images/elasticbitcoin-Adaptive Supply.svg')"
                                    alt="Features split image 01"
                                    :width="528"
                                    :height="396"/>
                        </div>
                    </div>

<!--                    <div class="split-item reveal-scale-up">-->
<!--                        <div class="split-item-content center-content-mobile">-->
<!--                            <h3 class="mt-0 mb-16">-->
<!--                                {{ $t('home.features_split.title_2') }}-->
<!--                            </h3>-->
<!--                            <p class="m-0">-->
<!--                                {{ $t('home.features_split.desc_2') }}-->
<!--                            </p>-->
<!--                        </div>-->
<!--                        <div-->
<!--                                class="split-item-image"-->
<!--                                :class="imageFill && 'split-item-image-fill'">-->
<!--                            <c-image-->
<!--                                    :src="require('@/assets/images/elasticbitcoin-Risk-diversification.svg')"-->
<!--                                    alt="Features split image 02"-->
<!--                                    :width="528"-->
<!--                                    :height="396"/>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="split-item reveal-scale-up">-->
<!--                        <div class="split-item-content center-content-mobile">-->
<!--                            <h3 class="mt-0 mb-16">-->
<!--                                {{ $t('home.features_split.title_3') }}-->
<!--                            </h3>-->
<!--                            <p class="m-0">-->
<!--                                {{ $t('home.features_split.desc_3') }}-->
<!--                            </p>-->
<!--                        </div>-->
<!--                        <div-->
<!--                                class="split-item-image"-->
<!--                                :class="imageFill && 'split-item-image-fill'">-->
<!--                            <c-image-->
<!--                                    :src="require('@/assets/images/elasticbitcoin-A-trading-instrument.svg')"-->
<!--                                    alt="Features split image 03"-->
<!--                                    :width="528"-->
<!--                                    :height="396"/>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {SectionSplitProps} from '@/utils/SectionProps.js'
    import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
    import CImage from '@/components/elements/Image.vue'

    export default {
        name: 'CFeaturesSplit',
        components: {
            CSectionHeader,
            CImage
        },
        mixins: [SectionSplitProps],
        data() {
            // let v = this
            return {
                sectionHeader: {
                    title: "Fair Tokenomics",
                    paragraph: "For community, by community",
                }
            }
        }
    }
</script>

<style scoped>
    .split-item-image > img {
        box-shadow: none !important;
    }

    @media (max-width: 640px) {
        .features-split .split-wrap.invert-mobile .split-item .split-item-image {
            margin-bottom: 32px;
        }

        .split-item {
            margin-bottom: 32px
        }

        .section-header {
            margin-bottom: 32px
        }
    }

</style>
