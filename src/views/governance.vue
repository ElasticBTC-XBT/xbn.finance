<template>
  <div>
    <section
        class="signin section illustration-section-05"
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
          <c-section-header tag="h1" :data="sectionHeader" class="center-content"/>
          <c-generic-section top-divider>
            <div class="container-xs">
              <h4>About XBT Governance</h4>
              <p>XBT learns Governance model from AMPL and will upgrade when needed. <br/><br/>
                The XBT protocol is governed through a series of sequential steps, each representing increasing levels
                of consensus from the community. Proposals and ideas are surfaced on the Telegram or Twitter,
                and are finalised when they are deployed on-chain. The progression of increasingly binding consensus can
                be seen below.
              </p>
              <h4>Discussion</h4>
              <p>
                The highest level discussions may surface ideas in many places including (but not limited to) the
                Telegram and Twitter/Reddit. When it appears that
                there is enough general support, a champion may formalize the idea by submitting an XBT Improvement
                Proposal (XIP) or Configuration Change Proposal (XCCP).
              </p>
              <h4>
                Proposals (XIPs / XCCPs)
              </h4>
              <p>
                XIPs and XCCPs are formal documents that describe the proposed change to the protocol or protocol
                configuration.
              </p>
              <h4>
                Targeted Discussion
              </h4>
              <p>
                Each proposal has a dedicated github issue where outcome-driven discussion takes place. The goal at this
                step is to finalize any unresolved issues and formalize off-chain consensus. Everything will be
                documented at XBT Github https://github.com/ElasticBTC-XBT/
              </p>
              <h4>
                On-chain Signaling
              </h4>
              <p>
                If the previous step did not arrive at obvious consensus, sentiment may be gathered in a non-binding way
                via on-chain signaling from token holders. This provides more insight into the likelihood of the outcome
                of the final binding vote.
              </p>
              <h4>
                Technical Development
              </h4>
              <p>
                Requirements are implemented in code, launched on testnet, and audited for security.
              </p>
              <h4>
                Binding Vote / Deployment (work in progress)
              </h4>
              <p>
                System changes are currently controlled by a multi-sig contract. This will eventually be replaced by
                generalized voting from token holders.
              </p>
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
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import {SectionProps} from '@/utils/SectionProps.js'
import CGenericSection from '@/components/sections/GenericSection.vue'

export default {
  name: 'Login',
  components: {
    CSectionHeader,
    CGenericSection
  },
  mixins: [SectionProps],
  created() {
    this.$emit('update:layout', CLayout)
  },
  data() {
    return {
      sectionHeader: {
        title: 'XBT Governance'
      }
    }
  }
}
</script>
