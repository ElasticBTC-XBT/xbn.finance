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
<!--                    <div id="container" class="flex-center"></div>-->
                    <div class="sales section">
                        <div class="container">
                            <div class="sales-inner section-inner">
                                <div class="tiles-wrap">
                                    <div class="tiles-item reveal-scale-up">
                                        <div class="tiles-item-inner has-shadow">
                                            <div class="sales-item-content">
                                                <img
                                                    class="sales-img"
                                                    :src="require('@/assets/images/price.svg')"
                                                    alt="Image placeholder"
                                                    :width="50"
                                                    :height="50"
                                                />
                                                <div class="sales-statis">
                                                    <div class="title">Current Rate</div>
                                                    <div class="value">$0.0099</div>
                                                </div>
                                                <img
                                                    class="sales-icon-bg"
                                                    :src="require('@/assets/images/price.svg')"
                                                    alt="Image placeholder"
                                                    :width="50"
                                                    :height="50"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tiles-item tiles-primary reveal-scale-up">
                                        <div class="tiles-item-inner has-shadow">
                                            <div class="sales-item-content">
                                                <img
                                                    class="sales-img"
                                                    :src="require('@/assets/images/balance.svg')"
                                                    alt="Image placeholder"
                                                    :width="50"
                                                    :height="50"
                                                />
                                                <div class="sales-statis">
                                                    <div class="title">Your XBT Balance</div>
                                                    <div class="value">17,000,000</div>
                                                </div>
                                                <img
                                                    class="sales-icon-bg"
                                                    :src="require('@/assets/images/balance.svg')"
                                                    alt="Image placeholder"
                                                    :width="50"
                                                    :height="50"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tiles-item reveal-scale-up">
                                        <div class="tiles-item-inner has-shadow">
                                            <div class="sales-item-content">
                                                <img
                                                    class="sales-img"
                                                    :src="require('@/assets/images/price.svg')"
                                                    alt="Image placeholder"
                                                    :width="50"
                                                    :height="50"
                                                />
                                                <div class="sales-statis">
                                                    <div class="title">Sale Supply</div>
                                                    <div class="value">170,000XBT</div>
                                                </div>
                                                <img
                                                    class="sales-icon-bg"
                                                    :src="require('@/assets/images/price.svg')"
                                                    alt="Image placeholder"
                                                    :width="50"
                                                    :height="50"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sales-inner text-center">
                                <h5>Individual Cap is 17,000XBT</h5>
                                <c-button tag="a" class="btn-connect d-none" border="primary" wide-mobile href="#"><!--add class "d-none" to button after connect-->
                                    CONNECT WALLET&nbsp;
                                    <img
                                            class=""
                                            :src="require('@/assets/images/metamask.svg')"
                                            alt="Image placeholder"
                                            :width="22"
                                            :height="22"
                                    />
                                </c-button>
                                <c-button tag="a" class="btn-connect" border="primary" wide-mobile href="#"> <!--remove class "d-none" in button after connect-->
                                    0x98462...988&nbsp;
                                    <img
                                            class=""
                                            :src="require('@/assets/images/etherscan.png')"
                                            alt="Image placeholder"
                                            :width="22"
                                            :height="22"
                                    />
                                </c-button>
                                <div class="input-group input-group-icon"> <!--remove class "d-none" in button after connect-->
                                    <input type="number" placeholder="0.000">
                                    <div class="input-icon">ETH</div>
                                </div>
                                <c-button tag="a" border="primary" wide-mobile href="#" disabled class=""> <!--remove class "d-none" in button after connect-->
                                    BUY NOW
                                </c-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
    .input-group {
        margin: 1rem auto 1rem;
        zoom: 1;
        max-width: 330px;
    }
    .input-group-icon {
        position: relative;
    }
    .input-group:before, .input-group:after {
         content: "";
         display: table;
    }
    .input-group:after {
        clear: both;
    }
    .input-group-icon input {
        padding: 5px 5px 5px 68px;
    }
    input {
        width: 100%;
        padding: 1em;
        height: 48px;
        line-height: 1.4;
        background-color: #ffffff;
        border: 1px solid #D3DDEC;
        border-radius: 3px;
        -webkit-transition: 0.35s ease-in-out;
        -moz-transition: 0.35s ease-in-out;
        -o-transition: 0.35s ease-in-out;
        transition: 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
        text-align: center;
    }
    input:focus {

        background-color: #ffffff;
        border: 1px solid #F3AA43;

    }
    .input-group-icon .input-icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 58px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        pointer-events: none;
        border-right: solid 1px #D3DDEC;
    }



    .btn-connect {
        background-color: #FFFFFF;
        border: solid 1px #F3AA43 !important;
        text-transform: capitalize !important;
    }
    .btn-connect:hover {
        background-color: #F3AA43 !important;
        border: solid 1px #F3AA43 !important;
        color: #FFFFFF;
    }
    .d-none {
        display: none !important;
    }
    .sales .tiles-item {
        max-width: 330px;
        flex-basis: 330px;
    }
    .sales .tiles-item .tiles-item-inner {
        padding: 20px;
        overflow: hidden;
        position: relative;
    }
    .sales .sales-img {
        width: 50px;
        height: 50px;
        display: inline-block;
        margin-right: 10px;
    }
    .sales .sales-icon-bg {
        position: absolute;
        right: -15px;
        top: 5px;
        opacity: 0.2;
        transition: all 0.3s ease;
        width: 100px;
        height: 100px;
    }
    .sales .sales-statis {
        display: inline-block;
    }

    .sales .sales-statis .title {
        font-size: 1rem;
        font-weight: 500;
    }
    .sales .sales-statis .value {
        font-size: 1.4rem;
        font-weight: 700;
        color: #182334;
    }
    .sales .tiles-primary .tiles-item-inner {
        background-color: #F3AA43;
        color: #ffffff;
    }
    .sales .tiles-primary .sales-statis .value {
        color: #ffffff;
    }
</style>

<script>
    // import layout
    import CLayout from '@/layouts/LayoutDefault.vue'
    // import sections
    import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
    import {SectionProps} from '@/utils/SectionProps.js'
    import CButton from '@/components/elements/Button.vue'
    import 'moment-countdown';

    export default {
        name: 'Login',
        components: {
            CSectionHeader,
            CButton,
        },
        mixins: [SectionProps],
        created() {
            this.$emit('update:layout', CLayout)
        },
        data() {
            return {
                sectionHeader: {
                    title: 'Sales page'
                },
                date: '',
                deadline: new Date('2021-02-03')
            }
        },
    }
</script>
