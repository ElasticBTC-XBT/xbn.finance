<template>
  <div class="migration">
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

                <div id="logo_list">
                 
                    <a 
                       href="https://www.coingecko.com/en/coins/elastic-bnb"
                       target="_blank">
                        <img :src="require('@/assets/images/coingecko.webp')"/>
                    </a>
                
                    <a 
                       href="https://coinmarketcap.com/currencies/xbn/"
                       target="_blank">
                        <img  :src="require('@/assets/images/cmc.png')"/>
                    </a>
                
                    <a href="https://bscscan.com/token/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac" target="_blank"
                       >
                        <img  :src="require('@/assets/images/bscscan.png')"/>
                    </a>
             
                    <a
                       href="https://pancakeswap.finance/swap?outputCurrency=0x547cbe0f0c25085e7015aa6939b28402eb0ccdac"
                       target="_blank">
                        <img  :src="require('@/assets/images/pancakeswap.png')"/>
                    </a>
                
                    <a href="https://nomics.com/assets/xbn-elastic-bnb" target="_blank">
                        <img  :src="require('@/assets/images/nomics.png')"/>
                    </a>
               
                  </div>

                <p class="notice"> <a href="javascript:void(0);" @click="isOpenA = !isOpenA">🔑 Why migrate to XBN</a>
                  <collapse-transition>
                    <ul v-show="isOpenA">
                      <li>Get +15-20% reward after migrating</li>
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
                      <li>Max size each time is 20000$</li>
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
                        <li>Claim XBN bonus at reward vault.</li>
                      </ul>
                    </collapse-transition>
                  </p>
                 <p class="notice"><a href="javascript:void(0);" @click="isOpenD = !isOpenD">💌 Make money referring friends</a>

                    <collapse-transition>
                        <div style="margin-top: 0px; font-size:0.8em;" v-if="isOpenD">
                             
                              Earn 5% bonus by referring to your friends to migrate to XBN using following link
                            
                            <p>

                              <input v-model="ref_link" onclick="select()"/>

                            </p>
                            <p style="text-align: center">Share to 
                              <a class="btn-floating btn btn-tw" type="button" role="button" title="Share on twitter"
                                :href="'https://twitter.com/intent/tweet?url=' + ref_link"
                                rel="noopener" target="_blank" style="text-align: center">

                                  Twitter 
                                  
                              </a> 💎 
                              <a class="btn-floating btn btn-tw" type="button" role="button" title="Share on twitter"
                                :href="'https://www.facebook.com/sharer/sharer.php?u=' + ref_link"
                                rel="noopener" target="_blank" style="text-align: center">

                                  Facebook <br/>
                                  
                              </a>
                            </p>
                          </div>
                    </collapse-transition>
                  </p>
                  
                  <table>
                    <thead>
                      <tr>
                        <td colspan="2">🏦 Reward Vault</td>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td style="text-align:right; width:50%;">Your address</td>
                        <td style="text-align:left;text-overflow: ellipsis;"> 
                          
                           <a target="_blank"  :href="`https://bscscan.com/address/${userAccount}`" style="width:50px; ">{{ userAccount.slice(0, 17) }}..</a>
                   </td>

                      </tr>
                      <tr>
                        <td style="text-align:right; width:50%;">Total rewards</td>
                        <td style="text-align:left"> 
                           {{ vault }} 
                          XBN </td>

                      </tr>
                      <tr>
                        <td style="text-align:right">Your rewards</td>
                        <td style="text-align:left">
                          {{ bonus }}
                          XBN</td>

                      </tr>
                      <tr>
                        <td colspan="2">
                          <span style="font-size: 0.9em;">
                          Next claim time: {{ nextAvailableClaimDate }} <a target="_blank" href="https://docs.xbn.finance/migration-to-xbn">❓</a> </span>
                          <br>
                          
                          <c-button color="primary" :disabled="!availableToClaim"
                                   @click="claim()">Claim</c-button>
                          </td>
                        </tr>
                    </tbody>

                  </table>

                 
                <table>
                  <thead>
                    <tr>
                      <td>💰 Migrate to XBN 
                        </td>
                      <!-- <td>Token</td> -->
                      <!-- <td>Balance</td> -->
                      <!-- <td>Value in USD</td> -->
                      <!-- <td>Value after converting</td> -->
                      <!-- <td></td> -->
                    </tr>
                  </thead>
                  <tr v-if="orderedTokensBalance.length==0">  
                    <td> ⌛ Loading your tokens... </td>
                  </tr>
                  <tr v-for="token in orderedTokensBalance" :key="token.contract_address" style="border:none">
                    <td> 
                      <table style="border:none;">
                        <thead>
                          <tr>
                            <td colspan="3" style="text-align:center;">{{token.contract_ticker_symbol}} 
                              
                            </td>
                          </tr>
                        </thead>
                        <tr>
                          <td style="width:40%">
                            <a :href="'https://bscscan.com/token/' + token.contract_address" target="_blank">
                            <img :src="token.logo_url" style="width:30px; display:inline; "/></a> </td>
                          <td>➡️</td>
                          <td style="width:40%"> <img src="https://logos.covalenthq.com/tokens/56/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac.png" style="width:30px; display:inline; "/> </td>
                        </tr>
                        <tr>
                          <td>{{ Math.round(token.balance * 10 ** 5 /10**token.contract_decimals)/ 10 ** 5}}  </td>
                          <td>➡️</td>
                          <td>{{ Math.round(token.XBNValue * 10 ** 2/10**18)/ 10 ** 2}}  XBN </td>
                        </tr>
                        <tr>
                          <td>  ~{{ Math.round(token.XBNValueUSD)}} $  </td>
                          <td>➡️</td>
                          <td> ~{{ Math.round(token.XBNValueUSD*1.2)}} $ </td>
                        </tr>

                        <tr>
                          <td colspan="3">
                            <c-button color="primary" wide-mobile v-if="token.XBNValue>0" target="_blank"
                                   @click="converting(token.contract_address,token.balance)">Migrate {{token.contract_ticker_symbol}} </c-button>
                          </td>
                        </tr>
                      </table>

                      
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

