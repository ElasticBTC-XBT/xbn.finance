<template>
  <section class="signin section illustration-section-01">
    <div class="container">
      <div class="group-box" v-if="userAccount">
        <el-collapse accordion v-model="activeName" type="single" class="group-item">
          <el-collapse-item name="1">
            <template slot="title">
              <el-row class="">
                <el-col :md="2" :xs="2" class="">
                  <img
                    alt="AI Staking"
                    class="item-icon"
                    src="@/assets/images/pancakeswap.png"
                    
                  />
                </el-col>
                
                <el-col :md="21" :xs="20" class="">
                  <el-col :md="12" :sm="24" class="item-head">
                    <div class="head-content">
                      <p class="head-content-title">CAKE</p>
                      <p class="subText1">TVL $724,631.70</p>
                    </div>
                    <div class="head-content">
                      <p class="rate">128.71%</p>
                      <!-- <p class="rate-desc">Auto-Compounding</p> -->
                    </div>
                  </el-col>
                  <el-col :md="12" sm="24" class="item-head">
                    <div class="head-content">
                      <p class="subText1 font-12">Earn</p>
                      <p class="subText1 font-12">Balance</p>
                    </div>
                    <div class="head-content">
                      <p class="head-content-title">XBN</p>
                      <p class="head-content-title">$0</p>
                    </div>
                  </el-col>
                </el-col>
              </el-row>
            </template>
            <el-row class="item-content">
              <el-col :md="12" class="item-wallet-box">
                <div class="wallet-item wallet-head">
                  <p class="wallet-head-item active">Deposit</p>
                  <div class="div-col"></div>
                  <p class="wallet-head-item">Withdraw</p>
                </div>
                <div class="wallet-item wallet-input">
                  <!-- <p class="input-title">
                    0.5% fee for withdrawals within 3 days
                  </p> -->
                  <div class="input-box">
                    <input class="xbn-input" value="" /><button
                      disabled=""
                      class="xbn-button"
                    >
                      MAX
                    </button>
                  </div>
                  <div class="xbn-value">
                    <p class="input-title">Wallet balance:</p>
                    <p class="input-title value-item">&nbsp;0 XBN</p>
                  </div>
                </div>
                <div class="wallet-item balance">
                  <p class="subText2 input-title">Your balance</p>
                  <p class="subText2 balance-value">
                    <b>$0</b>
                  </p>
                </div>
                <div class="wallet-item">
                  <button class="button button-primary">Connect Wallet</button>
                </div>
              </el-col>
             
              <el-col :md="12" class="claim">
                <p class="subText2 input-title">APY</p>
                <div class="content-box col-2-5">
                  <p class="subText2">128.71%</p>
                  <p class="subText2 input-title">
                    &nbsp; (Pool 108.71% + XBN 13%)
                  </p>
                </div>
                <p class="subText2 input-title">Deposit</p>
                <div class="content-box col-2-5 space-between">
                  <p font-size="xs" class="subText2">0</p>
                  <p font-size="xs" class="subText2 input-title">CAKE</p>
                </div>
                <p class="subText2 input-title">Earned</p>
                <div class="content-box col-2-4 space-between">
                  <div class="sub-box">
                    <p class="subText2">0.0000000 XBN</p>
                    
                  </div>
                </div>
                <button disabled="" class="claim-btn">Claim</button>
                <p class="subText2 input-title">BscScan</p>
                <a
                  target="_blank"
                  href="https://bscscan.com/address/0xa69AC402a8Afe80C4Db293baF231242242A131Af"
                  class="sc-hKwCoD halVEy"
                  >0xa69AC...131Af</a
                >
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </div>

      <div v-else>
        <wallet-not-connect @connect-wallet="connectWallet"/>
      </div>
    </div>
  </section>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutDefault.vue";
