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
                    <c-section-header :data="sectionHeader" class="center-content">

                    </c-section-header>

                    <c-generic-section top-divider>
                        <div class="container-xs">

                            <h4>{{$t('economic.title_1')}}</h4>
                            <p>
                                {{$t('economic.desc_1')}}
                                <br/><br/>
                                {{$t('economic.desc_2')}}
                            </p>
                            <p>
                                {{$t('economic.desc_3')}}
                            </p>

                            <p>
                                {{$t('economic.desc_4')}}
                            </p>
                            <p>
                                {{$t('economic.desc_5')}}
                            </p>

                            <p>
                                {{$t('economic.desc_6')}}
                                <a href="https://www.ampleforth.org/economics/" target='_blank'> AMPL</a>
                            </p>
                        </div>
                    </c-generic-section>

                    <!-- <c-generic-section top-divider>
                      <div class="container-xs">
                        <h4>1. Macroeconomics</h4>
                        <p>
                          In developing the XBN protocol, we explored a wide range of questions around the open areas of
                          research in money today, and found the concept of "denationalized money” to be helpful for understanding
                          how cryptocurrencies fit into a broader context.
                        </p>
                        <p>
                          Drawing the connection between a technology innovation (cryptocurrencies) and an economic concept
                          (denationalized money) allows us to benefit from the rich academic literature devoted to understanding
                          where modern day monies face their greatest difficulties and where independent monies create value.
                        </p>
                        <p>
                          The mandate of denationalized money is to check against inflation and boom-bust cycles. Both of these
                          forces emerge from otherwise highly effective central banking systems, which is why economists have
                          assigned the task of checking them to monetary-assets that operate independently of government. Today's
                          decentralized cryptocurrencies are uniquely suited to this role, and in our opinion it will be their
                          most important economic function.
                        </p>
                      </div>
                    </c-generic-section>

                    <c-generic-section top-divider>
                      <div class="container-xs">
                        <h4>2. Thousands of Cryptocurrencies Are Coupled ToBNB's Price Movement Pattern</h4>
                        <p>
                          BNB's lack of connection to traditional assets brings diversity to a highly interdependent global
                          economy by giving users the option to exit into an asset outside the traditional cycle of consumption
                          and production.
                        </p>
                        <p>
                          However, since BNB, thousands of new cryptocurrencies have failed to add any diversity to the
                          ecosystem because they are either connected to traditional assets or their price movements follow
                          BNB too closely. Economically, it is as if only one new asset has been introduced because adding
                          more identically-designed cryptocurrencies offers no marginal optionality.
                        </p>
                      </div>
                    </c-generic-section>

                    <c-generic-section top-divider>
                      <div class="container-xs">
                        <h4>3. XBN introduces a Second Movement Pattern</h4>
                        <p>
                          XBN brings diversity to the ecosystem through a countercyclical supply policy that automatically and
                          proportionally adjusts supply across wallets in response to demand.
                        </p>
                        <p>
                          This policy was designed to be the simplest direct solution to the supply inelasticity problem that
                          limits assets like gold and bitcoin. Supply changes expand directly to wallets and contract directly
                          from wallets, with no bank or marketplace in between.
                        </p>
                        <p>
                          Later, we discovered the XBN solution has the tremendous additional benefit of creating a new asset
                          movement pattern unlike any existing cryptocurrency or traditional asset.
                        </p>
                        <p>
                          XBN's non-dilutive supply changes introduce a fundamentally different set of incentives for traders
                          because changes in demand are expressed by the number of XBN held in addition to price. As a result,
                          profit-maximizing actors are compelled to devise new trading strategies. This new behavior generates a
                          step-function-like movement pattern that is distinct from BNB and traditional assets.
                        </p>
                      </div>
                    </c-generic-section>

                    <c-generic-section top-divider>
                      <div class="container-xs">
                        <h4>4. Today XBN is a New DeFi Building Block</h4>
                        <p>
                          The high correlations prevalent in today's cryptocurrencies create systematic risk in the decentralized
                          finance (DeFi) ecosystem because in such environments, aggregate volatility cannot be reduced using
                          baskets of assets. XBN, however, creates diversity in a basket of decentralized assets. This means it
                          can be used to construct more robust instruments in the DeFi ecosystem. It is a new primitive building
                          block.
                        </p>
                        <figure>
                          <c-image
                              class="image-larger"
                              src="https://frgs3.s3-us-west-1.amazonaws.com/primitves_table_ampl.png"
                              alt="Image placeholder"
                              :width="712"
                              :height="400"/>
                        </figure>
                        <p>
                          Today’s decentralized assets, BTC and BNB, are the primitive building blocks of the new DeFi economy.
                          These assets can be arranged to construct instruments for lending, debt, synthetic equities, and more.
                          But their limitations lie in their volatility and high correlation to one another.
                        </p>
                        <p>
                          It is a common practice today for DeFi applications to overcollateralize in order to account for the
                          volatility inherent in permissionless collateral assets, but still there are high risks of liquidation.
                          Unless diversified baskets of decentralized assets can be constructed, many DeFi applications will
                          either be unreliable or they will be forced to use permissioned centralized assets as collateral.
                        </p>
                        <h4>
                          XBN Minimizes Liquidation Risk
                        </h4>
                        <p>
                          When all the collateral assets in a debt contract move in perfect synchrony, the risk of liquidation is
                          high because no asset can offset the changes in demand for another. In Economics, this is referred to as
                          non-diversifiable risk or systematic risk.
                        </p>
                        <p>
                          XBN's differentiated movement pattern reduces risk of autoliquidation when used in combination with
                          today's decentralized assets as collateral. Most importantly it does so without central authority.
                        </p>
                      </div>
                    </c-generic-section>

                    <c-generic-section top-divider>
                      <div class="container-xs">
                        <h4>5. Tomorrow XBN Can Be A Better BNB</h4>
                        <p> The XBN protocol automatically translates price-volatility into supply-volatility. But it is
                          profit-seeking traders, acting on incentives, who propagate these supply changes back into price. In
                          other words price informs supply algorithmically, while supply informs price behaviorally, in a cycle.
                        </p>
                        <p>
                          This cycle takes the form of a step-function-like movement pattern that alternates between static
                          periods, where price and supply are in equilibrium, and dynamic periods where the market searches for
                          its next equilibrium.
                        </p>
                        <h4>
                          Lifecycle
                        </h4>
                        <p>
                          Early on, while XBN's market cap is small, wallet balances will be volatile. Dynamic periods will occur
                          frequently as the system snaps from one supply equilibrium to the next, reflecting the rapid changes in
                          demand for XBN. In this period of its lifecycle, XBN benefits from use as a diversifying asset to be
                          held in investment portfolios, and from use as a decentralized collateral asset.
                        </p>
                        <p>
                          Later on, as XBN's market cap grows, equilibrium periods will last for longer stretches of time. In
                          these static periods XBN is relatively stable in both price and wallet balance. At saturation, these
                          static periods would only be interrupted by macroeconomic changes in demand. These macroeconomic
                          interruptions, however unpredictable, would actually be desirable because such elasticity prevents
                          demand shocks from cascading into liquidity crunches and deflationary spirals.
                        </p>
                        <p>
                          BNB will become less volatile at saturation, fully stabilizing in supply, but will never be stable
                          in price. And like other fixed supply assets BNB will be vulnerable to sudden shocks in demand,
                          which limits the size and scope of economies that can be built ontop of it.
                        </p>
                        <h4>Denomination</h4>
                        <p>
                          Lastly, we'll note that even when supply is volatile, XBN can be used as a unit of account. Use in this
                          regard would be major step forward for crytocurrencies, because it means the currency would have a
                          real-exchange-rate (ie: 1 XBN for 1 can of soda) in addition to a nominal-exchange-rate (ie: 10000 XBN
                          for 1 BTC).
                        </p>
                        <p>
                          Because real-exchange-rates are much more resistant to change than nominal-exchange-rates, the use of a
                          currency for denomination contributes to what Economists refer to as nominal rigidity (or price and wage
                          stickiness).
                        </p>
                        <p>
                          This stickiness further allows currencies like the USD to resist macroeconomic shocks, and has played a
                          major role in the longevity of currencies throughout history. If XBN were at the current-day maturity
                          level of BNB, we would expect that it would have already seen meaningful use in denomination.
                        </p>
                        <p>
                          In the long-run XBN becomes a simple bankless asset, like BNB, except it can be used for
                          denomination and adapts to economic shocks.
                        </p>
                      </div>
                    </c-generic-section>


                    <c-generic-section top-divider>
                      <div class="container-xs">
                        <h4>6. Monetary Design Guidelines</h4>
                        <p>
                          There are highly evolved economic frameworks for how to think about monetary design. We explored them.
                          The following design guidelines best leverage the qualities of decentralized money and define XBN.
                        </p>
                        <c-accordion>
                          <c-accordion-item v-for="(faq, index) in faqData" :key="index" :title="`${faq.title}?`"
                                            :active="index===0">
                            {{ faq.description }}
                          </c-accordion-item>
                        </c-accordion>
                      </div>
                    </c-generic-section> -->

                    <c-generic-section top-divider>
                        <div class="center-content">
                            <div class="button-group">
                                <c-button tag="a" color="primary" wide-mobile href="/basics">
                                    {{ $t('basic_split.learn_basic')}}
                                </c-button>
                                <c-button tag="a" color="primary" wide-mobile href="/technology">
                                    {{ $t('basic_split.learn_technology')}}
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
    import {SectionProps} from '@/utils/SectionProps.js'
    import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
    import CButton from '@/components/elements/Button.vue'
    import CGenericSection from '@/components/sections/GenericSection.vue'

    export default {
        name: 'Login',
        components: {
            CGenericSection,
            CSectionHeader,
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
                    title: v.$t('economic.section_header.title'),
                    paragraph: v.$t('economic.section_header.paragraph'),
                },
                faqData: [
                    {
                        "title": v.$t('economic.faq_data.item_1.title'),
                        "description": v.$t('economic.faq_data.item_1.description'),
                    }, {
                        "title": v.$t('economic.faq_data.item_2.title'),
                        "description": v.$t('economic.faq_data.item_2.description'),
                    }, {
                        "title": v.$t('economic.faq_data.item_3.title'),
                        "description": v.$t('economic.faq_data.item_3.description'),
                    }
                ]
            }
        }
    }
</script>
