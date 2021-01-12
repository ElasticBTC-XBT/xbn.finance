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
            <p class="center-content mt-0 mb-32">Connected as <a
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
                  :xbt-balance="xbtBalance"
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
    </section>
  </div>
</template>

<style>

</style>

<script>
import _ from 'lodash';

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
import {getXBTBalance} from "@/libs/xbt";
import {getOrderBook, getOrderMetaOf, getSaleRule, getSaleSupply, makeBid} from "@/libs/mystic-dealer";

export default {
  name: 'Login',
  components: {
    WalletNotConnect,
    CSectionHeader,
    SaleInfo,
    SaleInput,
    SaleOrderBook
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
        title: 'Public Discounted Sale'
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
    pageUrl() {
      return 'https://elasticbitcoin.org/airdrop'
    },
    pageTitle() {
      return this.$t('airdrop.share_page_title')
    },
    truncatedAddress() {
      return _.truncate(this.userAccount || '', {
        length: 10
      })
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

    async getOrderBook(){
      const walletClient = this.walletClient;

      // get order book
      const orderBook = await getOrderBook(walletClient.web3Client);
      this.$set(this, 'orderBook', orderBook);
    },

    async fetchStatus() {
      const walletClient = this.walletClient;
      // Get balance
      const xbtBalance = await getXBTBalance(walletClient.web3Client);
      this.$set(this, 'xbtBalance', xbtBalance);

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

      this.getOrderBook();
    },

    async exchangeToken(ethPurchaseAmount){
      const walletClient = this.walletClient;
      await makeBid(walletClient.web3Client, ethPurchaseAmount);
      await this.fetchStatus();
    }
  }
}
</script>
