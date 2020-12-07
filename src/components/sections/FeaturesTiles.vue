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
        title: 'What is Elastic Bitcoin (XBT)?',
        paragraph: ''
      },
      sectionDataUpper: [
        {
          image: require('@/assets/images/elasticbitcoin-A-NEW-DEFI-PROTOCOL.png'),
          title: 'A special DeFi protocol',
          description: 'XBT is forked from $AMPL, a DeFi protocol with an elastic supply model. The total supply of XBT is constantly changing every day.'
        },
        {
          image: require('@/assets/images/elasticbitcoin-RANDOMIZED-REBASING.png'),
          title: 'Rebasing is randomized',
          description: 'To avoid price manipulation, XBT rebasing is randomized with lag factor. '
          +'XBT will reach a supply-price equilibrium, the volatility is in the token supply, not the price.'
        },
        {
          image: require('@/assets/images/elasticbitcoin-PRICE-TARGET-OF-1-BTC.png'),
          title: 'Price target of 1 $BTC',
          description: '$XBT is designed to maintain its base price target of 1 $BTC after 100 days.'
        },
        {
          image: require('@/assets/images/elasticbitcoin-HOLDINGS-RISE-WITH-MARKET-CAP.png'),
          title: 'With more holders, XBT is still equal to $BTC but has the bigger market cap',
          description: 'XBT Holders own a percentage of the network. Their holding values rise as market cap rises.'
        },
        {
          image: require('@/assets/images/elasticbitcoin-A-REBASE-EVENT.png'),
          title: 'What is a rebase event?',
          description: 'A rebase event is the event of adjusting the balance of all wallets based on the current price of the coin related to the target price of 1 bitcoin'
        },
        {
          image: require('@/assets/images/elasticbitcoin-REBASE-LAG-FACTOR.png'),
          title: 'What is rebase lag factor?',
          description: 'The Rebase Lag Factor helps to smooth changes, a lower Lag Factor means faster adjustments and vise versa'
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
