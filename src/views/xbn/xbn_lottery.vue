<template>
  <div>
    <section
        class="signin illustration-section-01"
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
            <div class="flex-row" style="justify-content: space-around">
              <div style="flex: 1">
                <h4>XBN Lottery</h4>
                <p style="font-size: 14px">
                  Be the last ticket buyer when countdown expires to win the pot!
                <div style="font-size: 12px"><a href="https://xbn.finance/" target="_blank">Rules & Fees</a></div>
              </div>

              <div style="flex: 3; text-align: right">
                <h4>Current Pot</h4>
                <h3>{{ currentRoundInfo.currentPot | numeral }} BNB</h3>
                <p>{{ currentRoundInfo.currentPot * priceFeedData.Price | numeral }} USD</p>
              </div>

            </div>

            <div class="center-content">
              <h3>Countdown</h3>
              <countdown :time="currentRoundInfo.endAt - new Date().getTime()"
                         v-slot="{ days, hours, minutes, seconds }">
                <div class="clock-display" style="margin: 100px">
                  <span>{{ days }} : </span><span>{{ hours }} : </span><span>{{ minutes }} : </span><span>{{
                    seconds
                  }}</span>
                </div>
              </countdown>

              <h4 class="blink_me" style="font-style: italic"> {{ currentRoundInfo.currentLead | truncate }} is going to
                take the pot </h4>
            </div>

            <div style="max-width: 60%; margin: 150px auto">
              <div class="mb-32 center-content"><h2>Buy Tickets</h2></div>
              <!--              <div class="mb-24">-->
              <!--                <el-radio v-model="buyOption" label="xbn">Buy with XBN</el-radio>-->
              <!--                <el-radio v-model="buyOption" label="bnb">Buy with BNB</el-radio>-->
              <!--              </div>-->
              <div class="mb-24">
                <div style="text-align: right">Balance: {{ playerVault.currentBNBBalance | numeral }} BNB</div>
                <el-input v-model="amountBuy">
                  <el-button slot="append" @click="amountBuy = playerVault.currentBNBBalance">Max</el-button>
                </el-input>
              </div>
              <div class="mb-24">
                WILL GET YOU
                APPROXIMATELY
                {{ estimatedTickets | numeral }}
                TICKETS
              </div>
              <div class="center-content" style="margin-top: 32px">
                <el-button :disabled="!amountBuy || amountBuy > playerVault.currentBNBBalance" @click="buyTickets">Buy Tickets</el-button>
              </div>
            </div>

            <div style="margin-top: 60px">
              <div style="display:block; width: 50%; padding: 24px; word-wrap: break-word; float: left">
                <div style="margin-bottom: 64px" class="center-content"><h3>Your Vault</h3></div>
                <div>
                  <div>
                    <h5>Your Address</h5>
                    <div>{{ playerVault.address | truncate }}</div>
                  </div>

                  <div>
                    <h5>Tickets</h5>
                    <p>{{ playerVault.tickets | numeral }}</p>
                  </div>

                  <div>
                    <h5>Winnings</h5>
                    <p>{{ playerVault.winnings | numeral }} BNB</p>
                  </div>

                  <div>
                    <h5>General</h5>
                    <p>{{ playerVault.general | numeral }} BNB</p>
                  </div>

                  <div>
                    <h5>Spent</h5>
                    <p>{{ playerVault.spentBNB | numeral }} BNB</p>
                  </div>

                  <div style="margin-top: 60px">
                    <el-button @click="withdraw">Withdraw All</el-button>
                  </div>
                </div>

              </div>

              <div style="display:block; width: 50%; word-wrap: break-word; padding: 24px; float: right">
                <div style="margin-bottom: 64px" class="center-content"><h3>Round Info</h3></div>
                <div>
                  <div>
                    <h5>Round ID</h5>
                    <div>{{ currentRoundInfo.roundId }}</div>
                  </div>

                  <div>
                    <h5>Last Ticket Buyer</h5>
                    <p>{{ currentRoundInfo.currentLead | truncate }}</p>
                  </div>

                  <div>
                    <h5>Total Ticket Boughts</h5>
                    <p>{{ currentRoundInfo.tickets | numeral }}</p>
                  </div>

                  <div>
                    <h5>Round Started At</h5>
                    <p>{{ currentRoundInfo.startAt | date }}</p>
                  </div>

                  <div>
                    <h5>Round Ending At</h5>
                    <p>{{ currentRoundInfo.endAt | date }}</p>
                  </div>
                  <div>
                    <h5>Burn Fund</h5>
                    <p>{{ currentRoundInfo.burnFund | numeral }} BNB</p>
                  </div>

                </div>

              </div>
            </div>

            <!--/c-generic-section-->
          </div>

          <div v-else>
            <c-section-header tag="h1" :data="sectionHeader" class="center-content"/>

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
            <h1>Successfully</h1>

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
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import {buyTicket, calcKeysReceived, getCurrentRoundInfo, getPlayerVault, withdraw} from "@/libs/xbn-lottery";
import * as numeral from 'numeral';
import _ from 'lodash';

