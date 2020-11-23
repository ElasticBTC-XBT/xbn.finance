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
                class="split-item-image is-3d illustration-element-03"
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
                  Learn Technology
                </c-button>
                <c-button tag="a" color="primary" wide-mobile href="/economics">
                  Learn Economics
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
    return {
      sectionHeader: {
        title: 'Learn about XBT',
        paragraph:
            'XBT is a cryptocurrency like Bitcoin, its price target of Bitcoin and its supply change daily'
      },
      sectionContents: [
        {
          image: require('@/assets/images/adaptive-suppy.png'),
          title: "The number of XBT you own can change each day",
          description: "The AMPL protocol automatically adjusts supply in response to demand. When price is high, wallet balances increase. When price is low, wallet balances decrease."
        },
        {
          image: require('@/assets/images/risk-diversification.png'),
          title: "But you can never be diluted by supply inflation",
          description: "XBT is non-dilutive. Supply adjustments are applied universally and proportionally across every wallet’s balance. This means your percent ownership of the network remains fixed."
        },
        {
          image: require('@/assets/images/trading-instrument.png'),
          title: "This Solves The Diversification Problem",
          description: "Today's cryptocurrenices are dangerously correlated. AMPL's unique incentives allow it to decouple from Bitcoin's price pattern. This reduces systematic risk by adding diversity to a homogeneous ecosystem."
        },
        {
          image: require('@/assets/images/trading-instrument.png'),
          title: "This Solves The Inelasticity Problem",
          description: "Like precious metals, today's fixed supply cryptocurrencies are vulnerable to sudden shocks in demand and cannot be used to denominate complex contracts. As a result, sophisticated economies cannot be built upon them. AMPL is the simplest direct solution to the supply inelasticity problem."
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
