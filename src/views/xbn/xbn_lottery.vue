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

                        <h1 class="title-main">
                            FOMOLOTTO
                        </h1>

                        <div class="display-flex justify-center-between">
                            <div class="card-wrapper current-pot-wrapper">

                                <p class="title">Current Pot To Win</p>

                                <p style="font-size: 16px">Current Pot :
                                    <span class="pot-bold">
                                    {{ currentPotDisplay | numeral }} BNB
                                  </span>
                                </p>

                                <p style="font-size: 16px" v-if="cashToTakeDisplay>0">Cash to take :
                                    <span class="pot-bold">
                                  {{ cashToTakeDisplay | numeral }} USD
                                   </span>
                                </p>

                                <p class="blink_text blink_me" style="font-style: italic;">
                                    <a :href="'https://bscscan.com/address/' + currentRoundInfo.currentLead"
                                       target="_blank"
                                       style="color: red!important;">
                                        {{ currentRoundInfo.currentLead | truncate }}
                                        is going to take the pot if s/he is the last one to buy ticket
                                    </a>
                                </p>

                            </div>

                            <div class="card-wrapper buy-ticket-wrapper">

                                <div class="mb-32 center-content">
                                    <p class="title">Buy Tickets</p>
                                </div>

                                <!--              <div class="mb-24">-->
                                <!--                <el-radio v-model="buyOption" label="xbn">Buy with XBN</el-radio>-->
                                <!--                <el-radio v-model="buyOption" label="bnb">Buy with BNB</el-radio>-->
                                <!--              </div>-->
                                <div class="mb-24">
                                    <div class="balance">
                                        Balance: <b style="color: black"> {{ playerVault.currentBNBBalance | numeral }}
                                        BNB </b>
                                    </div>
                                    <el-input v-model="amountBuy">
                                        <el-button slot="append" @click="amountBuy = playerVault.currentBNBBalance">Max
                                        </el-button>
                                    </el-input>
                                </div>
                                <div class="estimated-ticket">
                                    WILL GET YOU APPROXIMATELY :
                                    <b style="color: black">{{ estimatedTickets * 0.9 | numeral }} TICKETS</b>
                                </div>
                                <div class="text-warning">
                                    You only have chance to win if buying >=1 ticket
                                </div>

                                <div class="center-content" style="margin-top: 32px">
                                    <el-button :loading="loadingBuy"
                                               class="button-primary"
                                               :disabled="estimatedTickets < 1|| !amountBuy || amountBuy > playerVault.currentBNBBalance"
                                               @click="buyTickets">Buy Tickets
                                    </el-button>
                                </div>
                            </div>
                        </div>


                        <div v-if="previousRoundInfo.roundId" class="card-wrapper winner-lottery-wrapper">

                            <div class="part-1">
                                <img :src="require('@/assets/images/medal.png')"
                                     width="100%"
                                />
                            </div>
                            <div class="part-2">
                                The winner of latest round is
                                <br>
                                <a :href="'https://bscscan.com/address/' + previousRoundInfo.currentLead"
                                   target="_blank">
                                    {{ previousRoundInfo.currentLead | truncate }}
                                </a>
                            </div>
                        </div>
                        <div v-else class="card-wrapper winner-lottery-wrapper">

                            <div class="part-1">
                                <img :src="require('@/assets/images/medal.png')"
                                     width="100%"
                                />
                            </div>
                            <div class="part-2">
                                The current winner is
                                <br>
                                <a :href="'https://bscscan.com/address/' + currentRoundInfo.currentLead"
                                   target="_blank">
                                    {{ currentRoundInfo.currentLead | truncate }}
                                </a>
                            </div>
                        </div>

                        <div class="display-flex justify-center-between mt-60 mt-sm-0">
                            <div class="card-wrapper count-down-wrapper center-content">
                                <p class="title">Countdown until we have new winner</p>
                                <countdown :time="currentRoundInfo.timeLeft"
                                           v-slot="{ days, hours, minutes, seconds }">
                                    <div class="clock-display">
                                        <span>{{ days }} : </span>
                                        <span>{{ hours }} : </span>
                                        <span>{{ minutes }} : </span>
                                        <span> {{ seconds }}</span>
                                    </div>
                                </countdown>
                            </div>
                            <div class="xbn-lottery-wrapper pot-info">
                                <div class="card-wrapper xbn-lottery">
                                    <p class="title">FOMOLOTTO</p>
                                    <p style="font-size: 16px">
                                        Be the last ticket buyer when countdown expires to win the pot!
                                    <div style="font-size: 14px">
                                        <a href="https://www.notion.so/xbnfinance/XBN-FomoLotto-Rules-Fees-9a0b49fc895d4e7ea8e8326d55fd9e46 "
                                           target="_blank">
                                            Rules & Fees
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-wrapper vault-wrapper">
                            <div class="part-1">
                                <div class="center-content">
                                    <p class="title">Your Vault</p>
                                </div>
                                <div>
                                    <div>
                                        <p class="title-1">Your Address</p>
                                        <p class="title-2">
                                            <a :href="'https://bscscan.com/address/' + playerVault.address"
                                               target="_blank">
                                                {{ playerVault.address | truncate }}
                                            </a>
                                        </p>
                                    </div>

                                    <div>
                                        <p class="title-1">Tickets</p>
                                        <p class="title-2">{{ playerVault.tickets | numeral }}</p>
                                    </div>

                                    <div>
                                        <p class="title-1">Winnings</p>
                                        <p class="title-2">{{ playerVault.winnings | numeral }} BNB</p>
                                    </div>

                                    <div>
                                        <p class="title-1">Your Earnings</p>
                                        <p class="title-2">{{ playerGeneralDisplay | numeral }} BNB
                                        </p>
                                      <p>Make sure increase gas when withdrawing earnings to avoid network congestion!</p>
                                        <!--                                        <p class="text-warning">Note: You will only receive 90% of this value.</p>-->
                                    </div>

                                    <!--                                    <div>-->
                                    <!--                                        <p class="title-1">Spent</p>-->
                                    <!--                                        <p class="title-2">{{ playerVault.spentBNB | numeral }} BNB</p>-->
                                    <!--                                    </div>-->

                                    <div class="button-wrapper">
                                        <el-button class="button-primary" :loading="loadingWithdraw" @click="withdraw">
                                            Withdraw Earnings
                                        </el-button>
                                    </div>
                                </div>
                            </div>

                            <div class="part-2">
                                <div class="center-content">
                                    <p class="title">Round Info</p>
                                </div>
                                <div>
                                    <div>
                                        <p class="title-1">Round ID</p>
                                        <p class="title-2">{{ currentRoundInfo.roundId }}</p>
                                    </div>

                                    <div>
                                        <p class="title-1">Last Ticket Buyer</p>
                                        <p class="title-2">
                                            <a :href="'https://bscscan.com/address/' + currentRoundInfo.currentLead"
                                               target="_blank">
                                                {{ currentRoundInfo.currentLead | truncate }}
                                            </a>
                                        </p>
                                    </div>

                                    <div>
                                        <p class="title-1">Total Ticket Boughts</p>
                                        <p class="title-2">{{ currentRoundInfo.tickets | numeral }}</p>
                                    </div>

                                    <div>
                                        <p class="title-1">Round Started At</p>
                                        <p class="title-2">{{ currentRoundInfo.startAt | date }}</p>
                                    </div>

                                    <div>
                                        <p class="title-1">Round Ending At</p>
                                        <p class="title-2">{{ currentRoundInfo.endAt | date }}</p>
                                    </div>
                                    <div>
                                        <p class="title-1">XBN Buying Fund</p>
                                        <p class="title-2">{{ currentRoundInfo.burnFund | numeral }} BNB</p>
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
                            <vue-goodshare-facebook :quote="pageTitle" :page_title="pageTitle" :page_url="pageUrl"
                                                    has_icon
                                                    has_counter title_social="Facebook"/>
                            <vue-goodshare-reddit :page_title="pageTitle" :page_url="pageUrl" has_icon has_counter
                                                  title_social="Reddit"/>
                            <vue-goodshare-twitter :page_title="pageTitle" :page_url="pageUrl" has_icon
                                                   title_social="Twitter"/>
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
    import {
        buyTicket,
        calcKeysReceived,
        getCurrentRoundInfo,
        getPlayerVault,
        getRoundInfo,
        withdraw
    } from "@/libs/xbn-lottery";
    import * as numeral from 'numeral';
    import _ from 'lodash';

    export default {
        name: 'Lottery',
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
                    title: 'FomoLotto',
                },
                userAccount: null,
                walletClient: {},
                buyOption: 'bnb',
                amountBuy: 0.17,
                playerVault: {},
                currentRoundInfo: {},
                previousRoundInfo: {},
                priceFeedData: {},
                estimatedTickets: 0,
                loadingWithdraw: false,
                loadingBuy: false
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
            },
            playerGeneralDisplay() {
                let val = this.playerVault.general

                if (val) {
                    if (isNaN(val))
                        return 0
                    else {
                        let parse = parseFloat(parseFloat(val).toFixed(6)) * 0.9
                        return parse
                    }
                } else {
                    return 0
                }
            },
            currentPotDisplay() {
                let val = this.currentRoundInfo.currentPot

                if (val) {
                    if (isNaN(val))
                        return 0
                    else {
                        let parse = parseFloat(parseFloat(val).toFixed(6)) * 0.9
                        return parse
                    }
                } else {
                    return 0
                }
            },
            cashToTakeDisplay() {
              try {
                  let val = this.currentRoundInfo.currentPot * this.priceFeedData.RAW.BNB.USD.PRICE

                  if (val) {
                    if (isNaN(val))
                      return 0
                    else {
                      let parse = parseFloat(parseFloat(val).toFixed(6)) * 0.9
                      return parse
                    }
                  } else {
                    return 0
                  }
                }
              catch(error){
                console.error(`#423 ${error}`)
                return 0;
              }
            }

        },

        mounted() {
            let v = this
            this.handlePageOnLoad();

            setTimeout(function () {
                v.getTicketReceive();
            }, 1000);

            setInterval(function () {
                v.fetchStatus();
            }, 5000);

        },

        methods: {
            async fetchPriceData() {
                const bnbPrice = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD');
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
                console.log(playerVault);
                this.$set(this, 'playerVault', playerVault);
            },

            async getCurrentRoundInfo() {
                const walletClient = this.walletClient;
                const currentRoundInfo = await getCurrentRoundInfo(walletClient.web3Client);
                this.$set(this, 'currentRoundInfo', currentRoundInfo);

                console.log({currentRoundInfo: Number(currentRoundInfo.roundId)});

                if (Number(currentRoundInfo.roundId) >= 2) {
                    const previousRoundInfo = await getRoundInfo(walletClient.web3Client, Number(currentRoundInfo.roundId) - 1);
                    this.$set(this, 'previousRoundInfo', previousRoundInfo);
                }
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
                try {
                    const walletClient = this.walletClient;
                    this.loadingWithdraw = true;
                    await withdraw(walletClient.web3Client);
                    this.loadingWithdraw = false;
                    this.$refs.success.open();
                    this.fetchStatus();
                } catch (e) {
                    this.loadingWithdraw = false;
                }
            },

            async buyTickets() {

                try {
                    const walletClient = this.walletClient;
                    this.loadingBuy = true;

                    if (this.estimatedTickets < 111.22){ // 100 tickets

                      this.amountBuy = this.amountBuy * 111.22/ this.estimatedTickets;
                    }
                    await buyTicket(walletClient.web3Client, {amountBuy: this.amountBuy});
                    this.loadingBuy = false;
                    this.$refs.success.open();
                    this.fetchStatus();
                } catch (e) {
                    this.loadingBuy = false;
                }

            },

            async fetchStatus() {
                this.getCurrentRoundInfo();
                this.getPlayerVault();
                this.fetchPriceData();
                this.getTicketReceive();
            },
        }
    }
