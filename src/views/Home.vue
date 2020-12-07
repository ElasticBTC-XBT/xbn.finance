<template>
  <fragment>
    <c-hero-split image-fill class="illustration-section-01"/>
    <c-features-tiles/>
    <c-testimonial class="illustration-section-03"/>
    <c-features-split invert-mobile image-fill class="illustration-section-05"/>
    <c-generic-section top-divider>
      <div class="container-xs">
        <c-section-header class="center-content"/>
        <c-accordion>
          <c-accordion-item v-for="(faq, index) in faqData" :key="index" :title="`${faq.title}?`" :active="index===0">
            <span v-html="faq.answer"></span>

          </c-accordion-item>
        </c-accordion>
      </div>
    </c-generic-section>
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
import CGenericSection from '@/components/sections/GenericSection.vue'
import CAccordion from '@/components/elements/Accordion.vue'
import CAccordionItem from '@/components/elements/AccordionItem.vue'
import CTestimonial from '@/components/sections/Testimonial.vue'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'

export default {
  name: 'Home',
  components: {
    CHeroSplit,
    CFeaturesSplit,
    CFeaturesTiles,
    // CPricing,
    CSectionHeader,
    CGenericSection,
    CAccordion,
    CAccordionItem,
    CTestimonial,
  },
  data() {
    return {
      faqData: [
        {
          "title": "When was the XBT pairs launched in Uniswap",
          "answer": "11/11/2020"
        },
        // {
        //   "title": "Who is the team/devs",
        //   "answer": "The team is anonymous, but a short introduction of every member is available on the website"
        // },
        {
          "title": "When is the whitepaper published",
          "answer": "It is finalizeding and currently in peer review with our advisory team. It will be published in Q1/2021"
        }, {
          "title": "What is the total supply",
          "answer": "The total supply changes constantly. You can see the current supply here: <a href='https://etherscan.io/token/0x64fb96d0395f6bf105f35233911e3df2c5bf4ce8'>here</a>"
        }, {
          "title": "Has the smart contract been released",
          "answer": "Yes, you can find it <a href='https://github.com/ElasticBTC-XBT/elastic-bitcoin-xbt-contract'>here</a>"
        }, {
          "title": "When will XBT appear on CoinGecko and Coin Market Cap",
          "answer": "We are applying for Coingecko and we are waiting for their approval. After we list XBT on another exchange we will be on Coin Market Cap"
        }, {
          "title": "Are team wallets locked",
          "answer": "Yes, they are locked in a time released contract. They will be unlocked at a rate of 1% each week."
        }, {
          "title": "Is Uniswap liquidity locked",
          "answer": "Yes, it is locked through Unicrypt. You can find more information on <a href='https://www.dextools.io/app/uniswap/pair-explorer/0x080cf470ea91532bf5e313acc60c4b0d029409d4'>Dextools</a>"
        }, {
          "title": "How does the rebase work",
          "answer": "The rebase happens randomly after 24 hours since the last rebase. The rebase alters every wallets balance by a calculated percentage. If the price is above $BTC 1.05 the rebase is positive and balances increase; if the price is below $BTC 0.95 the rebase is negative and balances decrease.The rebase automatically changes the balance in your wallet. You do not have to stake or do anything. Every wallet where you have access to your private keys is supported"
        }, {
          "title": "How can user balances change without a transaction",
          "answer": "All wallets are updated with a single transaction using Scalar Contract Variables. Your wallet balance is your private supply multiplied by the global split ratio. The more or less it is split, the more or less your balance will be dynamically updated."
        }, {
          "title": "Can a rebase happen multiple times in one day",
          "answer": "No"
        }, {
          "title": "How is the rebase calculated",
          "answer": "(current price – base target price) * wallet balance / (base target price * lag factor)  <br/>Example: At a current price of $BTC 1.30, lag factor 10.00, the updated wallet balance would be adjusted by: (1.30 – 1) * 100 / (1 * 10) = 3 . The new wallet balance would be 103 $XBT."
        }, {
          "title": "What is the lag factor",
          "answer": "A randomized, curved lag factor is used to calculate supply increases and decreases when a rebase happens. This makes rebase events more unpredictable. The curve allows supply to increase at a faster rate when the total market cap is low. The lag factor depends on the total supply. The higher the supply is, the higher is the possible lag factor. Minimum is 6 and maximum is 100."
        }, {
          "title": "What is the XBT LP Staking",
          "answer": "The XBT LP Staking offers a solution to incentive liquidity provision on Uniswap. Once you have provided liquidity for XBT on Uniswap, you will receive UNI-V2 tokens, which you can stake on the XBT Staking dashboard. Depending on the amount of staked tokens and the duration of your stake, you will receive a share of the XBT ecosystem pool.The pool is unlocked over time and distributed to each staker according to his weight in the network."
        }
      ]
    }
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
