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
          <c-section-header tag="h1" :data="sectionHeader" class="center-content"/>
          <c-generic-section top-divider class="center-content">
            <div class="container-xs">
              <c-section-header :data="genericSection01Header" class="center-content"/>
              <div class="button-group">
                <c-button tag="a" color="primary" wide-mobile target="_blank" href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x64fb96d0395f6bf105f35233911e3df2c5bf4ce8">
                  Buy with ETH
                </c-button>
                <c-button tag="a" color="primary" wide-mobile target="_blank" href="https://app.uniswap.org/#/swap?inputCurrency=0x2260fac5e5542a773aa44fbcfedf7c193bc2c599&outputCurrency=0x64fb96d0395f6bf105f35233911e3df2c5bf4ce8">
                  Buy with WBTC
                </c-button>
                <c-button tag="a" color="primary" wide-mobile target="_blank" href="https://app.uniswap.org/#/swap?inputCurrency=0xdac17f958d2ee523a2206206994597c13d831ec7&outputCurrency=0x64fb96d0395f6bf105f35233911e3df2c5bf4ce8">
                  Buy with USDT
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
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import {SectionProps} from '@/utils/SectionProps.js'

import CGenericSection from '@/components/sections/GenericSection.vue'
import CButton from '@/components/elements/Button.vue'

export default {
  name: 'Login',
  components: {
    CSectionHeader,
    CGenericSection,
    CButton
  },
  mixins: [SectionProps],
  created() {
    this.$emit('update:layout', CLayout)
  },
  data() {
    return {
      sectionHeader: {
        title: 'Get XBT'
      }
    }
  }
}
</script>