// import sections
// import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";
import { SectionProps } from "@/utils/SectionProps.js";
import moment from "moment";
// import CGenericSection from '@/comTo get XBT, please follow ponents/sections/GenericSection.vue'
// import CButton from "@/components/elements/Button.vue";

// import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
// import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";
// import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
// import CImage from '@/components/elements/Image.vue'
import WalletNotConnect from "@/components/sections/WalletNotConnect";
import {getWeb3Client} from "@/libs/web3";

export default {
  name: "AiStaking",
  components: {
    WalletNotConnect
    // CSectionHeader,
    // CGenericSection,
    // CButton,
    // VueGoodshareFacebook,
    // VueGoodshareReddit,
    // VueGoodshareTwitter,
    // CImage
  },
  mixins: [SectionProps],

  created() {
    this.$emit("update:layout", CLayout);
  },

  data() {
    // let v = this;
    return {
      sectionHeader: {
        title: "XBN AI Staking",
        paragraph: "AI Staking",
      },
      reward: 0,
      currentPool: 0,
      userBalance: 0,
      waitingTime: 0,
      userAccount: null,
      walletClient: {},
      activeName: '1'
    };
  },

  computed: {
    pageUrl() {
      return "https://xbn.finance";
    },
    pageTitle() {
      return this.$t("airdrop.share_page_title");
    },
    nextAvailableClaimDate() {
      const lang = localStorage.getItem("lang") || "en";
      return moment(this.waitingTime).lang(lang).format("llll");
    },
    availableToClaim() {
      return new Date() >= new Date(this.waitingTime);
    },
  },

  mounted() {},

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
  },
};
</script>

<style>
.group-box {
  width: 800px;
  margin: 0 auto;
  font-size: 16px;
  max-width: 100%;
}
.group-item {
  margin: 1rem 0.5rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  border: 0.0625rem solid rgba(134, 134, 134, 0.3);
  border-radius: 1rem;
  position: relative;
}

.item-icon {
  box-sizing: border-box;
  height: 38px;
  max-width: 100%;
  max-height: 100%;
  display: inherit;
  margin-top: 1.5rem;
}

