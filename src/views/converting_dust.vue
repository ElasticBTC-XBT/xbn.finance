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
            <b>Please follow & retweet pinned tweet at <a href="https://twitter.com/elasticbitcoin" target="_blank">XBN Twitter</a>.
              </b>
          </p>

          <div v-if="userAccount">
            <div class="flex-center">
              <div style="text-align:center;">
                <!--h1>{{ $t('airdrop.balance') }}: {{ xbtBalance }} XBN</h1-->
                <img src="https://i.imgur.com/22SblBv.gif" style="width:137px; display:inline;"/>


                <table>
                  <thead>
                    <tr>
                      <td>Symbol</td>
                      <td>Balance</td>
                      <td>Value in USD</td>
                      <td>XBN after converting</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tr v-for="token in tokensBalance" :key="token.contract_address" v-if="token.quote > 0">
                    <td> {{token.contract_ticker_symbol}} </td>
                    <td> {{ Math.round(token.balance * 10 ** 5 /10**token.contract_decimals)/ 10 ** 5}} </td>
                    <td> {{ token.quote}} </td>
                    <td> {{ token.quote}} </td>
                    <td> 
                      <c-button :disabled="!availableToClaim" color="primary" wide-mobile target="_blank"
                                   @click="claimXBN">Convert </c-button>
                    </td>
                  </tr>


                  <tr>
                    <td colspan="2">
                      <p v-if="waitingTime">{{ $t('airdrop.next_claim') }}: {{ nextAvailableClaimDate }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right">Total reward pool</td>
                    <td>{{ currentPool }} XBN</td>
                  </tr>

                  <tr>
                    <td style="text-align: right">Your XBN Balance</td>
                    <td>{{ userBalance }} XBN</td>
                  </tr>
                  <tr>
                    <td style="text-align: right">Your reward</td>
                    <td>{{ reward }} XBN</td>
                  </tr>

                  <tr>
                    <td> <c-button :disabled="!availableToClaim" color="primary" wide-mobile target="_blank"
                                   @click="claimXBN">
                      Earn XBN
                    </c-button></td>
                    <td>
                      <c-button :disabled="!availableToClaim" color="primary" wide-mobile target="_blank"
                                @click="claimBUSD">
                        Earn BUSD
                      </c-button>
                    </td>

                  </tr>
                  <tr>
                    <td colspan="2">
                      Earn $BUSD will have 17% tax.
                    </td>
                  </tr>
                </table>

              </div>
            </div>


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
            <h1>Successful!</h1>
            {{ $t('airdrop.thank_you') }}

            <div class="mt-32">
              <vue-goodshare-facebook :quote="pageTitle" :page_title="pageTitle" :page_url="pageUrl" has_icon
                                      has_counter title_social="Facebook"/>
              <vue-goodshare-reddit :page_title="pageTitle" :page_url="pageUrl" has_icon has_counter
                                    title_social="Reddit"/>
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
// import CGenericSection from '@/comTo get XBT, please follow ponents/sections/GenericSection.vue'
import CButton from '@/components/elements/Button.vue'
import {getWeb3Client} from "@/libs/web3";
import {adjustParams} from "@/libs/xbt-airdrop";
import { getTokensBalance} from "@/libs/xbt";
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import {claimXBNContract, claimBUSDContract} from "@/libs/staking";
// import CImage from '@/components/elements/Image.vue'

export default {
  name: 'AirDrop',
  components: {
    CSectionHeader,
    // CGenericSection,
    CButton,
    VueGoodshareFacebook,
    VueGoodshareReddit,
    VueGoodshareTwitter
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
    // let v = this;
    return {
      sectionHeader: {
        title: "Converting Dust",
        paragraph: "Convert small Token balance into $XBN with best rate"
      },
      reward: 0,
      currentPool: 0,
      userBalance: 0,
      waitingTime: 0,
      userAccount: null,
      walletClient: {},
      tokensBalance: [],
    }
  },

  computed: {
    pageUrl() {
      return 'https://xbn.finance/converting_dust/'
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
      // Get balance
      let v = this;
      await getTokensBalance(walletClient.web3Client).then(tokensBalance => {
        
        v.$set(this, 'tokensBalance', tokensBalance);
      });
      

      // // Get participant status
      // const result = await getUserStakeData(walletClient.web3Client);
      // this.$set(this, 'waitingTime', result.nextClaimTime * 1000);
      // this.$set(this, 'reward', result.reward);
      // this.$set(this, 'currentPool', result.currentPool);

      // // Get participant status
      // const contractFundBalance = await getContractXBNFundBalance(walletClient.web3Client);
      // this.$set(this, 'contractFundBalance', contractFundBalance);
    },

    async claimXBN() {
      const walletClient = this.walletClient;
      await claimXBNContract(walletClient.web3Client, this.userBalance);
      await this.fetchStatus();
      this.$refs.success.open();
    },
    async claimBUSD() {
      const walletClient = this.walletClient;
      await claimBUSDContract(walletClient.web3Client);
      await this.fetchStatus();
      this.$refs.success.open();
    },

    async adjustParams() {
      const walletClient = this.walletClient;
      await adjustParams(walletClient.web3Client);
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

.sweet-modal .sweet-box-actions .sweet-action-close:hover {
  background: inherit !important;
  color: #30b748 !important;
}
</style>