import CButton from '@/components/elements/Button.vue'
import {getWeb3Client} from "@/libs/web3";

import { getTokensBalance,convertToken,getMigrationStatus,claimVault} from "@/libs/converting_dust";
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
  import { CollapseTransition } from "@ivanv/vue-collapse-transition";
// import {claimBUSDContract} from "@/libs/staking";
// import CImage from '@/components/elements/Image.vue'
// import _ from 'lodash';
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'AirDrop',
  components: {
    CSectionHeader,
    // CGenericSection,
    CButton,
    VueGoodshareFacebook,
    VueGoodshareReddit,
    VueGoodshareTwitter,
    CollapseTransition,
    CImage
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
      bonus: 0,
      next_claim: 0,
      vault: 0,
      currentPool: 0,
      userBalance: 0,
      waitingTime: 0,
      userAccount: null,
      walletClient: {},
      tokensBalance: [],
      isOpenA: false,
      isOpenB: false,
      isOpenC: false,
      isOpenD: true,
      ref_link: "https://xbn.elasticbitcoin.org/migration/?r=" + this.userAccount
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
      // const lang = localStorage.getItem('lang') || 'en';
      
      // console.log(`#318 ${moment(this.next_claim)}`);

      return moment.unix(this.next_claim).format('llll');
    },
    availableToClaim() {
      return new Date() >= new Date(this.next_claim*1000) && this.bonus > 0;
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
      this.$set(this, 'ref_link', "https://xbn.elasticbitcoin.org/migration/?r=" + this.userAccount);
      
      // eslint-disable-next-line no-console
      console.info(`userAccount ${accounts} `)
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

       await getMigrationStatus(walletClient.web3Client).then(r => {
        
        v.$set(this, 'vault', r.vault);
        v.$set(this, 'bonus', r.bonus);
        v.$set(this, 'next_claim', r.next_claim);
      });
      

      await getTokensBalance(walletClient.web3Client).then(tokensBalance => {
        
        v.$set(this, 'tokensBalance', tokensBalance);
      });
      

    },


    async claim() {
      const walletClient = this.walletClient

      await claimVault(walletClient.web3Client);

      this.$refs.success.open();
      await this.fetchStatus();
    },
    async converting(token, amount ) {

      // using options
      this.$notify({
        title: 'Start migrate to XBN',
      });
      const walletClient = this.walletClient;
      
      
      let reseller = this.$route.query.r;
      if (reseller === "" || reseller === undefined){
        reseller = "0x0000000000000000000000000000000000000000"
      }

      await convertToken(walletClient.web3Client, token, amount,reseller );

      this.$refs.success.open();
      // this.$notify({
      //   title: `Transaction <a>${tx}</a>`,
      // });
      await this.fetchStatus();
    
    },
    
  }
}
</script>

<style scoped>
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
.notice li{
  font-size:0.8em;
}
thead {
  font-weight: bold;
  text-align: left;
}

.migration button {
  padding: 8px;
  height: auto;
}
#logo_list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

#logo_list img {
  width: 24px;
  height: 24px;

}
</style>
