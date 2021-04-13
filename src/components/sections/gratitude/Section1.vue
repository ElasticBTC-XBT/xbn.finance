<template>

    <div class="container hero">
        <div
                class="hero-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
            <div
                    class="split-wrap"
                    :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop'
                    ]">
                <div class="split-item">
                    <div class="hero-content split-item-content center-content-mobile">
                        <h1 class="mt-0 mb-16 reveal-from-left">
                            Your gratitude, our gratitude!
                        </h1>
                        <p class="mt-0 mb-24 reveal-from-left" data-reveal-delay="200">
                            <span class="subtitle">
                                Selfie with your parents, love ones, friends... anyone you are thankful for and upload into Twitter with tag #XBNGratitude .
                            </span>
                            <br/>
                            <br/>
                            Make sure helping them download Trust or Safepal wallet and have XBN receivable adress in
                            form of QR Code . We will send them 5 XBN as a way to help you express your gratitude!
                            <br/>
                            <br/>
                        </p>
                        <div class="reveal-from-left">
                            <c-button tag="a" color="primary" wide-mobile href="/buy">
                                {{ $t('home.hero_split.buy_xbt') }}
                            </c-button>
                        </div>
                    </div>
                    <div class="hero-figure is-3d split-item-image illustration-element-01 reveal-scale-up">
                        <c-image
                                id="big-banner-logo"
                                class="has-shadow"
                                :src="require('@/assets/images/banner.png')"
                                alt="Hero image"
                                :width="528"
                                :height="396"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {SectionSplitProps} from '@/utils/SectionProps.js'
    import CButton from '@/components/elements/Button.vue'
    import CImage from '@/components/elements/Image.vue'

    export default {
        name: 'GratitudeSection1',
        components: {
            CButton,
            CImage
        },
        mixins: [SectionSplitProps]
    }
</script>
<style>
    #big-banner-logo {
        box-shadow: none !important;
    }

    .subtitle {
        font-size: 18px;
    }
</style>
