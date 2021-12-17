<template>
  <div>
    <section
        class="signin section illustration-section-01"
        :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
      <fragment>
        <c-hero-split image-fill/>
        <c-features-tiles/>
<!--        <c-testimonial class="illustration-section-03"/>-->
        <c-features-split invert-mobile image-fill class="illustration-section-05"/>
        <c-generic-section top-divider>
          <div class="container-xs">
            <c-section-header class="center-content"/>
            <c-accordion>
              <c-accordion-item v-for="(faq, index) in faqData" :key="index" :title="`${faq.title}?`"
                                :active="index===0">
                <span v-html="faq.answer"></span>

              </c-accordion-item>


            </c-accordion>
            <h5 style="text-align: center">
              <a href="https://xbc.xbn.finance" target='_blank'>Launch XBC App</a>
            </h5>
          </div>
        </c-generic-section>
      </fragment>
    </section>
  </div>

</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutDefault.vue'
// import sections
import CHeroSplit from '@/components/xbc/HeroSplit.vue'
import CFeaturesSplit from '@/components/xbc/FeaturesSplit.vue'
import CFeaturesTiles from '@/components/xbc/FeaturesTiles.vue'

import CGenericSection from '@/components/xbc/GenericSection.vue'
import CAccordion from '@/components/xbc/Accordion.vue'
import CAccordionItem from '@/components/xbc/AccordionItem.vue'

import CSectionHeader from '@/components/xbc/SectionHeader.vue'

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
    // CTestimonial
  },
  data() {
    // let v = this
    return {
      faqData: [
        {
          "title": "How many BNB can I claim",
          "answer": "You can claim the amount of the BNB based on the ratio of $XBC you hold/the total BNB pool.\n" +
              "For example, you hold 1% of XBC, you can withdraw 1% of the BNB reward pool."
        },
        {
          "title": "What is the BNB pool",
          "answer": "4% of every transaction is taken and re-distributed to all XBC holders in $BNB. This amount of BNB called the BNB pool.\n"
        },
        {
          "title": "What if I don’t claim BNB reward in my cycle",
          "answer": "If you don’t claim at your cycle and other holders claim, the BNB pool will reduce.\n" +
              "So then the ratio of your $XBC/BNB pool reduces as well. That’s why you should claim as soon as your cycle is ready"
        },
        {
          "title": "What do I need to do to passively earn BNB",
          "answer": "Simply holding $XBC will earn you a share of the BNB rewards pool, proportional to the amount of $XBC you hold. You will also earn $XBC passively too, which gets put straight in your wallet"
        },
        {
          "title": "When can I claim my BNB",
          "answer": "The specific time you can claim depends on a few factors. In the first seven days after $XBC was listed on PancakeSwap, the collection time is every 24 hours, after the first seven days, the collection time changes to once every week. Be aware however, that if you purchase a significant amount more $XBC, your collection time will be moved back, and if you sell all your $XBC and buy back in, your collection date will be pushed years out into the future. This is not a bug, it's a feature that helps prevent scalping. More information on how this works can be found here: https://app.gitbook.com/@oneandonlychance/s/xbc/innovation/a-new-way-to-earn-bnb"
        },
        {
          "title": "What time zone is the XBC app on? (relating to reward claim timer)",
          "answer": "It syncs to your device time so the answer is whatever time zone you are in.\n"
        },
        {
          "title": "How can I claim my BNB",
          "answer": "Simply have your wallet connected through the XBC Dapp on the website, click \"Collect my bnb\". Please note that you must have BNB in your wallet that will be used to cover transfer fees."
        },
        {
          "title": "Does my BNB stack if I don't claim it",
          "answer": "No. This is because it's not \"your\" BNB, meaning it is not an amount of BNB that is set aside for you, but rather a set share of the pool of BNB. As people claim their BNB, the total pool will decrease, which in turn means the BNB value of your set share will decrease. In short, it is best to claim your BNB as soon as possible."
        },
        {
          "title": "Why is my collectible BNB less than yesterday?",
          "answer": "Several factors impact BNB claim amount.\n" +
              "1. The amount of BNB in the pool is distributed based on percentage. The more BNB there, the more you get, however, it is ALWAYS based on percentage. The less there, the less you get. IT IS NOT CUMULATIVE\n" +
              "2. The more people claim, the less BNB will be available for everyone else\n" +
              "3. There is a cycle before you can collect BNB and the more transactions you make with this coin, the more the cycle changes. Be aware of that when you are thinking of selling high to buy low"

        }

      ]
    }
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
