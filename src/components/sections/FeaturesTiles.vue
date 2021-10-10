<template>
  <section
    class="features-tiles section center-content-mobile"
    :class="[hasBgColor && 'has-bg-color', invertColor && 'invert-color']"
  >
    <div class="container">
      <div
        class="features-tiles-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider',
        ]"
      >
        <!-- <c-section-header :data="sectionHeader" class="center-content"/> -->
        <div class="tiles-wrap" :class="[pushLeft && 'push-left']">
          <div
            v-for="(item, index) in sectionDataUpper"
            :key="index"
            class="tiles-item"
          >
            <a :href="item.url" class="tiles-item-inner">
              <div class="tiles-item-inner">
                <div class="features-tiles-item-header center-content">
                  <div
                    class="mb-12 reveal-from-right"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="200"
                  >
                    <c-image
                      :src="item.image"
                      alt="item.title"
                      :width="160"
                      :height="160"
                    />
                  </div>
                </div>
                <div class="features-tiles-item-content center-content">
                  <h5
                    class="mt-0 mb-8 reveal-from-right"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="300"
                  >
                    {{ item.title }}
                  </h5>
                  <p
                    class="m-0 text-sm reveal-from-right"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="400"
                  >
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionTilesProps } from "@/utils/SectionProps.js";
// import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from "@/components/elements/Image.vue";

export default {
  name: "CFeaturesTiles",
  components: {
    // CSectionHeader,
    CImage,
  },
  mixins: [SectionTilesProps],
  data() {
    let v = this;
    return {
      sectionHeader: {
        title: v.$t("home.features_tiles.section_header_title"),
        paragraph: "",
      },
      sectionDataUpper: [
        {
          image: require("@/assets/images/elasticbitcoin-A-NEW-DEFI-PROTOCOL.svg"),
          title: "Trade",
          url: "https://pancakeswap.finance/swap?outputCurrency=0x547cbe0f0c25085e7015aa6939b28402eb0ccdac",
        },
        {
          image: require("@/assets/images/elasticbitcoin-A-REBASE-EVENT.svg"),
          title: "Migrate to XBN",
          url: "/migration",
          // description: v.$t('home.features_tiles.section_data_upper.item_5.desc')
        },
        {
          image: require("@/assets/images/elasticbitcoin-PRICE-TARGET-OF-1-BTC.svg"),
          title: "Weekly Passive Income",
          url: "/staking",
          // description: v.$t('home.features_tiles.section_data_upper.item_3.desc')
        },
        {
          image: require("@/assets/images/elasticbitcoin-HOLDINGS-RISE-WITH-MARKET-CAP.svg"),
          title: "PePe Meme Metaverse",
          url: "https://pepe.community",
          // description: v.$t('home.features_tiles.section_data_upper.item_4.desc')
        },

        {
          image: require("@/assets/images/elasticbitcoin-RANDOMIZED-REBASING.svg"),
          title: "Baking Cake",
          url: "/ai-staking",
          // description: v.$t('home.features_tiles.section_data_upper.item_2.desc'),
        },
        {
          image: require("@/assets/images/elasticbitcoin-REBASE-LAG-FACTOR.svg"),
          title: "CryptoWar GameFi",
          url: "https://cryptowar.network",
          // description: v.$t('home.features_tiles.section_data_upper.item_6.desc')
        },
        {
          image: require("@/assets/images/avax.png"),
          title: "Avalanche Bridge",
          url: "https://anyswap.exchange/#/bridge?bridgetoken=0x547cbe0f0c25085e7015aa6939b28402eb0ccdac&bridgetype=bridge",
          // description: v.$t('home.features_tiles.section_data_upper.item_6.desc')
        },
      ],
    };
  },
};
</script>


<style scoped>
@media (min-width: 641px) {
  .features-tiles .tiles-item {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
