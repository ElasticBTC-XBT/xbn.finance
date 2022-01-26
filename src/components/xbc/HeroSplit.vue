<template>

    <div class="container hero">
        <div
                class="hero-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
            <div
                    class="split-wrap"
                    :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop'
                    ]">
                <div class="split-item">
                    <div class="hero-content split-item-content center-content-mobile">
<!--                      <h3 style="color:red; font-size: 17px">Important note: we decided to pending the launch because too many bots accumulate $XBC when we deploy contract, which is not fair. <br/>-->
<!--                        Please follow Twitter: <a href="https://twitter.com/elasticbitcoin" target="_blank">elasticbitcoin</a> for further announcement!-->
<!--                        <br/>-->

<!--                        We are considering give XBN holders privilege to buy XBC first to avoid bots.-->

<!--                      </h3>-->
                        <h1 class="mt-0 mb-16 reveal-from-left" style="font-size: 37px">


                          XBC · XBN Community · Hold XBC to Earn BNB
                        </h1>
                        <p class="mt-0 mb-24 reveal-from-left" data-reveal-delay="200">
                            <span class="subtitle">XBC is forked from Moonrat.Finance, it is a new brilliant & innovative protocol. XBC is fair launch, driven by community run on #BSC</span>
                            <br/>
                            <br/>
                          XBC has been fixed all security issues on Smart Contract by security experts and ready to meet you at the moon
                            <br/>
                            <br/>
                          When you trade, set slippage 11-13% . Ask community here <a target="_blank" href="https://t.me/XBCforeveryone"> Telegram </a>
                          <br/>
                          <br/>
<!--                          Liquidity will be added and you can start trading at 04:20 GMT.-->

                        </p>
                        <div class="reveal-from-left">

                          <c-button tag="a" color="primary" wide-mobile href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0321394309cad7e0e424650844c3ab3b659315d3">
                            Buy $XBC now
                          </c-button>
                          <br/>
                          <br/>
                          <c-button tag="a" color="primary" wide-mobile href="https://medium.com/@emekadeboy/how-to-buy-xbc-and-claim-bnb-on-metamask-8ebcce5f2038">
                            How to buy?
                          </c-button>
                          <br/>
                          <br/>
                          <p>
                            <c-button tag="a" color="primary" wide-mobile href="https://xbc.xbn.finance">
                              Launch $XBC App
                            </c-button>
                          </p>
                        </div>
                    </div>
                    <div class="hero-figure is-3d split-item-image illustration-element-01 reveal-scale-up">
                        <c-image
                                id="big-banner-logo"
                                class="has-shadow"
                                :src="require('@/assets/images/xbc.png')"
                                alt="Hero image"
                                :width="528"
                                :height="396"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {SectionSplitProps} from '@/utils/SectionProps.js'
    import CButton from '@/components/elements/Button.vue'
    import CImage from '@/components/elements/Image.vue'

    export default {
        name: 'CHeroSplit',
        components: {
            CButton,
            CImage
        },
        mixins: [SectionSplitProps]
    }
</script>
<style>
    #big-banner-logo {
        box-shadow: none !important;
    }

    .subtitle {
        font-size: 18px;
    }
</style>
