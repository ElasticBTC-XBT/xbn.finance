<template>
    <section
            class="features-tiles section center-content-mobile"
            :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                    class="features-tiles-inner section-inner"
                    :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content"/>
                <div
                        class="tiles-wrap"
                        :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div v-for="(item, index) in sectionDataUpper" :key="index" class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header center-content">
                                <div class="mb-12 reveal-from-right" data-reveal-container=".tiles-item"
                                     data-reveal-delay="200">
                                    <c-image
                                            :src="item.image"
                                            alt="item.title"
                                            :width="160"
                                            :height="160"/>
                                </div>
                            </div>
                            <div class="features-tiles-item-content center-content">
                                <h5 class="mt-0 mb-8 reveal-from-right" data-reveal-container=".tiles-item"
                                    data-reveal-delay="300">
                                    {{ item.title }}
                                </h5>
                                <p class="m-0 text-sm reveal-from-right" data-reveal-container=".tiles-item"
                                   data-reveal-delay="400">
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {SectionTilesProps} from '@/utils/SectionProps.js'
    import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
    import CImage from '@/components/elements/Image.vue'

    export default {
        name: 'CFeaturesTiles',
        components: {
            CSectionHeader,
            CImage
        },
        mixins: [SectionTilesProps],
        data() {
            // let v = this
            return {
                sectionHeader: {
                    title: "XBC Special Features",
                    paragraph: ''
                },
                sectionDataUpper: [
                    {
                        image: require('@/assets/images/elasticbitcoin-A-NEW-DEFI-PROTOCOL.png'),
                        title: "Automatic Liquidity Pool",
                        description: "4% of every transaction contributes toward automatically generating further liquidity on Pancake Swap. Benefiting long term for $XBC holders the most!",
                    },
                    {
                        image: require('@/assets/images/elasticbitcoin-RANDOMIZED-REBASING.png'),
                        title: "Earn $BNB by hodling $XBC",
                        description: "4% of every transaction is taken and re-distributed to all XBC holders in $BNB.",
                    },
                    {
                        image: require('@/assets/images/elasticbitcoin-PRICE-TARGET-OF-1-BTC.png'),
                        title: "Fair Launch & Community Built",
                        description: "Community driven & fair launch. There is no pre-sale. Dev will add 90% of the token supply to LP and burn LP token on PancakeSwap and participate in the fair launch with everyone else."
                    },
                    {
                        image: require('@/assets/images/elasticbitcoin-HOLDINGS-RISE-WITH-MARKET-CAP.png'),
                        title: "Anti Pump-Dump-Exist Whales",
                        description: "Transactions (sell/buy) that trade more than 0.05% of the total supply will be rejected. Whales who make a transfer (between 2 wallets) that is larger than 0,05% of the total supply will be charged for 2 BNB."
                    },
                    {
                        image: require('@/assets/images/elasticbitcoin-A-REBASE-EVENT.png'),
                        title: "RFI Static Rewards",
                        description: "2% of every transaction is taken and re distributed to all $XBC holders. The burn address is also a holder thus each transaction helps deflate the supply."
                    },
                    {
                        image: require('@/assets/images/elasticbitcoin-REBASE-LAG-FACTOR.png'),
                        title: "All Liquidity Pool Token Burned",
                        description: "All initial liquidity provided has been burned. The contract owner has been renounced, leaving the contract trustless for the XBC community."
                    },
                ]
            }
        }
    }
</script>


<style scoped>
    @media (min-width: 641px) {
        .features-tiles .tiles-item {
            padding-left: 15px;
            padding-right: 15px;
        }
    }

</style>
