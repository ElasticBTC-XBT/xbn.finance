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
          <c-section-header :data="sectionHeader" class="center-content">

          </c-section-header>

          <c-generic-section top-divider>
            <div class="container-xs">

              <h4>How it works</h4>

                            <p> As a fork from AMPL, XBT works very similar to it, information from this page are copied, then modified from AMPL<br/>

              <p>
                XBT's smart contract design allows the increase and decrease of supply to be automatically executed
                without any need for a transfer between peers, and without the need for a bank.
              </p>
              <p>
                The monetary protocol automatically adjusts the supply of XBT across all user wallets based on price.
                This means the number of XBT you own changes based on market conditions. When price is high wallet
                balances automatically increase. When price is low wallet balances automatically decrease. This supply
                adjustment operation happens once per day and is called a rebase.
              </p>

              <p>
                This daily rebase operation is applied universally and proportionally across every wallet’s balance.
                This means XBT is non-dilutive. Like Bitcoin, if you own 1% of the overall network you will always own
                1% unless you actively make a transfer.
              </p>
            </div>
          </c-generic-section>

          <c-generic-section top-divider>
            <div class="container-xs">
              <h4>Information Flow</h4>
              <p>
                At a high level, the policy contract reflects price changes in the market as supply changes in wallet
                balances. This in-turn incentivizes market actors to adjust price. Price informs supply algorithmically
                and supply informs price behaviorally, in a cycle.
              </p>
              <figure>
                <c-image
                    class="image-larger"
                    src="https://assets.fragments.org/images/ampl/technology_flow_4.jpg"
                    alt="Image placeholder"
                    :width="712"
                    :height="400"/>
              </figure>
            </div>
          </c-generic-section>

          <c-generic-section top-divider>
            <div class="container-xs">
              <h4>Core Features & Capabilities</h4>
              <c-accordion>
                <c-accordion-item v-for="(faq, index) in faqData" :key="index" :title="`${faq.title}?`"
                                  :active="index===0">
                  {{ faq.description }}
                </c-accordion-item>
              </c-accordion>
            </div>
          </c-generic-section>

          <c-generic-section top-divider>
            <div class="center-content">
              <div class="button-group">
                <c-button tag="a" color="primary" wide-mobile href="/basics">
                  Learn Basics
                </c-button>
                <c-button tag="a" color="primary" wide-mobile href="/economics">
                  Learn Economics
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
import {SectionProps} from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

import CAccordion from '@/components/elements/Accordion.vue'
import CAccordionItem from '@/components/elements/AccordionItem.vue'
import CButton from '@/components/elements/Button.vue'
import CGenericSection from '@/components/sections/GenericSection.vue'

export default {
  name: 'Login',
  components: {
    CImage,
    CAccordion,
    CAccordionItem,
    CGenericSection,
    CSectionHeader,
    CButton
  },
  mixins: [SectionProps],
  created() {
    this.$emit('update:layout', CLayout)
  },
  data() {
    return {
      sectionHeader: {
        title: 'Technology',
        paragraph: "XBT combines the best of Bitcoin and Smart Contract on Ethereum network."
      },
      faqData: [{
        "title": "Algorithmic",
        "description": "The protocol rules are encoded in smart contracts on Ethereum. Rules-based policies allow for predictable actions and measurable responses, and are effective checks against discretionary monetary policies."
      }, {
        "title": "Non Dilutive",
        "description": "If you own 1% of the network, you’ll always own 1%. No party extracts value and there are no added transaction fees."
      }, {
        "title": "Bankless",
        "description": "XBT is a base money, there is no notion of debt or credit in the system. It does not rely on open debt markets or lenders of last resort"
      }, {
        "title": "Simple Incentives",
        "description": "A simple system is transparent and easy to understand. The XBT protocol has only two rules for expansion and contraction, and depends solely on profit-seeking actors in the marketplace to reach equilibrium."
      }, {
        "title": "Non Custodial",
        "description": "Ownership is accounted for natively on the blockchain. No custody is taken of outside assets or collateral."
      }, {
        "title": "Minimal Governance",
        "description": "XBT was designed to minimize the need for governance. No governance exists within the loop of supply adjustments because there are no interest rates to adjust or markets to balance."
      }, {
        "title": "Distinct Movement Pattern",
        "description": "XBT’s novel protocol rules lead to unique incentives and a distinct volatility fingerprint. XBT offers a way to diversify risk in a dangerously correlated ecosystem."
      }, {
        "title": "ERC-20",
        "description": "XBT implements the ERC-20 interface and can be used with any native blockchain wallet. A standard interface allows XBT to integrate with many DeFi application platforms."
      }]
    }
  }
}
</script>
