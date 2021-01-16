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

          <div v-if="userAccount">
            <c-section-header tag="h1" :data="sectionHeader" class="center-content"/>
            <p class="center-content mt-0 mb-32">{{$t('sale.connected_as')}} <a
                target="_blank"
                :href="`https://etherscan.io/address/${userAccount}`">{{ truncatedAddress }}</a></p>
            <div>
              <sale-input
                  @on-purchase="exchangeToken"
                  :participant-wait-time="participantWaitTime"
                  :sale-rate="saleRate"
                  :min-bid-amount="minBidAmount"
                  :max-bid-amount="maxBidAmount"
              />
            </div>
            <div>
              <sale-info
                  :xbt-balance="totalPurchasedXBT"
                  :sale-supply="saleSupply"
                  :sale-rate="saleRate"
              />
            </div>
            <div class="mb-32 container">
              <sale-order-book
                  :current-address="userAccount"
                  :order-book="orderBook"
                  @refresh="getOrderBook"/>
            </div>
          </div>

          <div v-else>
            <wallet-not-connect @connect-wallet="connectWallet"/>
          </div>
        </div>
      </div>
      <sweet-modal ref="success" icon="success">
        <h1>{{ $t('sale.request_sent') }}</h1>
        {{ $t('sale.thank_you') }}

        <div class="mt-32">
          <vue-goodshare-facebook :quote="pageTitle" :page_title="pageTitle" :page_url="pageUrl" has_icon
                                  has_counter title_social="Facebook"/>
          <vue-goodshare-reddit :page_title="pageTitle" :page_url="pageUrl" has_icon has_counter
                                title_social="Reddit"/>
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
import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
// import layout
import CLayout from '@/layouts/LayoutDefault.vue'
// import sections
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import {SectionProps} from '@/utils/SectionProps.js'
import SaleInfo from '@/components/sales/SaleInfo'
import SaleInput from '@/components/sales/SaleInput'
import SaleOrderBook from '@/components/sales/SaleOrderBook'
import WalletNotConnect from "@/components/sections/WalletNotConnect";
import {getWeb3Client} from "@/libs/web3";
import {
  getOrderBook,
  getOrderMetaOf,
  getSaleRule,
  getSaleSupply,
  makeBid,
  subscribeOrderBookChange, withdrawFund
} from "@/libs/mystic-dealer";

export default {
  name: 'Login',
  components: {
    WalletNotConnect,
    CSectionHeader,
    SaleInfo,
    SaleInput,
    SaleOrderBook,
    VueGoodshareFacebook,
    VueGoodshareReddit,
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
        title: this.$t('sale.public_discounted_sale')
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
      luckyNumber: 0,

      // order book
      orderBook: [],

      // wallet config
      walletClient: {}
    }
  },

  computed: {
    pageTitle() {
      return this.$t('sales.page_title')
    },
    pageUrl() {
      return 'https://elasticbitcoin.org/sales'
    },
    truncatedAddress() {
      return _.truncate(this.userAccount || '', {
        length: 10
      })
    },
    totalPurchasedXBT() {
      return this.orderBook
          .filter(order => order.buyerAddress === this.userAccount)
          .reduce((accum, order) => accum + order.purchasedTokenAmount, 0);
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
      this.subscribeOrderBook();
    },

    async handlePageOnLoad() {
      if (this.walletClient.web3Client) {
        await this.handleGetInitialData();
      }
    },

    subscribeOrderBook() {
      const walletClient = this.walletClient.web3Client;

      if (walletClient) {
        subscribeOrderBookChange(walletClient, () => {
          this.fetchStatus();
        })
      }
    },

    async getOrderBook() {
      const walletClient = this.walletClient;

      // get order book
      const orderBook = await getOrderBook(walletClient.web3Client);
      this.$set(this, 'orderBook', orderBook);
    },

    async getSaleInfo() {
      const walletClient = this.walletClient;

      // Get sale rate
      const saleRate = await getSaleRule(walletClient.web3Client);
      this.$set(this, 'saleRate', saleRate.exchangeRate);
      this.$set(this, 'minBidAmount', saleRate.minBidAmount);
      this.$set(this, 'maxBidAmount', saleRate.maxBidAmount);

      // get order meta
      const {participantWaitTime, luckyNumber} = await getOrderMetaOf(walletClient.web3Client, this.userAccount);
      this.$set(this, 'participantWaitTime', participantWaitTime);
      this.$set(this, 'luckyNumber', luckyNumber);

      // Get sale supply
      const saleSupply = await getSaleSupply(walletClient.web3Client);
      this.$set(this, 'saleSupply', saleSupply);
    },

    async fetchStatus() {
      // const walletClient = this.walletClient;

      this.getSaleInfo();
      this.getOrderBook();

      // // Get balance
      // const xbtBalance = await getXBTBalance(walletClient.web3Client);
      // this.$set(this, 'xbtBalance', xbtBalance);
    },

    async exchangeToken(ethPurchaseAmount) {
      const walletClient = this.walletClient;
      await makeBid(walletClient.web3Client, ethPurchaseAmount);
      this.$refs.success.open();
      await this.fetchStatus();
    },

    async withdrawFund(){
      const walletClient = this.walletClient;
      await withdrawFund(walletClient.web3Client);
      this.$refs.success.open();
      await this.fetchStatus();
    }
  }
}
</script>
