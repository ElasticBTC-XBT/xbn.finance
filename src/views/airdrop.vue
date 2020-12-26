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
          <c-section-header tag="h1" :data="sectionHeader" class="center-content"/>
          <c-generic-section top-divider class="center-content">
            <div class="container-xs">
              <c-section-header :data="genericSection01Header" class="center-content"/>
              <div class="button-group">
                <c-button color="primary" wide-mobile target="_blank" @click="connectWallet">
                  {{ $t('buy.buy_with_ETH') }}
                </c-button>
                <c-button color="primary" wide-mobile target="_blank" @click="claimAirdrop">
                  Claim
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
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import {SectionProps} from '@/utils/SectionProps.js'

import CGenericSection from '@/components/sections/GenericSection.vue'
import CButton from '@/components/elements/Button.vue'
import {getWeb3Client} from "@/libs/web3";
import {getAirdropContract} from "@/libs/xbt-airdrop";

export default {
  name: 'AirDrop',
  components: {
    CSectionHeader,
    CGenericSection,
    CButton
  },
  mixins: [SectionProps],
  created() {
    this.$emit('update:layout', CLayout)
  },
  data() {
    let v = this
    return {
      sectionHeader: {
        title: v.$t('buy.section_header.title')
      }
    }
  },
  methods: {
    async claimAirdrop() {
      const walletClient = await getWeb3Client();
      const contract = await getAirdropContract(walletClient.web3Client);
      contract.methods.requestTokens().send();
    },
    async connectWallet() {
      const walletClient = await getWeb3Client();
      window.walletClient = walletClient;
    }
  }
}
</script>
