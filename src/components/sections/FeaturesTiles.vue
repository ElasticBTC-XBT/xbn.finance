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
        <c-section-header :data="sectionHeader" class="center-content"/>
        <div
            class="tiles-wrap"
            :class="[
                        pushLeft && 'push-left',
                    ]">
          <div v-for="(item, index) in sectionDataUpper" :key="index" class="tiles-item">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header center-content">
                <div class="mb-12 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="200">
                  <c-image
                      :src="item.image"
                      alt="item.title"
                      :width="160"
                      :height="160"/>
                </div>
              </div>
              <div class="features-tiles-item-content center-content">
                <h5 class="mt-0 mb-8 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="300">
                  {{ item.title }}
                </h5>
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
import {SectionTilesProps} from '@/utils/SectionProps.js'
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
          image: require('@/assets/images/elasticbitcoin-A-NEW-DEFI-PROTOCOL.png'),
          title: 'A new DeFi protocol',
          description: 'XBT is a DeFi protocol with an elastic supply model. This means that the total supply of XBT is constantly changing.'
        },
        {
          image: require('@/assets/images/elasticbitcoin-RANDOMIZED-REBASING.png'),
          title: 'Randomized rebasing',
          description: 'XBT reaches a supply-price equilibrium with its randomized rebasing. As a result, the volatility is in the token supply, not the price.'
        },
        {
          image: require('@/assets/images/elasticbitcoin-PRICE-TARGET-OF-1-BTC.png'),
          title: 'Price target of $1 BTC',
          description: 'is designed to maintain its base price target of $1 BTC with a CPI inflation adjustment.'
        },
        {
          image: require('@/assets/images/elasticbitcoin-HOLDINGS-RISE-WITH-MARKET-CAP.png'),
          title: 'Holdings rise with market cap',
          description: 'Holders of the coin own a percentage of the network. Their holdings rise in value as market cap rises.'
        },
        {
          image: require('@/assets/images/elasticbitcoin-A-REBASE-EVENT.png'),
          title: 'A rebase event',
          description: 'Rebase is the event of adjusting the balance of all wallets based on the current price of the coin related to the target price.'
        },
        {
          image: require('@/assets/images/elasticbitcoin-REBASE-LAG-FACTOR.png'),
          title: 'Rebase lag factor',
          description: 'The Rebase Lag Factor helps to smooth changes in supply. A lower Lag Factor means faster adjustments.'
        },
      ]
    }
  }
}
</script>


<style scoped>
@media (min-width: 641px){
  .features-tiles .tiles-item {
    padding-left: 15px;
    padding-right: 15px;
  }
}

</style>
