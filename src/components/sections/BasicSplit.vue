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
          image: require('@/assets/images/basic-learn-icon-01.svg'),
          title: "We can have Bitcoin on Ethereum Network without collateral.",
          description: "That's true yet very impressive, now you have Bitcoin on Ethereum network without centralized collateral like WBTC. The XBT protocol automatically adjusts supply in response to demand. When price is high, wallet balances increase. When price is low, wallet balances decrease."
        },
        {
          image: require('@/assets/images/basic-learn-icon-02.svg'),
          title: "With XBT, we can have unlimited, not 21 millions, Bitcoin",
          description: "There are only 21 millions bitcoins but XBT is unlimited, there will be enough XBT for everyone in the earth to own 1 $XBT and 1 $XBT still equal to 1 Bitcoin. Spend a second to think how wonderful it is."
        },

        {
          image: require('@/assets/images/basic-learn-icon-03.svg'),
          title: "XBT helps stablizing Bitcoin while contributes to its growth",
          description: "As XBT grows, not only its price is stablized to Bitcoin price, but also it helps Bitcoin stable because of its elastic & scalable supply. So, when there is a lot of demand for bitcoin, XBT can increase its supply to meet demand and vice versa."
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
