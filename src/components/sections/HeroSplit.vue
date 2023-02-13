<template>
  <div class="hero">
    <div class="container">
      <div
        class="hero-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider',
        ]"
      >
        <div
          class="split-wrap"
          :class="[
            invertMobile && 'invert-mobile',
            invertDesktop && 'invert-desktop',
          ]"
        >
          <div class="split-item">
            <div class="hero-content split-item-content center-content-mobile">
              <h1 class="mt-1 mb-16 reveal-from-left">
                {{ $t("home.hero_split.title_1") }}
              </h1>
              <p class="mt-0 mb-24 reveal-from-left" data-reveal-delay="200">
                Exciting news for the XBN community! 
                <br/>
                <br/>
                
                We are proud to announce that XBN Token is merging with $GENIUS, the utility token of the AI Nexus ecosystem. This cooperation brings together two players in the AI and blockchain space, creating a powerful and unified platform for innovation.
                <br/>
                <br/>
                As part of the merge, XBN Token holders will receive a 1:30 airdrop swap of their XBN Tokens to $GENIUS. This transition will be seamless and secure, ensuring that XBN Token holders will not experience any disruption to their holdings.
                <br/>
                <br/>
                The merge of XBN Token and $GENIUS is a major step forward for the XBN & AI Nexus platform, bringing new opportunities for growth and development. By joining forces, we will be able to offer even more advanced and innovative services to our users, while continuing to drive the adoption and growth of AI technology.
                <br/>
                <br/>

                We are excited to welcome XBN Token holders to the AI Nexus community and invite everyone to join us on this exciting journey. Get ready to unlock the full potential of AI technology with $GENIUS!
                <br/>
                <br/> 
                $GENIUS will be launched on Arbitrum Nova Network on 17th of March 2023.
                <br/>
                <br/>

                Learn more about AI NEXUS here: 
                <a href="https://ainex.us/" >https://ainex.us/</a>
              </p>
              
            </div>
            <div
              class="hero-figure is-3d split-item-image illustration-element-01 reveal-scale-up"
            >
              <c-image
                id="big-banner-logo"
                class="has-shadow"
                :src="require('@/assets/images/banner.svg')"
                alt="Hero image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SectionSplitProps } from "@/utils/SectionProps.js";
// import CButton from '@/components/elements/Button.vue'
import CImage from "@/components/elements/Image.vue";

export default {
  name: "CHeroSplit",
  components: {
    // CButton,
    CImage,
  },
  mixins: [SectionSplitProps],
};
</script>
<style>
#big-banner-logo {
  box-shadow: none !important;
}

.subtitle {
  font-size: 18px;
}
</style>