export default {
  name: 'AirDrop',
  components: {
    CSectionHeader,
    // CGenericSection,
    CButton,
    VueGoodshareFacebook,
    VueGoodshareReddit,
    VueGoodshareTwitter,
    // CImage
  },
  mixins: [SectionProps],

  watch: {
    amountBuy() {
      this.getTicketReceive();
    }
  },

  filters: {
    date(value) {
      return moment(value).format('llll');
    },
    numeral(val) {
      return numeral(val).format('0,00.00000')
    },
    truncate(val) {
      return _.truncate(val, {
        'length': 15,
        'omission': '...'
      })
    }
  },

  created() {
    this.$emit('update:layout', CLayout);

    this.$root.$emit('updateWalletClient', () => {
      this.connectWallet();
    });
  },

  data() {
    return {
      sectionHeader: {
        title: 'XBN Lottery',
      },
      userAccount: null,
      walletClient: {},
      buyOption: 'bnb',
      amountBuy: 0,
      playerVault: {},
      currentRoundInfo: {},
      priceFeedData: {},
      estimatedTickets: 0
    }
  },

  computed: {
    pageUrl() {
      return 'https://elasticbitcoin.org/airdrop'
    },
    pageTitle() {
      return 'XBN Lottery'
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
    async fetchPriceData() {
      const bnbPrice = await fetch('https://api.diadata.org/v1/foreignQuotation/CoinMarketCap/BNB');
      const priceFeed = await bnbPrice.json();
      this.$set(this, 'priceFeedData', priceFeed);
    },
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

    async getPlayerVault() {
      const walletClient = this.walletClient;
      const playerVault = await getPlayerVault(walletClient.web3Client);
      this.$set(this, 'playerVault', playerVault);
    },

    async getCurrentRoundInfo() {
      const walletClient = this.walletClient;
      const currentRoundInfo = await getCurrentRoundInfo(walletClient.web3Client);
      this.$set(this, 'currentRoundInfo', currentRoundInfo);
    },

    async getTicketReceive() {
      const walletClient = this.walletClient;

      const result = await calcKeysReceived(
          walletClient.web3Client,
          {
            roundId: this.currentRoundInfo.roundId,
            amountInBNB: this.amountBuy
          }
      );

      this.$set(this, 'estimatedTickets', result);
    },

    async withdraw() {
      const walletClient = this.walletClient;
      await withdraw(walletClient.web3Client);
      this.$refs.success.open();
    },

    async buyTickets() {
      const walletClient = this.walletClient;
      await buyTicket(walletClient.web3Client, {amountBuy: this.amountBuy});
      this.$refs.success.open();
    },

    async fetchStatus() {
      this.getCurrentRoundInfo();
      this.getPlayerVault();
      this.fetchPriceData();
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

.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

.clock-display {
  font-size: 100px;
  font-weight: bold;
  font-style: italic;
}
</style>
