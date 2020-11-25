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
              <p>
                The XBT protocol is governed through a series of sequential steps, each representing increasing levels
                of consensus from the community. Proposals and ideas are surfaced on the discord or our public forum,
                and are finalised when they are deployed onchain. The progression of increasingly binding consensus can
                be seen below.
              </p>
              <h4>Discussion</h4>
              <p>
                The highest level discussions may surface ideas in many places including (but not limited to) the
                #governance channel on discord, AmplTalk Forum, social media, or community DAOs. When it appears that
                there is enough general support, a champion may formalize the idea by submitting an Ampleforth
                Improvement Proposal (AIP) or Configuration Change Proposal (ACCP).
              </p>
              <h4>
                Proposals (AIPs / ACCPs)
              </h4>
              <p>
                AIPs and ACCPs are formal documents that describe the proposed change to the protocol or protocol
                configuration. https://aips.ampleforth.org/.
              </p>
              <h4>
                Targeted Discussion
              </h4>
              <p>
                Each proposal has a dedicated github issue where outcome-driven discussion takes place. The goal at this
                step is to finalize any unresolved issues and formalize offchain consensus.
                https://github.com/ampleforth/AIPs/issues.
              </p>
              <h4>
                Onchain Signaling
              </h4>
              <p>
                If the previous step did not arrive at obvious consensus, sentiment may be gathered in a non-binding way
                via onchain signaling from token holders. This provides more insight into the likelihood of the outcome
                of the final binding vote. https://snapshot.page/#/ampleforth.
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
                System changes are currently controlled by a multisig contract. This will eventually be replaced by
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