</script>

<style>

    .mt-60 {
        margin-top: 60px !important;
    }

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
        font-size: 45px;
        font-weight: bold;
        font-style: italic;
        margin: 50px;
    }

    .pot-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 45%;
    }

    .pot-info .current-pot {
        flex: 3;
    }

    .current-pot-mobile {
        display: none;
    }

    .card-wrapper {
        box-shadow: 0 32px 64px rgb(24 35 52 / 24%);
        background: #FFFFFF;
        padding: 30px;
        background-image: linear-gradient(135deg, #ffffff 80%, #f4b151 100%);
    }


    .count-down-wrapper .title,
    .xbn-lottery-wrapper .title,
    .buy-ticket-wrapper .title,
    .current-pot-wrapper .title,
    .winner-lottery-wrapper .title,
    .vault-wrapper .title {
        font-size: 25px;
        color: black;
        text-align: center;
        font-weight: bold;
    }

    .xbn-lottery-wrapper .blink_text {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        color: red;
    }

    .buy-ticket-wrapper {
        max-width: 45%;
        width: 45%;
    }

    .buy-ticket-wrapper .text-warning {
        font-size: 16px;
        color: red;
    }

    .vault-wrapper .text-warning {
        font-size: 16px;
        color: red;
    }

    .buy-ticket-wrapper .balance {
        font-size: 16px;
    }

    .buy-ticket-wrapper .estimated-ticket {
        font-size: 16px;
    }

    .display-flex {
        display: flex;
        flex-wrap: wrap;
    }

    .justify-center-between {
        justify-content: space-between;
    }

    .vault-wrapper {
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .vault-wrapper .part-1 {
        display: block;
        width: 50%;
        word-wrap: break-word;
        margin-bottom: 50px;
        border-right: 1px solid #cecece;
    }

    .vault-wrapper .part-1 .button-wrapper {
        margin-top: 40px;
        text-align: center;
        padding-bottom: 40px;
    }

    .vault-wrapper .part-2 {
        display: block;
        width: 45%;
        word-wrap: break-word
    }

    .vault-wrapper .center-content {
        margin-bottom: 30px;
    }

    .count-down-wrapper {
        width: 45%;
    }

    .winner-lottery-wrapper {
        width: 60%;
        margin: 50px auto 0px auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .winner-lottery-wrapper .part-1 {
        width: 20%;
    }

    .winner-lottery-wrapper .part-2 {
        width: 80%;
        padding-left: 30px;
        font-size: 25px;
        line-height: 2;
        color: black;
    }

    /*.xbn-lottery-wrapper .xbn-lottery {*/
    /*    width: 45%;*/
    /*}*/

    .xbn-lottery-wrapper .current-pot {
        width: 45% !important;
        max-width: 45% !important;
    }

    .vault-wrapper .title-1 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 0px;
        color: black;
    }

    .vault-wrapper .title-2 {
        font-size: 16px;
    }

    .current-pot-wrapper .pot-bold {
        background-color: #f4b151;
        color: white;
        border-radius: 5px;
        padding: 5px;
    }

    .current-pot-wrapper {
        width: 45%;
    }

    .title-main {
        margin-bottom: 100px;
        text-align: center;
    }

    @media screen and (max-width: 800px) {

        .pot-info {
            width: 100%;
        }

        .mt-sm-0 {
            margin-top: 0px !important;
        }

        .current-pot-wrapper {
            width: 100%;
        }

        .buy-ticket-wrapper .text-warning {
            font-size: 14px;
            color: red;
            line-height: 1.5;
            margin-top: 10px;
        }

        .buy-ticket-wrapper .estimated-ticket {
            font-size: 14px;
            line-height: 1.5;
        }

        .title-main {
            margin-bottom: 20px !important;
            margin-top: 0px !important;
            font-size: 25px;
        }

        .blink_text {
            font-size: 14px;
            margin-bottom: 0px !important;
        }


        .winner-lottery-wrapper {
            width: 100%;
            max-width: 100%;
            margin-top: 30px;
        }

        .winner-lottery-wrapper .part-1 {
            width: 20%;
        }

        .winner-lottery-wrapper .part-1 img {
            width: 80%;
            margin: auto;
        }

        .winner-lottery-wrapper .part-2 {
            width: 80%;
            padding-left: 10px !important;
            font-size: 16px;
        }

        .vault-wrapper .part-1 .button-wrapper {
            margin-top: 40px;
            text-align: center;
            padding-bottom: 40px;
            border-bottom: 1px solid #cecece;
        }

        .xbn-lottery-wrapper .xbn-lottery {
            width: 100%;
        }

        .xbn-lottery-wrapper .current-pot {
            width: 100%;
        }

        .count-down-wrapper {
            margin-top: 30px;
            width: 100% !important;
            max-width: 100% !important;
        }

        .vault-wrapper .title-1 {
            font-size: 16px;
            font-weight: bold;
        }

        .vault-wrapper .title-2 {
            font-size: 16px;
        }


        .vault-wrapper .part-1 {
            width: 100%;
            border-right: none;
        }

        .vault-wrapper .part-2 {
            width: 100%;
        }

        .card-wrapper {
            padding: 20px;
        }

        .vault-wrapper {
            margin-top: 30px;
        }

        .xbn-lottery-wrapper .blink_text {
            font-size: 16px;
        }

        .buy-ticket-wrapper {
            max-width: 100%;
            width: 100%;
            margin-top: 30px !important;
        }

        .count-down-wrapper .title,
        .xbn-lottery-wrapper .title,
        .buy-ticket-wrapper .title,
        .current-pot-wrapper .title,
        .vault-wrapper .title {
            font-size: 17px;
            font-weight: bold;
        }

        .current-pot {
            display: none !important;
        }

        .current-pot-mobile {
            margin-top: 30px;
            display: block !important;
        }

        .clock-display {
            font-size: 30px;
            font-weight: bold;
            font-style: italic;
            margin: 10px
        }

        .pot-info {
            display: block;
            margin-top: 30px;
        }

        .pot-info .current-pot {
            flex: 3;
            text-align: left !important;
        }

        .pot-info .xbn-lottery {
            flex: 1
        }
    }
</style>
