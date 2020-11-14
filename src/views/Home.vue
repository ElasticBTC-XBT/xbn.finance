<template>
  <fragment>
    <c-hero-split image-fill class="illustration-section-01"/>
    <c-features-tiles/>
    <c-testimonial class="illustration-section-03"/>
    <c-features-split invert-mobile image-fill class="illustration-section-05"/>
    <c-generic-section top-divider>
      <div class="container-xs">
        <c-section-header :data="genericSection04Header" class="center-content"/>
        <c-accordion>
          <c-accordion-item v-for="(faq, index) in faqData" :key="index" :title="`${faq.title}?`" :active="index===0">
            {{ faq.answer }}
          </c-accordion-item>
        </c-accordion>
      </div>
    </c-generic-section>
    <c-cta top-divider bottom-divider split/>
  </fragment>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutDefault.vue'
// import sections
import CHeroSplit from '@/components/sections/HeroSplit.vue'
import CFeaturesSplit from '@/components/sections/FeaturesSplit.vue'
import CFeaturesTiles from '@/components/sections/FeaturesTiles.vue'
// import CPricing from '@/components/sections/Pricing.vue'
import CCta from '@/components/sections/Cta.vue'
import CGenericSection from '@/components/sections/GenericSection.vue'
import CAccordion from '@/components/elements/Accordion.vue'
import CAccordionItem from '@/components/elements/AccordionItem.vue'
import CTestimonial from '@/components/sections/Testimonial.vue'

export default {
  name: 'Home',
  components: {
    CHeroSplit,
    CFeaturesSplit,
    CFeaturesTiles,
    // CPricing,
    CGenericSection,
    CAccordion,
    CAccordionItem,
    CTestimonial,
    CCta
  },
  data() {
    return {
      faqData: [
        {
          "title": "When was the OTC Pre-Sale",
          "answer": "Sunday 2nd August 2020"
        }, {
          "title": "When was the Uniswap launch",
          "answer": "Monday 3rd August 2020"
        }, {
          "title": "Who is the team/devs",
          "answer": "The team is anonymous, but a short introduction of every member is available on the website"
        }, {
          "title": "When is the whitepaper ready",
          "answer": "Currently in peer review with our advisory team."
        }, {
          "title": "What is the total supply",
          "answer": "The total supply changes constantly. You can see the current supply here: https://www.XBT.io/supply/total/"
        }, {
          "title": "When is the smart contract being released and will it be on GitHub",
          "answer": "Soon and yes, GitHub https://github.com/XBTdefiteam"
        }, {
          "title": "CoinGecko, CMC",
          "answer": "Coingecko application is in progress and we are waiting for their approval. CMC after we are listed on another exchange."
        }, {
          "title": "Are team wallets locked",
          "answer": "Yes, they are locked in a time released contract. They will be unlocked at a rate of 2% each week."
        }, {
          "title": "Is Uniswap liquidity locked",
          "answer": "Yes, it is locked through Unicrypt."
        }, {
          "title": "How does the rebase work",
          "answer": "The rebase happens randomly between 0 to 48 hours after the last rebase. The rebase alters every wallets balance by a calculated percentage. If the price is above $1.05 the rebase is positive and balances increase; if the price is below $0.95 the rebase is negative and balances decrease.The rebase automatically changes the balance in your wallet. You do not have to stake or do anything. Every wallet where you have access to your private keys is supported (no exchange wallets)"
        }, {
          "title": "How can user balances change without a transaction",
          "answer": "All wallets are updated with a single transaction using Scalar Contract Variables. Your wallet balance is your private supply multiplied by the global split ratio. The more or less it is split, the more or less your balance will be dynamically updated."
        }, {
          "title": "Can a rebase happen multiple times in one day",
          "answer": "Yes, it can happen as it is random. It will even out at approximately 365 times a year."
        }, {
          "title": "How is the rebase calculated",
          "answer": "(current price – base target price) * wallet balance / (base target price * lag factor)Example: At a current price of $1.30, lag factor 10.00, the updated wallet balance would be adjusted by: (1.30 – 1) * 100 / (1 * 10) = 3The new wallet balance would be 103 $XBT."
        }, {
          "title": "What is the lag factor",
          "answer": "A randomized, curved lag factor is used to calculate supply increases and decreases when a rebase happens. This makes rebase events more unpredictable. The curve allows supply to increase at a faster rate when the total market cap is low. The lag factor depends on the total supply. The higher the supply is, the higher is the possible lag factor. Minimum is 6 and maximum is 14."
        }, {
          "title": "What is the XBT Cradle",
          "answer": "The XBT Cradle offers a solution to incentive liquidity provision on Uniswap. Once you have provided liquidity for XBT on Uniswap, you will receive UNI-V2 tokens, which you can stake on the Cradle dashboard. Depending on the amount of staked tokens and the duration of your stake, you will receive a share of the XBT ecosystem pool.The pool is unlocked over time and distributed to each staker according to his weight in the network."
        }
      ]
    }
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
