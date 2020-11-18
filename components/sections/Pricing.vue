<template>
    <section
        class="pricing section"
        :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="pricing-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content invert-color" />
                <c-pricing-switcher
                    v-if="pricingSwitcher"
                    :state.sync="pricingSwitchOn"
                    :labels="pricingSwitchLabels" />
                <div
                    class="tiles-wrap illustration-section-07"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div class="tiles-item reveal-scale-up">
                        <div class="tiles-item-inner has-shadow">
                            <div class="pricing-item-content">
                                <div class="pricing-item-header pb-16 mb-24">
                                    <div class="pricing-item-price mb-4">
                                        <span class="pricing-item-price-currency h2 text-color-low">$</span>
                                        <span class="pricing-item-price-amount h1">{{pricingSwitchOn ? '47' : '55'}}</span>
                                    </div>
                                    <div class="text-color-low text-xs">
                                        /month, billed {{pricingSwitchOn ? 'annually' : 'monthly'}}
                                    </div>
                                </div>
                                <div class="pricing-item-features mb-40">
                                    <div class="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                                        What's included
                                    </div>
                                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li>Excepteur sint occaecat velit</li>
                                        <li>Excepteur sint occaecat velit</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-item-cta mb-8">
                                <c-button tag="a" color="primary" wide href="#">Start free trial</c-button>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-scale-up" data-reveal-delay="200">
                        <div class="tiles-item-inner has-shadow">
                            <div class="pricing-item-content">
                                <div class="pricing-item-header pb-16 mb-24">
                                    <div class="pricing-item-price mb-4">
                                        <span class="pricing-item-price-currency h2 text-color-low">$</span>
                                        <span class="pricing-item-price-amount h1">{{pricingSwitchOn ? '67' : '75'}}</span>
                                    </div>
                                    <div class="text-color-low text-xs">
                                        /month, billed {{pricingSwitchOn ? 'annually' : 'monthly'}}
                                    </div>
                                    <c-image
                                        class="pricing-item-icon"
                                        :src="require('@/assets/images/pricing-icon.svg')"
                                        alt="Diamond"
                                        :width="38"
                                        :height="40" />
                                </div>
                                <div class="pricing-item-features mb-40">
                                    <div class="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                                        What's included
                                    </div>
                                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li>Excepteur sint occaecat velit</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-item-cta mb-8">
                                <c-button tag="a" color="secondary" wide href="#">Start free trial</c-button>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-scale-up" data-reveal-delay="400">
                        <div class="tiles-item-inner has-shadow">
                            <div class="pricing-item-content">
                                <div class="pricing-item-header pb-16 mb-24">
                                    <div class="pricing-item-price mb-4">
                                        <span class="pricing-item-price-currency h2 text-color-low">$</span>
                                        <span class="pricing-item-price-amount h1">{{pricingSwitchOn ? '97' : '109'}}</span>
                                    </div>
                                    <div class="text-color-low text-xs">
                                        /month, billed {{pricingSwitchOn ? 'annually' : 'monthly'}}
                                    </div>
                                </div>
                                <div class="pricing-item-features mb-40">
                                    <div
                                        class="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                                        What's included
                                    </div>
                                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-item-cta mb-8">
                                <c-button tag="a" color="primary" wide href="#">Start free trial</c-button>
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
import CPricingSwitcher from '@/components/sections/partials/PricingSwitcher.vue'
import CButton from '@/components/elements/Button.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CPricing',
  components: {
    CSectionHeader,
    CPricingSwitcher,
    CButton,
    CImage
  },
  mixins: [SectionTilesProps],
  props: {
    pricingSwitcher: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sectionHeader: {
        title: 'Simple pricing',
        paragraph: ''
      },
      pricingSwitchLabels: {
        type: 'Billing Period', // screen-reader text
        default: 'Billed Monthly',
        switchOn: 'Billed Annually'
      },
      pricingSwitchOn: true
    }
  }
}
</script>