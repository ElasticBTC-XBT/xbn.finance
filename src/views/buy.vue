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
                    <c-generic-section top-divider class="center-content">
                        <div class="container-xs">
                            <c-section-header :data="genericSection01Header" class="center-content"/>
                            <div class="button-group">
                                <c-button tag="a" color="primary" wide-mobile target="_blank"
                                          href="https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x547cbe0f0c25085e7015aa6939b28402eb0ccdac">
                                    Buy XBN on Pancake
                                </c-button>
                              <c-button tag="a" color="primary" wide-mobile target="_blank"
                                        href="https://dexbeta.julswap.com/trading/0x7f80315c631ac59d633bceb27f80d209f7d6c254">
                                Buy XBN on Julswap
                              </c-button>
                              <c-button tag="a" color="primary" wide-mobile target="_blank"
                                        href="https://1inch.exchange/#/BUSD/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac?network=56">
                                Buy XBN on 1inch
                              </c-button>

                            </div>
                        </div>
                    </c-generic-section>
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

    import CGenericSection from '@/components/sections/GenericSection.vue'
    import CButton from '@/components/elements/Button.vue'

    export default {
        name: 'Login',
        components: {
            CSectionHeader,
            CGenericSection,
            CButton
        },
        mixins: [SectionProps],
        created() {
            this.$emit('update:layout', CLayout)
        },
        data() {
            let v = this
            return {
                sectionHeader: {
                    title: v.$t('buy.section_header.title')
                }
            }
        }
    }
</script>
