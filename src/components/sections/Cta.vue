<template>
  <section
    class="cta section center-content-mobile"
    :class="[hasBgColor && 'has-bg-color', invertColor && 'invert-color']"
  >
    <div class="container">
      <div
        class="cta-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider',
          split && 'cta-split',
        ]"
      >
        <div class="cta-slogan reveal-from-left">
          <h3 class="m-0" v-html="$t('cta.title')"></h3>
        </div>
        <div class="cta-action reveal-from-right">
          <c-button tag="a" color="primary white" wide-mobile href="/buy">
            {{ $t("cta.buy_xbt") }}
          </c-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from "@/utils/SectionProps.js";
import CButton from "@/components/elements/Button.vue";

export default {
  name: "CCta",
  components: {
    CButton,
  },
  mixins: [SectionProps],
  props: {
    split: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
