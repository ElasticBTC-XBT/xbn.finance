<template>
  <section
    class="features-split section"
    :class="[hasBgColor && 'has-bg-color', invertColor && 'invert-color']"
  >
    <div class="container">
      <div
        class="features-split-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider',
        ]"
      >
        <c-section-header :data="sectionHeader" class="center-content" />
        <!-- <div
                        class="split-wrap"
                        :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop'
                    ]">
                    <div class="split-item reveal-scale-up">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16">
                                {{ $t('home.features_split.title_1') }}
                            </h3>
                            <p class="m-0">
                                {{ $t('home.features_split.desc_1') }}
                            </p>
                        </div>
                        <div
                                class="split-item-image"
                                :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                    :src="require('@/assets/images/elasticbitcoin-Adaptive Supply.svg')"
                                    alt="Features split image 01"
                                    :width="528"
                                    :height="396"/>
                        </div>
                    </div>

                    <div class="split-item reveal-scale-up">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16">
                                {{ $t('home.features_split.title_2') }}
                            </h3>
                            <p class="m-0">
                                {{ $t('home.features_split.desc_2') }}
                            </p>
                        </div>
                        <div
                                class="split-item-image"
                                :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                    :src="require('@/assets/images/elasticbitcoin-Risk-diversification.svg')"
                                    alt="Features split image 02"
                                    :width="528"
                                    :height="396"/>
                        </div>
                    </div>

                    <div class="split-item reveal-scale-up">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16">
                                {{ $t('home.features_split.title_3') }}
                            </h3>
                            <p class="m-0">
                                {{ $t('home.features_split.desc_3') }}
                            </p>
                        </div>
                        <div
                                class="split-item-image"
                                :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                    :src="require('@/assets/images/elasticbitcoin-A-trading-instrument.svg')"
                                    alt="Features split image 03"
                                    :width="528"
                                    :height="396"/>
                        </div>
                    </div>
                </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import { SectionSplitProps } from "@/utils/SectionProps.js";
import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";
// import CImage from '@/components/elements/Image.vue'

export default {
  name: "CFeaturesSplit",
  components: {
    CSectionHeader,
    // CImage
  },
  mixins: [SectionSplitProps],
  data() {
    let v = this;
    return {
      sectionHeader: {
        title: v.$t("home.features_split.section_header.title"),
        paragraph: v.$t("home.features_split.section_header.paragraph"),
      },
    };
  },
};
</script>

<style scoped>
.split-item-image > img {
  box-shadow: none !important;
}

@media (max-width: 640px) {
  .features-split .split-wrap.invert-mobile .split-item .split-item-image {
    margin-bottom: 32px;
  }

  .split-item {
    margin-bottom: 32px;
  }

  .section-header {
    margin-bottom: 32px;
  }
}
</style>
