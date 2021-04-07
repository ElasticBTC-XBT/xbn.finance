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
                <h3>100 BNB</h3>
                <p>4,000 USD</p>
              </div>

            </div>

            <div class="center-content">
              <h3>Countdown</h3>
              <countdown :time="2 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
                <div class="clock-display" style="margin: 100px">
                  <span>{{ days }} : </span><span>{{ hours }} : </span><span>{{ minutes }} : </span><span>{{
                    seconds
                  }}</span>
                </div>
              </countdown>

              <h4 class="blink_me" style="font-style: italic"> 0x0000 is going to take the pot </h4>
            </div>

            <div style="max-width: 60%; margin: 150px auto">
              <div class="mb-32 center-content"><h2>Buy Tickets</h2></div>
              <div class="mb-24">
                <el-radio v-model="buyOption" label="xbn">Buy with XBN</el-radio>
                <el-radio v-model="buyOption" label="bnb">Buy with BNB</el-radio>
              </div>
              <div class="mb-24">
                <div style="text-align: right">Balance: 10 BNB</div>
                <el-input v-model="amountBuy">
                  <el-button slot="append">Max</el-button>
                </el-input>
              </div>
              <div class="mb-24">
                WILL GET YOU
                APPROXIMATELY
                0.0000
                TICKETS
              </div>
              <div>
                <el-button>Buy Tickets</el-button>
              </div>
            </div>

            <div style="margin-top: 60px">
              <div style="display:block; width: 50%; padding: 24px;float: left">
                <div style="margin-bottom: 64px" class="center-content"><h3>Your Vault</h3></div>
                <div>
                  <div>
                    <h6>Your Address</h6>
                    <div>0x00</div>
                  </div>

                  <div>
                    <h6>Tickets</h6>
                    <p>12</p>
                  </div>

                  <div>
                    <h6>Winnings</h6>
                    <p>1 BNB</p>
                  </div>

                  <div>
                    <h6>General</h6>
                    <p>1 BNB</p>
                  </div>

                  <div>
                    <h6>Spent</h6>
                    <p>1 BNB</p>
                  </div>

                  <div class="center-content">
                    <el-button>Withdraw All</el-button>
                  </div>
                </div>

              </div>

              <div style="display:block; width: 50%; padding: 24px; float: right">
                <div style="margin-bottom: 64px" class="center-content"><h3>Round Info</h3></div>
                <div>
                  <div>
                    <h6>Round ID</h6>
                    <div>0x00</div>
                  </div>

                  <div>
                    <h6>Last Ticket Buyer</h6>
                    <p>12</p>
                  </div>

                  <div>
                    <h6>Total Ticket Boughts</h6>
                    <p>1 BNB</p>
                  </div>

                  <div>
                    <h6>Round Started At</h6>
                    <p>1 BNB</p>
                  </div>

                  <div>
                    <h6>Round Ending At</h6>
                    <p>1 BNB</p>
                  </div>
                  <div>
                    <h6>Soup Burn Fund</h6>
                    <p>1 BNB</p>
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
            <h1>{{ $t('airdrop.xbt_coming') }}</h1>
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
// import CGenericSection from '@/components/sections/GenericSection.vue'
import CButton from '@/components/elements/Button.vue'
import {getWeb3Client} from "@/libs/web3";
import {adjustParams, claimAirdrop, getParticipantStatus} from "@/libs/xbt-airdrop";
import {getContractXBNFundBalance, getXBNBalance} from "@/libs/xbt";
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
// import CImage from '@/components/elements/Image.vue'

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
      contractFundBalance: 0,
      xbtBalance: 0,
      waitingTime: 0,
      userAccount: null,
      walletClient: {},
      buyOption: 'bnb',
      amountBuy: 0
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
      const receipt = await getXBNBalance(walletClient.web3Client);
      this.$set(this, 'xbtBalance', receipt);

      // Get participant status
      const result = await getParticipantStatus(walletClient.web3Client);
      this.$set(this, 'waitingTime', result.participantStatus * 1000);

      // Get participant status
      const contractFundBalance = await getContractXBNFundBalance(walletClient.web3Client);
      this.$set(this, 'contractFundBalance', contractFundBalance);
    },

    async claimAirdrop() {
      const walletClient = this.walletClient;
      await claimAirdrop(walletClient.web3Client);
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
