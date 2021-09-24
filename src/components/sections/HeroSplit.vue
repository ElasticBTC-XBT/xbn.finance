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
                            {{ $t('home.hero_split.title_1') }}
                        </h1>
                        <p class="mt-0 mb-24 reveal-from-left" data-reveal-delay="200">
                            <span class="subtitle">{{ $t('home.hero_split.desc_1') }}</span>
                            <br/>
                            <br/>
                            {{ $t('home.hero_split.desc_2') }}
                            <br/>
                            <br/>
                            {{ $t('home.hero_split.desc_3') }}
                        </p>
                        <div class="reveal-from-left">
                            <router-link class="button button-primary button-wide-mobile" to="/airdrop">Get Airdrop</router-link>


                            <br/>
                            <br/>
                            <router-link class="button button-primary button-wide-mobile" to="/xbn/sales">
                                {{ $t('home.hero_split.buy_xbt') }}
                            </router-link>

                             
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
    // import CButton from '@/components/elements/Button.vue'
    import CImage from '@/components/elements/Image.vue'

    export default {
        name: 'CHeroSplit',
        components: {
            // CButton,
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
