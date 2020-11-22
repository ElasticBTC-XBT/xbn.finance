<template>
    <section
        class="features-tiles section center-content-mobile"
        :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="features-tiles-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <div
                    class="tiles-wrap"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div v-for="(item, index) in sectionDataUpper" :key="index" class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-12 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="200">
                                    <c-image
                                        :src="item.image"
                                        alt="item.title"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    {{ item.title }}
                                </h4>
                                <p class="m-0 text-sm reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="400">
                                  {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionTilesProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CFeaturesTiles',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: '',
        paragraph: ''
      },
      sectionDataUpper: [
        {
          image: require('@/assets/images/feature-tile-icon-01.svg'),
          title: 'A new DeFi protocol',
          description: 'XBT is a DeFi protocol with an elastic supply model. This means that the total supply of XBT is constantly changing.'
        },
        {
          image: require('@/assets/images/feature-tile-icon-02.svg'),
          title: 'Randomized rebasing',
          description: 'XBT reaches a supply-price equilibrium with its randomized rebasing. As a result, the volatility is in the token supply, not the price.'
        },
        {
          image: require('@/assets/images/feature-tile-icon-03.svg'),
          title: 'Price target of $1 BTC',
          description: 'is designed to maintain its base price target of $1 BTC with a CPI inflation adjustment.'
        },
        {
          image: require('@/assets/images/feature-tile-icon-04.svg'),
          title: 'Holdings rise with market cap',
          description: 'Holders of the coin own a percentage of the network. Their holdings rise in value as market cap rises.'
        },
        {
          image: require('@/assets/images/feature-tile-icon-05.svg'),
          title: 'A rebase event',
          description: 'Rebase is the event of adjusting the balance of all wallets based on the current price of the coin related to the target price.'
        },
        {
          image: require('@/assets/images/feature-tile-icon-06.svg'),
          title: 'Rebase lag factor',
          description: 'The Rebase Lag Factor helps to smooth changes in supply. A lower Lag Factor means faster adjustments.'
        },
      ]
    }
  }
}
</script>
