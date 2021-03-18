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

          <div v-if="userAccount" class="center-content">
            <div class="is-justify-center">
              <el-input v-model="quantity" label="Quantity" style="width: 30%;margin-right: 30px">
                <template slot="prepend">Quantity</template>
              </el-input>
              <el-input v-model="amount" label="Amount" style="width: 30%;margin-right: 30px">
                <template slot="prepend">Amount</template>
              </el-input>
              <c-button color="primary" wide-mobile target="_blank" @click="generateQuestCode">
                Generate Quest Code
              </c-button>
            </div>

            <h1> Current Codes </h1>
            <div style="margin-top: 20px"
                 class="is-justify-center">
              <el-input v-model="searchTerm" label="Quantity" style="width: 70%;margin-right: 30px">
                <template slot="prepend">Full text search</template>
              </el-input>
              <c-button color="primary" wide-mobile target="_blank" @click="exportExcel">
                Export Excel
              </c-button>
            </div>
            <el-table
                style="margin-top: 20px"
                empty-text="No data available"
                :data="displayedData"
                max-height="560">
              <el-table-column prop="createdAt" label="Created At">
                <template slot-scope="scope">
                  {{ scope.row.createdAt | date }}
                </template>
              </el-table-column>
              <el-table-column
                  prop="rewardCode" label="Reward Code"
                  width="150">
              </el-table-column>
              <el-table-column
                  :filter-method="filterHandler"
                  :filtered-value="['1']"
                  :filters="[{text: 'active', value: '1'}, {text: 'deleted', value: '0'}]"
                  prop="status"
                  label="Status"></el-table-column>
              <el-table-column
                  filter-placement="bottom-end"
                  :filters="amountFilters"
                  :filter-method="filterHandler"
                  prop="claimableAmount"
                  label="Amount">
              </el-table-column>
              <el-table-column prop="claimedBy" label="Claimed By">
              </el-table-column>
              <el-table-column prop="claimedAt" label="Claimed At">
                <template slot-scope="scope">
                  {{ scope.row.claimedAt | date }}
                </template>
              </el-table-column>
            </el-table>
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
            <h1>Successful</h1>
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
import _ from 'lodash';
import CButton from '@/components/elements/Button.vue'
import {getWeb3Client} from "@/libs/web3";
import {
  generateQuestCode,
  getQuestAirdropContractBalance,
  getQuestCodeMeta,
  getQuestCodes
} from "@/libs/xbn-quest-airdrop";
import * as numeral from 'numeral';
import {json2excel} from "js2excel";

export default {
  name: 'AdminQuestAirdrop',
  components: {
    CSectionHeader,
    // CGenericSection,
    CButton,
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
        title: 'Quest Airdrop Admin',
      },
      userAccount: null,
      walletClient: {},
      searchTerm: '',

      // data
      contractFundBalance: 0,
      amount: 10,
      quantity: 10,
      questCodes: []
    }
  },
  filters: {
    numeral(val) {
      return numeral(val).format('0,0.0');
    },
    date(val) {
      const lang = localStorage.getItem('lang') || 'en';
      return moment(Number(val) * 1000).locale(lang).fromNow();
    },
    truncatedAddress(val) {
      return _.truncate(val || '', {
        length: 26
      })
    }
  },
  computed: {
    pageUrl() {
      return 'https://elasticbitcoin.org/airdrop'
    },
    pageTitle() {
      return this.$t('airdrop.share_page_title')
    },
    amountFilters() {
      const uniqueAmounts = _.uniq(this.questCodes.map(code => code.claimableAmount));
      return uniqueAmounts.map(elm => ({
        text: elm,
        value: elm
      }));
    },
    displayedData() {
      return this.questCodes.filter(elm => JSON.stringify(elm).includes(this.searchTerm));
    }
  },

  mounted() {
    this.handlePageOnLoad();
  },

  methods: {
    exportExcel(){
      json2excel({
        data: this.questCodes,
        name: 'user-info-data',
        formateDate: 'yyyy/mm/dd'
      });
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
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

    async fetchStatus() {
      const walletClient = this.walletClient;
      // get contract fund balance
      const contractFundBalance = await getQuestAirdropContractBalance(walletClient.web3Client);
      this.$set(this, 'contractFundBalance', contractFundBalance);

      // get quest code
      this.handleLoadQuestCodes();
    },

    async generateQuestCode() {
      const walletClient = this.walletClient;
      await generateQuestCode(
          walletClient.web3Client,
          this.quantity.toString(),
          this.amount.toString()
      );
      await this.fetchStatus();
      this.$refs.success.open();
    },

    async handleLoadQuestCodes() {
      const walletClient = this.walletClient;

      const questCodes = await getQuestCodes(walletClient.web3Client);

      const questCodesWithMetaData = await Promise.all(
          questCodes.map(async code => {
            return getQuestCodeMeta(walletClient.web3Client, code)
          })
      );

      this.$set(this, 'questCodes', questCodesWithMetaData);
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
