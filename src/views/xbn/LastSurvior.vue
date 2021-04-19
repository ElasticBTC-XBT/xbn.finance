<template>
    <div>
        <section
                class="signin section illustration-section-01 last-survior-wrapper"
                :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
            <fragment>

                <div class="section-1 card-spec-wrapper">
                    <div class="container">
                        <div class="text-1">
                            The Last Survivor
                        </div>
                        <div class="text-2">
                            Participate with XBN or BNB
                        </div>
                        <div class="text-3">
                            Be come the last survivor and win 50% of the pot
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="section-2 card-wrapper">

                        <div class="part-1">

                            <img :src="require('@/assets/images/survivor.png')"/>

                        </div>
                        <div class="part-2">
                            <div class="text-1">
                                Conquer all fighters, <br>
                                The winner takes it all!
                            </div>
                            <div class="count-down">
                                <countdown :time="10000"
                                           v-slot="{ days, hours, minutes, seconds }">
                                    <div class="clock-display">
                                        <span>{{ days }} : </span>
                                        <span>{{ hours }} : </span>
                                        <span>{{ minutes }} : </span>
                                        <span> {{ seconds }}</span>
                                    </div>
                                </countdown>
                            </div>

                            <div class="text-2">
                                709.78 XBN
                            </div>

                            <div class="text-3">
                                $117.78
                            </div>
                            <div class="text-4" v-if="approve_wallet">
                                Last bidder: 0xcEED08...0450abb6
                            </div>

                            <div class="button-unlock-wallet" v-else>
                                <c-button tag="a" color="primary" wide-mobile @click="approveWallet">
                                    Unlock Wallet
                                </c-button>
                            </div>

                        </div>

                    </div>

                    <div class="section-3">

                        <div class="part-1 card-wrapper">

                            <div class="text-1">
                                Participate
                            </div>

                            <div class="content-part">
                                <div v-if="approve_wallet">

                                    <div class="text-2">
                                        0 XBN Available
                                    </div>
                                    <div class="input-amount">
                                        <el-input v-model="amountApprove" readonly>
                                            <template slot="append">
                                                XBN
                                            </template>
                                        </el-input>
                                    </div>
                                    <div class="button-approve">
                                        <c-button tag="a" color="primary" wide-mobile @click="approveContract">
                                            Approve Contract
                                        </c-button>
                                    </div>

                                </div>
                                <div class="button-unlock-wallet" v-else>
                                    <c-button tag="a" color="primary" wide-mobile @click="approveWallet">
                                        Unlock Wallet
                                    </c-button>
                                </div>
                            </div>


                        </div>
                        <div class="part-2 card-wrapper">

                            <div class="text-1">
                                Last events
                            </div>

                            <div class="content-part">

                                <div>
                                    Tx: 0xf35...ecd1c
                                    BID
                                    10.5644 XBN
                                </div>

                                <div>
                                    Tx: 0x622...8abf1
                                    BID
                                    10.4512 XBN
                                </div>

                            </div>

                        </div>


                    </div>

                    <div class="section-4 card-wrapper">

                        <div class="text-1">
                            Game Rules
                        </div>

                        <div class="content-part">
                            The Last Surivor has a 17 minutes countdown timer which will reset on each bid.
                            <br>
                            <br>
                            Minimum Bid is 1% of the pot.
                            <br>
                            10% of bid will be added to XBN liquidity pool and burned.
                            <br>
                            <br>
                            When the countdown reaches zero, we will have the last survivor and the pot will be distributed:
                            <br>
                            50% credited instantly to the last bidders address (the last survivor)
                            <br>
                            33% is carried to the next round
                            <br>
                            17% will be added to XBN liquidity pool and burned
                            <br>
                            <br>
                            Once ended, the new game will start as soon as new fighter join the game.
                            <br>
                            <br>


                        </div>


                    </div>

                </div>

            </fragment>
        </section>
    </div>

</template>

<script>
    // import layout
    import CLayout from '@/layouts/LayoutDefault.vue'
    // import sections
    import CButton from '@/components/elements/Button.vue'

    export default {
        name: 'LastSurvior',
        components: {
            CButton
        },
        data() {
            return {
                approve_wallet: false,
                amountApprove: 12.1212
            }
        },
        methods: {
            approveContract() {

            },
            approveWallet() {
                this.approve_wallet = true
            }
        },
        created() {
            this.$emit('update:layout', CLayout)
        },
    }
</script>

