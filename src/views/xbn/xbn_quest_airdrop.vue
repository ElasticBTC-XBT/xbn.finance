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
          <p style="text-align: center">
            <b>Hot<img src="https://i.imgur.com/jmPNlwr.png" style="width: 30px;  display: inline"/>: Now you can buy
              XBN <a
                  href="https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x547cbe0f0c25085e7015aa6939b28402eb0ccdac"
                  target="_blank">here on PancakeSwap</a>.
            </b>
          </p>
          <div v-if="userAccount">
            <div class="flex-center">
              <div style="text-align:center;">
                <!--h1>{{ $t('airdrop.balance') }}: {{ xbtBalance }} XBN</h1-->
                <img src="https://i.imgur.com/QR3UZLo.png" style="width:200px; display:inline;"/>
                <p v-if="waitingTime">{{ $t('airdrop.next_claim') }}: {{ nextAvailableClaimDate }}</p>
                <p>You can also get XBT (ETH Network) airdrop <a href="https://elasticbitcoin.org/airdrop/"  target="_blank">here</a></p>
              </div>
            </div>

            <!--c-generic-section top-divider class="center-content"-->
            <div class="container-xs">
              <div style="text-align: center;">
                <el-input v-model="questCode" label="Your quest code" style="width: 100%;margin-bottom: 30px">
                  <template slot="prepend">Input your quest code</template>
                </el-input>
                <c-button :disabled="!availableToClaim" color="primary" wide-mobile target="_blank"
                          @click="claimAirdrop">
                  {{ $t('airdrop.claim_xbt') }}
                </c-button>
                <!--c-button color="primary" wide-mobile target="_blank" @click="fetchStatus">
                  {{ $t('refresh') }}
                </c-button-->
              </div>
            </div>
            <!--/c-generic-section-->
          </div>

          <div v-else>
            <div class="center-content">
              <p style="font-size: 14px">{{ $t('hint') }}: {{ $t('dont_have_wallet') }}
                <a target="_blank" href="https://trustwallet.com/">Trust Wallet</a>
                {{ $t('or') }} <a target="_blank" href="https://metamask.io/">Metamask</a></p>
              <p style="font-size: 14px">
                {{ $t('any_questions') }}
                <a target="_blank" href="https://t.me/elasticbitcoinxbt">{{ $t('here') }}</a>
              </p>
            </div>
            <div class="center-content">
              <c-button color="primary" wide-mobile target="_blank" @click="connectWallet">
                {{ $t('connect_wallet') }}
              </c-button>
            </div>
          </div>


          <sweet-modal ref="success" icon="success">
            <h1>{{ $t('airdrop.xbt_coming') }}</h1>
            {{ $t('airdrop.thank_you') }}

            <div class="mt-32">
              <vue-goodshare-facebook :quote="pageTitle" :page_title="pageTitle" :page_url="pageUrl" has_icon
                                      has_counter title_social="Facebook"/>
<!--              <vue-goodshare-reddit :page_title="pageTitle" :page_url="pageUrl" has_icon has_counter-->
<!--                                    title_social="Reddit"/>-->
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
// import CGenericSection from '@/components/sections/GenericSection.vue'
import CButton from '@/components/elements/Button.vue'
import {getWeb3Client} from "@/libs/web3";
import {getContractXBNFundBalance} from "@/libs/xbt";
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
// import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import {claimQuestAirdrop} from "@/libs/xbn-quest-airdrop";
// import CImage from '@/components/elements/Image.vue'

export default {
  name: 'QuestAirdrop',
  components: {
    CSectionHeader,
    // CGenericSection,
    CButton,
    VueGoodshareFacebook,
    // VueGoodshareReddit,
    VueGoodshareTwitter,
    // CImage
  },
  mixins: [SectionProps],

  created() {
    this.$emit('update:layout', CLayout);

    this.$root.$emit('updateWalletClient', () => {
      this.connectWallet();
    });
  },

  data() {
    return {
      sectionHeader: {
        title: 'Claim quest rewards',
      },
      contractFundBalance: 0,
      xbtBalance: 0,
      waitingTime: 0,
      userAccount: null,
      walletClient: {},
      questCode: ''
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
      const lang = localStorage.getItem('lang') || 'en';
      return moment(this.waitingTime).lang(lang).format('llll');
    },
    availableToClaim() {
      return new Date() >= new Date(this.waitingTime);
    }
  },

  mounted() {
    this.handlePageOnLoad();
  },

  methods: {
    async connectWallet() {
      await this.handleGetClient();
      await this.handleGetInitialData();
    },

    async handleGetClient() {
      const walletClient = await getWeb3Client();
      this.$set(this, 'walletClient', walletClient);
    },

    async handleGetInitialData() {
      const accounts = await this.walletClient.web3Client.eth.getAccounts();
      this.$set(this, 'userAccount', accounts.length > 0 ? accounts[0] : null);
      await this.fetchStatus();
    },

    async handlePageOnLoad() {
      if (this.walletClient.web3Client) {
        await this.handleGetInitialData();
      }
    },

    async fetchStatus() {
      const walletClient = this.walletClient;

      // Get participant status
      const contractFundBalance = await getContractXBNFundBalance(walletClient.web3Client);
      this.$set(this, 'contractFundBalance', contractFundBalance);
    },

    async claimAirdrop() {
      const walletClient = this.walletClient;
      await claimQuestAirdrop(walletClient.web3Client, this.questCode);
      await this.fetchStatus();
      this.$refs.success.open();
    },
  }
}
</script>

<style>
.signin a {
  text-decoration: none !important;
}

.sweet-modal .sweet-box-actions .sweet-action-close:hover {
  background: inherit !important;
  color: #30b748 !important;
}
</style>
