<template>
  <section class="signin section illustration-section-01">
    <div class="container">
      <div v-if="userAccount">
      <h1 style="text-align:center;">Baking Cake earns XBN <br/>
      <span style="color:darkyellow; font-size:28px; color:#dd9c3c">optimized yield</span></h1>
        
      <div class="group-box" >
        <table>
          
            <tr>
              <td colspan="2" style="text-align:center;">

                <img
                    alt="AI Staking"
                    class="item-icon"
                    src="@/assets/images/pancakeswap.png"/> <br/>

                     <span class="rate"> APR 108%</span><br/>
                  <span class="rate">
                      TVL  ${{ userBakingData.tvl }}</span>
                     
            </td>
          </tr>
          <tr>
            <td style="text-align:center" colspan="2">

              <br/>
                  <span class="wallet-head-item" :class="userState=='deposit'?'active':''"  @click="changeState('deposit')">Deposit</span>
                  | 
                  <span class="wallet-head-item"  :class="userState=='withdraw'?'active':''"  @click="changeState('withdraw')">Withdraw</span>
                  <br/>
                  <br/>
              
            
              
                <div class="wallet-item wallet-input">
                  <!-- <p class="input-title">
                    0.5% fee for withdrawals within 3 days
                  </p> -->
                  <div class="input-box">
                    <input v-model="depositBalance" class="xbn-input" type="number" /><button @click="fillMax()" class="xbn-button button-primary">
                      MAX
                    </button>
                  </div>
              
                </div>
                
                <div class="" style="text-align:center;">
                  <br>
                  <p class="">Wallet balance: &nbsp;
                    <span v-if="userState=='deposit'">
                     {{ Math.round(userBakingData.cakeBalance * 1000,3)/1000 }} </span>
                      <span v-if="userState=='withdraw'">
                     {{ Math.round(userBakingData.stakingBalance * 1000,3)/1000 }} </span>
                    <a href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" target="_blank">CAKE</a></p>
                  
                  <br>
                  <button class="button button-primary" @click="deposit()" v-if="userState=='deposit'" >Deposit</button>
                  <button class="button button-primary" @click="withdraw()" v-if="userState=='withdraw'">Withdraw</button> &nbsp;
                  <button class="button button-primary" @click="withdrawAll()" v-if="userState=='withdraw'">Exit: Withdraw All</button>
                </div>

            </td>
            </tr>

           <tr>
             <tr>
                    <td>Contract
                    </td>
                    <td> <p class="subText2"><a
                  target="_blank"
                  href="https://bscscan.com/address/0xc50323b2FB63A68cf5C039fEBAd6B8ECc6Be4328"
                  class="sc-hKwCoD halVEy">0xc5032...e4328</a></p>
                    </td>
              </tr><tr>
                    <td>APR </td>
                    <td>108% &nbsp; (one of the best yield for staking Cake)</td>
              </tr><tr>
                    <td>Deposit
                    </td>
                    <td> <p font-size="xs" class="subText2">{{ userBakingData.stakingBalance }} CAKE</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Earned
                    </td>
                    <td> <p class="subText2">{{ userBakingData.earned }} XBN</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td colspan="2" style="text-align:center;">
                
                      <button :disabled="!userBakingData.earned" class="button button-primary" @click="claim()" >Claim</button>
                
                    </td>
                  </tr>
        </table>
       
             
            
      </div>
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
// import moment from "moment";
// import CGenericSection from '@/comTo get XBT, please follow ponents/sections/GenericSection.vue'
// import CButton from "@/components/elements/Button.vue";

// import CImage from '@/components/elements/Image.vue'
import WalletNotConnect from "@/components/sections/WalletNotConnect";
import {getWeb3Client} from "@/libs/web3";
import {getUserBakingData,depositCake,claimXBN,withdrawCake,withdrawCakeAll} from "@/libs/baking-cake";

export default {
  name: "AiStaking",
  components: {
    WalletNotConnect

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
      // currentPool: 0,
      // userBalance: 0,
      
      // cakeBalance:0,
      userAccount: null,
      walletClient: {},
      activeName: '1',
      tvl:null,
      depositBalance: 0,
      userBakingData: {},
      userState: 'deposit',
    };
  },

  computed: {
    pageUrl() {
      return "https://xbn.finance";
    },
    pageTitle() {
      return this.$t("airdrop.share_page_title");
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
    async fetchStatus(setDepositBalance = false) {
      // eslint-disable-next-line no-console
      console.info("fetchStatus");

      const walletClient = this.walletClient;
      // Get balance
      const userBakingData = await getUserBakingData(walletClient.web3Client);
      this.$set(this, 'userBakingData', userBakingData);
      if (setDepositBalance) {
        this.fillMax();
      }
    },
    fillMax(){
      if(this.userState=='deposit'){
        let tempBalance = this.userBakingData.cakeBalance - 1/10**18;
        if (tempBalance < 0) {  
          tempBalance = 0;
        }

        this.$set(this, 'depositBalance',tempBalance );
      } else {

        let tempBalance = this.userBakingData.stakingBalance - 1/10**18;
        if (tempBalance < 0) {  
          tempBalance = 0;
        }
        this.$set(this, 'depositBalance', tempBalance);
      }
    },   
    changeState(newState){
      this.$set(this, 'userState', newState);
      this.fillMax();
    },   
    async deposit(){
      await depositCake(this.walletClient.web3Client, this.depositBalance);
    },
    async withdraw(){
      await withdrawCake(this.walletClient.web3Client, this.depositBalance);
    },
    async withdrawAll(){
      await withdrawCakeAll(this.walletClient.web3Client);
    },
    async claim(){
      await claimXBN(this.walletClient.web3Client);
    },

    async handleGetInitialData() {
      const accounts = await this.walletClient.web3Client.eth.getAccounts();
      this.$set(this, 'userAccount', accounts.length > 0 ? accounts[0] : null);
      await this.fetchStatus(true);
    
      let v = this;
      setInterval(function(){ v.fetchStatus() }, 5000);
      
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
  padding-right: 3rem;
  /* margin-right: 3em; */
  /* border-right: 1px solid rgba(134, 134, 134, 0.3); */
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

  .button {
    margin: 0.5rem 0;
    padding: 0.5rem 0.75rem;
  }
}
</style>
