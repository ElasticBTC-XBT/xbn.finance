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
                <c-section-header :data="sectionHeader" class="center-content" />
                <div
                    class="split-wrap"
                    :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop'
                    ]">
                    <div class="split-item reveal-scale-up">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16">
                                Adaptive Supply
                            </h3>
                            <p class="m-0">
                                The number of XBT you own change everyday so that the price of XBT will reach BTC price in 100 days. Your percent ownership of the XBT network remains fixed no matter how supply changes.
                            </p>
                        </div>
                        <div
                            class="split-item-image is-3d illustration-element-03"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                :src="require('@/assets/images/features-split-image-01.svg')"
                                alt="Features split image 01"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>

                    <div class="split-item reveal-scale-up">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16">
                                Risk diversification
                            </h3>
                            <p class="m-0">
                                This reduce risk of correlation of Altcoins (such as ETH, LINK...) and Bitcoin in your porfolio because their is 30 days lag between XBT's and BTC's prices.
                            </p>
                        </div>
                        <div
                            class="split-item-image is-3d illustration-element-04"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                :src="require('@/assets/images/features-split-image-02.svg')"
                                alt="Features split image 02"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>

                    <div class="split-item reveal-scale-up">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16">
                                A trading instrument
                            </h3>
                            <p class="m-0">
                                As a trading instrument, XBT has many advantages, own XBT you can catch the hype of Bitcoin's price growth, but also reduce the risk when Bitcoin takes quick dive because of lag factor.
                            </p>
                        </div>
                        <div
                            class="split-item-image is-3d illustration-element-05"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                :src="require('@/assets/images/features-split-image-03.svg')"
                                alt="Features split image 03"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionSplitProps } from '@/utils/SectionProps.js'
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
    return {
      sectionHeader: {
        title: 'Learn about XBT',
        paragraph:
          'XBT is a cryptocurrency like Bitcoin which runs on Ethereum network, its price target of Bitcoin and its supply change daily'
      }
    }
  }
}
</script>
