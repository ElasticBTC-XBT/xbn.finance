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
         

          <div v-if="!isSaleOver">
            <div v-if="userAccount">
              <p class="center-content mt-0 mb-32" style="font-size: 0.7em;">

                  <img src="https://i.imgur.com/jmPNlwr.png" style="width: 20px; display: inline;">Limited reward fund, buy before it run out<br/>
                   <img :src="require('@/assets/images/pancakeswap.png')"  style="width: 20px; display: inline;"/> Trade XBN at <a target="_blank" href='https://pancakeswap.finance/swap?outputCurrency=0x547cbe0f0c25085e7015aa6939b28402eb0ccdac'>PancakeSwap</a>,
                   <a target="_blank" href='https://app.1inch.io/#/56/swap/BNB/XBN'>1inch</a>
                  <br/>🏦 Your wallet: <a
                  target="_blank"
                  :href="`https://bscscan.com/address/${userAccount}`">{{ truncatedAddress }}</a> 
                  
                  <br/>📝 XBN Smart Contract: <br/> <a
                  target="_blank"
                  :href="`https://bscscan.com/token/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac`">0x547cbe0f0c25085e7015aa6939b28402eb0ccdac</a> <br/>
                  

                  </p>
              <div>
                 
                <sale-input
                    @on-purchase="exchangeToken"
                    :sale-supply="saleSupply"
                    :participant-wait-time="participantWaitTime"
                    :sale-rate="saleRate"
                    :min-bid-amount="minBidAmount"
                    :max-bid-amount="maxBidAmount"
                    :user-account="userAccount"
                    :user-balance="userBalance"
                />
              </div>



              <!-- <div>
                <sale-info
                    :xbt-balance="totalPurchasedXBN"
                    :sale-supply="saleSupply"
                    :sale-rate="saleRate"
                />
              </div> -->

            </div>



            <div v-else>
              <wallet-not-connect @connect-wallet="connectWallet"/>
            </div>
          </div>

          <div v-else>
            <h1 class="center-content">{{$t('sale.sale_over')}}</h1>
            <p class="center-content">{{$t('please_visit')}} <a href="https://t.me/elasticbitcoinxbt" target="_blank">{{$t('channel')}}</a> {{$t('for_further_information')}}</p>
          </div>
        </div>
      </div>
      <sweet-modal ref="success" icon="success">
        <h1>{{ $t('sale.request_sent') }}</h1>
        {{ $t('sale.thank_you') }}

        <div class="mt-32">
          <vue-goodshare-facebook :quote="pageTitle" :page_title="pageTitle" :page_url="pageUrl" has_icon
                                  has_counter title_social="Facebook"/>
<!--          <vue-goodshare-reddit :page_title="pageTitle" :page_url="pageUrl" has_icon has_counter-->
<!--                                title_social="Reddit"/>-->
          <vue-goodshare-twitter :page_title="pageTitle" :page_url="pageUrl" has_icon title_social="Twitter"/>
        </div>
      </sweet-modal>
    </section>
  </div>
</template>

<style>

</style>

<script>
import _ from 'lodash';
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
// import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
// import layout
import CLayout from '@/layouts/LayoutDefault.vue'
// import sections
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import {SectionProps} from '@/utils/SectionProps.js'
// import SaleInfo from '@/components/sales/SaleInfo'
import SaleInput from '@/components/sales/SaleInput'
// import SaleOrderBook from '@/components/sales/SaleOrderBook'
import WalletNotConnect from "@/components/sections/WalletNotConnect";
import {getWeb3Client} from "@/libs/web3";
import {adjustSaleRule,  getSaleRule,  makeBid, withdrawFund} from "@/libs/mystic-dealer";
import {getXBNBalance} from "@/libs/xbt";
// import Web3 from "web3";


export default {
  name: 'Login',
  components: {
    WalletNotConnect,
    CSectionHeader,
    // SaleInfo,
    SaleInput,
    // SaleOrderBook,
    VueGoodshareFacebook,
    // VueGoodshareReddit,
    VueGoodshareTwitter
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
        title: "Special 10% Discount",
        // paragraph: ""
      },
      // sale info
      saleSupply: 0,
      saleRate: 0,
      minBidAmount: 0,
      maxBidAmount: 0,

      // current user info
      xbtBalance: 0,
      userAccount: null,
      userBalance: 1,
      participantWaitTime: 0,

      // order book
      orderBook: [],

      // wallet config
      walletClient: {}
    }
  },

  computed: {
    isSaleOver() {
      const minAvailableSale = this.saleSupply / this.saleRate;
      return minAvailableSale < this.minBidAmount;
    },
    pageTitle() {
      return this.$t('sales.page_title')
    },
    pageUrl() {
      return 'https://xbn.finance/sales'
    },
    truncatedAddress() {
      return _.truncate(this.userAccount || '', {
        length: 10
      })
    },
    totalPurchasedXBN() {
      return this.xbtBalance;
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

      let userBalance = await this.walletClient.web3Client.eth.getBalance(accounts[0]);
      userBalance = userBalance / Math.pow(10, 18) -  0.005 ;
      // console.log(`userBalance ${userBalance}`);

      // debugger;

      if (userBalance <= 0){
        userBalance = 0.11;
      }
      this.$set(this, 'userBalance',userBalance);


      await this.fetchStatus();
      // this.subscribeOrderBook();
    },

    async handlePageOnLoad() {
      if (this.walletClient.web3Client) {
        await this.handleGetInitialData();
      }
    },


    async getSaleInfo() {
      const walletClient = this.walletClient;

      // // Get sale supply
      // const saleSupply = await getSaleSupply(walletClient.web3Client);
      // this.$set(this, 'saleSupply', saleSupply);

      // Get sale rate
      const saleRate = await getSaleRule(walletClient.web3Client);
      this.$set(this, 'saleRate', saleRate);
      // this.$set(this, 'minBidAmount', saleRate.minBidAmount);
      // this.$set(this, 'maxBidAmount', saleRate.maxBidAmount);

    },

    async fetchStatus() {
      const walletClient = this.walletClient;

      this.getSaleInfo();
      // this.getOrderBook();

      // Get balance
      const xbtBalance = await getXBNBalance(walletClient.web3Client);
      this.$set(this, 'xbtBalance', xbtBalance);
    },

    async exchangeToken(ethPurchaseAmount) {
      const walletClient = this.walletClient;
      let reseller = this.$route.query.r;
      if (reseller === "" || reseller === undefined){
        reseller = "0x0000000000000000000000000000000000000000"
      }
      // console.log(`reseller ${reseller}`)

      await makeBid(walletClient.web3Client, ethPurchaseAmount, reseller);
      this.$refs.success.open();
      await this.fetchStatus();
    },

    async withdrawFund() {
      const walletClient = this.walletClient;
      await withdrawFund(walletClient.web3Client);
      this.$refs.success.open();
      await this.fetchStatus();
    },

    async adjustSaleRule() {
      const walletClient = this.walletClient;
      await adjustSaleRule(walletClient.web3Client);
      this.$refs.success.open();
      await this.fetchStatus();
    }
  }
}
</script>