.item-head {
  display: flex;
  box-sizing: border-box;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
}
.head-content {
  display: grid;
  box-sizing: border-box;
  padding: 0.8rem 0.8rem 0.8rem 0;
}
.group-box p {
  margin: 0;
}
.head-content .subText1 {
  font-size: 14px;
  font-weight: bold;
}
.group-box .head-content-title {
  font-weight: bold;
}
.rate {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0px;
  text-shadow: rgb(255 214 0) 0px 0px 25px;
  text-transform: none;
  white-space: nowrap;
}
.rate-desc {
  font-weight: bold;
  font-size: 0.55rem;
}
.font-12 {
  font-size: 0.6rem;
}
.item-content {
  border-top: 1px solid rgba(134, 134, 134, 0.3);
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}
.item-wallet-box {
  display: grid;
  box-sizing: border-box;
  gap: 2.4rem;
  grid-template-columns: 1fr;
  grid-area: atm / atm / atm / atm;
  padding-right: 1rem;
  border-right: 1px solid rgba(134, 134, 134, 0.3);
}
.wallet-head {
  display: grid;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: start;
  grid-auto-flow: column;
  gap: 0.75rem;
}
.div-col {
  box-sizing: border-box;
  border-width: 0px 0px 0px 0.125rem;
  border-image: initial;
  border-style: solid;
  border-color: rgba(134, 134, 134, 0.3);
  height: 1rem;
}
.input-title {
  margin: 0px;
  text-shadow: none;
  text-transform: none;
  white-space: nowrap;
  font-size: 0.7rem;
  font-weight: 500;
}
.claim {
  display: grid;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  align-content: start;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: 80px repeat(2, 1fr);
  grid-template-rows: repeat(5, 40px);
  row-gap: 1rem;
  grid-area: performance / performance / performance / performance;
  padding-left: 1rem;
}
.wallet-head-item {
  font-weight: 600;
  margin: 0px;
  text-shadow: none;
  text-transform: none;
  white-space: nowrap;
  font-size: 0.7rem;
  cursor: pointer;
}
.wallet-head-item.active {
  color: rgb(243, 193, 17);
}
.input-box {
  box-sizing: border-box;
  width: 100%;
  grid-auto-flow: column;
  position: relative;
  display: grid;
}
.wallet-input {
  display: grid;
  justify-items: end;
}
.xbn-input {
  padding: 0rem 3.5rem 0 0.4rem;
  font-size: 0.875rem;
  border: 0px;
  background-color: rgba(168, 168, 168, 0.356);
  border-radius: 0.8rem;
  height: 44px;
  width: 100%;
  font-weight: 700;
  outline: none;
  cursor: pointer;
}
.xbn-button {
  font-size: 0.7rem;
  font-weight: 700;
  background-color: rgba(177, 177, 177, 0.637);
  border-radius: 14px;
  border: 0px;
  padding: 0.5rem 0.75rem;
  margin: 0.25rem;
  right: 0px;
  top: 0px;
  bottom: 0px;
  position: absolute;
  cursor: pointer;
}
.xbn-button:disabled {
  opacity: 0.5;
  filter: saturate(60%);
}
.xbn-value {
  display: flex;
  justify-items: end;
}
.input-title {
  color: #637899;
  font-weight: 600;
}
.xbn-value .input-title.value-item {
  color: #455c80;
}
.wallet-item {
  display: grid;
}
.balance {
  justify-items: center;
}
.balance-value {
  font-size: 1rem;
}
.content-box {
  display: flex;
}
.content-box.col-2-5 {
  box-sizing: border-box;
  grid-column: 2 / 5;
}
.content-box.col-2-4 {
  grid-column: 2 / 4;
  grid-auto-flow: column;
  display: grid;
}
.space-between {
  box-sizing: border-box;
  -webkit-box-pack: justify;
  justify-content: space-between;
  grid-auto-flow: column;
}
.content-box .sub-box {
  display: grid;
}
.claim .subText2 {
  line-height: 1;
  font-weight: 600;
}
.claim-btn {
  border: 0px;
  border-radius: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  background-color: rgba(177, 177, 177, 0.637);
  font-size: 0.7rem;
  padding: 0.4rem 0.75rem;
  grid-column: initial;
  justify-self: end;
}

.group-item.el-collapse{
  border-color: rgba(134, 134, 134, 0.3);
}
.group-item .el-collapse-item__header {
    display: inherit;
    align-items: inherit;
    height: inherit;
    line-height: inherit;
    background-color: inherit;
    color: inherit;
    cursor: pointer;
    border-bottom: inherit;
    font-size: inherit;
    font-weight: inherit;
    transition: border-bottom-color .3s;
    outline: inherit;
}
.group-item .el-collapse-item__arrow{
  font-size: 1.3rem;
    position: absolute;
    right: 0;
    top: 1.7rem;
}
.group-item .el-collapse-item__content, .group-item .el-collapse-item__wrap{
  background: inherit;
  color: inherit;
  font-size: inherit;
}
@media screen and (max-width: 25rem) {
  .group-item {
    margin: 1rem 0;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .item-icon {
    margin-top: 3rem;
  }

  .item-head:first-child .head-content {
    padding-bottom: 0rem;
  }
  .item-head:last-child .head-content {
    padding-top: 0rem;
  }
  .item-head .head-content:last-child {
    padding-right: 0.2rem;
  }
  .item-head .head-content:first-child {
    padding-left: 0.4rem;
  }
  .claim .subText2.input-title {
    font-size: 0.65rem;
  }
  .claim {
    padding-left: 0;
    margin-top: 1rem;
  }
  .item-wallet-box {
    border-width: 0px;
    padding-right: 0px;
  }
  .head-content{
    padding-right: 0.4rem;
  }
}
</style>
