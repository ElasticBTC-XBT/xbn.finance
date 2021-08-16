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
           <div style="text-align:center;">
                  <b>To get XBN, please retweet this <a href="https://twitter.com/elasticbitcoin/status/1390099321895284737" target="_blank">tweet</a> & follow <a href="https://twitter.com/elasticbitcoin" target="_blank">XBN Twitter</a>                  
                  <br/>
                  <a href="https://twitter.com/elasticbitcoin/status/1366605459763826692" target="_blank">Video tutorial to get XBN</a>
                  </b>
              </div>

          <div v-if="!isSaleOver">
            <div v-if="userAccount">
              <p class="center-content mt-0 mb-32">

                {{ $t('sale.connected_as') }} <a
                  target="_blank"
                  :href="`https://bscscan.com/address/${userAccount}`">{{ truncatedAddress }}</a></p>
              <div>
                <sale-input-airdrop
                    @on-purchase="exchangeToken"
                    :sale-supply="saleSupply"
                    :participant-wait-time="participantWaitTime"
                    :sale-rate="saleRate"
                    :min-bid-amount="minBidAmount"
                    :max-bid-amount="maxBidAmount"
                    :user-account="userAccount"
                />
              </div>



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
import SaleInputAirdrop from '@/components/sales/SaleInputAirdrop'
// import SaleOrderBook from '@/components/sales/SaleOrderBook'
import WalletNotConnect from "@/components/sections/WalletNotConnect";
import {getWeb3Client} from "@/libs/web3";
import {adjustSaleRule,  getSaleRule,  makeBid, withdrawFund} from "@/libs/mystic-dealer";
import {getXBNBalance} from "@/libs/xbt";
// import SaleInputAirdrop from '../../components/sales/SaleInputAirdrop.vue';

export default {
  name: 'Login',
  components: {
    WalletNotConnect,
    CSectionHeader,
    // SaleInfo,
    SaleInputAirdrop,
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
        title: 'Airdrop',
        paragraph: "<img src=\"https://i.imgur.com/jmPNlwr.png\" style=\"width: 30px; display: inline;\"> Fair airdrop for everyone on a first-come-first-serve basis "
      },
      // sale info
      saleSupply: 0,
      saleRate: 0,
      minBidAmount: 0,
      maxBidAmount: 0,

      // current user info
      xbtBalance: 0,
      userAccount: null,
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
      return 'https://xbn.finance/xbn/airdrop'
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
