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
          <div v-if="userAccount">
            <div class="flex-center">
              <div>
                <h1>{{ $t('airdrop.balance') }}: {{ xbtBalance }} XBT</h1>
                <p v-if="waitingTime">{{ $t('airdrop.next_claim') }}: {{ nextAvailableClaimDate }}</p>
                <p>{{ $t('airdrop.contract_fund_balance') }}: {{ contractFundBalance }} XBT</p>
              </div>
            </div>

            <c-generic-section top-divider class="center-content">
              <div class="container-xs">
                <div class="button-group">
                  <c-button :disabled="!availableToClaim" color="primary" wide-mobile target="_blank"
                            @click="claimAirdrop">
                    {{ $t('airdrop.claim_xbt') }}
                  </c-button>
                  <c-button color="primary" wide-mobile target="_blank" @click="fetchStatus">
                    {{ $t('refresh') }}
                  </c-button>
                </div>
              </div>
            </c-generic-section>
          </div>

          <div v-else class="flex-center">
            <c-button color="primary" wide-mobile target="_blank" @click="handleInitialStage">
              {{ $t('connect_wallet') }}
            </c-button>
          </div>

          <sweet-modal ref="success" icon="success">
            <h1>{{ $t('airdrop.xbt_coming') }}</h1>
            {{ $t('airdrop.thank_you') }}

            <div class="mt-32">
              <vue-goodshare-facebook :quote="pageTitle" :page_title="pageTitle" :page_url="pageUrl" has_icon has_counter title_social="Facebook"/>
              <vue-goodshare-reddit :page_title="pageTitle" :page_url="pageUrl" has_icon has_counter title_social="Reddit"/>
              <vue-goodshare-twitter :page_title="pageTitle" :page_url="pageUrl" has_icon title_social="Twitter"/>
            </div>
          </sweet-modal>
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
import moment from 'moment';
import CGenericSection from '@/components/sections/GenericSection.vue'
import CButton from '@/components/elements/Button.vue'
import {getWeb3Client} from "@/libs/web3";
import {claimAirdrop, getParticipantStatus} from "@/libs/xbt-airdrop";
import {getContractXBTFundBalance, getXBTBalance} from "@/libs/xbt";
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";

export default {
  name: 'AirDrop',
  components: {
    CSectionHeader,
    CGenericSection,
    CButton,
    VueGoodshareFacebook,
    VueGoodshareReddit,
    VueGoodshareTwitter
  },
  mixins: [SectionProps],

  created() {
    this.$emit('update:layout', CLayout)
  },

  data() {
    let v = this
    return {
      sectionHeader: {
        title: v.$t('airdrop.claim_title'),
        paragraph: v.$t('airdrop.claim_description')
      },
      contractFundBalance: 0,
      xbtBalance: 0,
      waitingTime: 0,
      claimAmount: 0,
      userAccount: null
    }
  },

  computed: {
    pageUrl() {
      return 'https://elasticbitcoin.org/airdrop'
    },
    pageTitle() {
      return this.$t('airdrop.share_page_title')
    },
    nextAvailableClaimDate() {
      return moment(this.waitingTime).lang('vi').format('llll');
    },
    availableToClaim() {
      return new Date() >= new Date(this.waitingTime);
    }
  },

  mounted() {
    this.handleInitialStage();
  },

  methods: {
    async handleInitialStage() {
      const walletClient = await getWeb3Client();
      if (walletClient.web3Client){
        const accounts = await walletClient.web3Client.eth.getAccounts();
        this.$set(this, 'userAccount', accounts.length > 0 ? accounts[0] : null);
        await this.fetchStatus();
      }
    },

    async fetchStatus() {
      const walletClient = await getWeb3Client();

      // Get balance
      const receipt = await getXBTBalance(walletClient.web3Client);
      this.$set(this, 'xbtBalance', receipt);

      // Get participant status
      const result = await getParticipantStatus(walletClient.web3Client);
      this.$set(this, 'waitingTime', result.participantStatus * 1000);

      // Get participant status
      const contractFundBalance = await getContractXBTFundBalance(walletClient.web3Client);
      this.$set(this, 'contractFundBalance', contractFundBalance);
    },

    async claimAirdrop() {
      const walletClient = await getWeb3Client();
      const claimAmount = await claimAirdrop(walletClient.web3Client);
      this.$set(this, 'claimAmount', claimAmount);
      await this.fetchStatus();
      this.$refs.success.open();
    }
  }
}
</script>

<style>
.signin a {
  text-decoration: none !important;
}
</style>
