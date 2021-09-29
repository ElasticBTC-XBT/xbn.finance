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
          <!-- <p style="text-align: center">
            <b>Please follow & retweet pinned tweet at <a href="https://twitter.com/elasticbitcoin" target="_blank">XBN Twitter</a>.
              </b>
          </p> -->

          <div v-if="userAccount">
            <div class="flex-center">
              <div style="text-align:center;">
                <!--h1>{{ $t('airdrop.balance') }}: {{ xbtBalance }} XBN</h1-->
                <img src="https://i.imgur.com/HAkIiZs.png" class="xbn_rotate" style="width:137px; display:inline; margin-bottom:50px;"/>

                <p class="notice"> <a href="javascript:void(0);" @click="isOpenA = !isOpenA">🔑 Why migrate to XBN</a>
                  <collapse-transition>
                    <ul v-show="isOpenA">
                      <li>Get 20% reward after migrating</li>
                      <li>Earn weely <a href="/staking" target="_blank">BUSD passive income</a></li>
                      <li>Join huge Ecosystem with <a href="twitter.com/elasticbitcoin" target="_blank">+50k Twitter followers</a> </li>
                      <li>One of largest coins in BSC in term of holders with <a href="https://bscscan.com/token/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac" target="_blank">+55k holders</a></li>
                      <li>Long term prosperity for everyone</li>
                    </ul>
                  </collapse-transition>
                </p>
                <p class="notice"><a href="javascript:void(0);" @click="isOpenB = !isOpenB">📝 Note & Support</a>

                  <collapse-transition>
                      <ul v-show="isOpenB">
                      <li>Only works on Binance Smart Chain</li>
                      <li>Max size each time is 1000$</li>
                      <li>Reward can be claimed daily 30% until 10XBN left</li>
                      <li>Join <a href="https://t.me/elasticbitcoinxbt" target="_blank">Telegram</a> 
                      & <a href="https://discord.gg/ckEHuezmES" target="_blank">Discord</a> for support</li>
                    </ul>
                  </collapse-transition>
                </p>

                 <p class="notice"><a href="javascript:void(0);" @click="isOpenC = !isOpenC">⛩️ How to migrate</a>

                    <collapse-transition>
                        <ul v-show="isOpenC">
                        <li>Choose your coins to migrate</li>
                        <li>Click Migrate</li>
                        <li>Comeback get reward everyday</li>
                      </ul>
                    </collapse-transition>
                  </p>
                <table>
                  <thead>
                    <tr>
                      <td>Token</td>
                      <!-- <td>Balance</td> -->
                      <!-- <td>Value in USD</td> -->
                      <td>Value after converting</td>
                      <!-- <td></td> -->
                    </tr>
                  </thead>
                  <tr v-for="token in orderedTokensBalance" :key="token.contract_address" >
                    <td> 
                      
                       {{ Math.round(token.balance * 10 ** 5 /10**token.contract_decimals)/ 10 ** 5}} 
                       
                       {{token.contract_ticker_symbol}} 
                       <br>
                       <img :src="token.logo_url" style="width:30px; display:inline; margin-right:10px;"/>
                       </td>
                      <!-- {{ token.contract_address}}  -->
                    <td>
                      <p v-if="token.XBNValue > 0">
                        {{ Math.round(token.XBNValue * 10 ** 2/10**18)/ 10 ** 2}}  $XBN 
                        
                          <!-- <br>
                        ~{{ token.XBNValueUSD}}$  -->
                      </p>
                      
                      
                      <c-button color="primary" wide-mobile v-if="token.XBNValue>0" target="_blank"
                                   @click="converting(token.contract_address,token.balance)">Migrate</c-button>
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
// import {adjustParams} from "@/libs/xbt-airdrop";
import { getTokensBalance,convertToken} from "@/libs/converting_dust";
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
  import { CollapseTransition } from "@ivanv/vue-collapse-transition";
// import {claimBUSDContract} from "@/libs/staking";
// import CImage from '@/components/elements/Image.vue'
// import _ from 'lodash';

export default {
  name: 'AirDrop',
  components: {
    CSectionHeader,
    // CGenericSection,
    CButton,
    VueGoodshareFacebook,
    VueGoodshareReddit,
    VueGoodshareTwitter,
    CollapseTransition
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
        title: "Migration to XBN",
        paragraph: "Migrate your Tokens into Elastic BNB and earn 20% reward"
      },
      reward: 0,
      currentPool: 0,
      userBalance: 0,
      waitingTime: 0,
      userAccount: null,
      walletClient: {},
      tokensBalance: [],
      isOpenA: false,
      isOpenB: false,
      isOpenC: false,
    }
  },

  computed: {
    pageUrl() {
      return 'https://xbn.finance/converting_dust/'
    },
    orderedTokensBalance: function () {
      return this.tokensBalance.filter(token => token.balance > 0).sort((a, b) => b.XBNValueUSD - a.XBNValueUSD);
      // return this.tokensBalance.sort((a, b) => b.XBNValueUSD - a.XBNValueUSD);
      // return _.orderBy(this.tokensBalance, 'XBNValueUSD','desc');
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
      

    },

    async converting(token, amount ) {
      const walletClient = this.walletClient;
      await convertToken(walletClient.web3Client, token, amount );
      // eslint-disable-next-line no-console
      // console.info(`xbn ${xbn}`);
      
      // this.$refs.success.open();
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

.xbn_rotate {
		-webkit-animation: rotation 2s infinite linear;
}

@-webkit-keyframes rotation {
		from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(359deg);
		}
}
.notice{
  text-align: left;
}
</style>
