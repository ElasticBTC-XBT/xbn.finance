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

              <h4>How it works</h4>
              <p> As a fork from AMPL, XBT works very similar to it, information from this page are copied, then modified from AMPL.  <br/><br/>

                Varying economic circumstances like recessions, booms, and technological advances, affect how much
                a currency people want to hold. In the case of fixed supply currencies like gold, silver, and Bitcoin,
                these changes in demand are expressed entirely by changes in the value of the currency.
              </p>
              <p>
                This means the volatility of demand translates into the price of anything denominated in that
                currency—including contracts and notably debt. For this reason, sudden shocks in demand can destabilize
                ecosystems supported by fixed supply assets. The greater the complexity of an ecosystem built on fixed
                supply assets, the greater the risk of cascading failure.
              </p>

              <p>
                To address this shortcoming, we gave XBT the ability to fairly and automatically adjust its supply in
                response to demand, without any need for a bank. XBT was designed to be the simplest direct solution to
                the supply inelasticity problem that limits assets like gold and bitcoin.
              </p>
              <p>
                Today XBT’s unique volatility pattern makes it a valuable new building block for decentralized finance.
                Tomorrow XBT can be a better Bitcoin.
              </p>

              <p> You can read more about how an elastic supply coin works from
                <a href="https://www.ampleforth.org/economics/">
                AMPL</a>
                </p>
            </div>
          </c-generic-section>

          <!-- <c-generic-section top-divider>
            <div class="container-xs">
              <h4>1. Macroeconomics</h4>
              <p>
                In developing the XBT protocol, we explored a wide range of questions around the open areas of
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
              <h4>2. Thousands of Cryptocurrencies Are Coupled To BTC's Price Movement Pattern</h4>
              <p>
                Bitcoin's lack of connection to traditional assets brings diversity to a highly interdependent global
                economy by giving users the option to exit into an asset outside the traditional cycle of consumption
                and production.
              </p>
              <p>
                However, since Bitcoin, thousands of new cryptocurrencies have failed to add any diversity to the
                ecosystem because they are either connected to traditional assets or their price movements follow
                Bitcoin too closely. Economically, it is as if only one new asset has been introduced because adding
                more identically-designed cryptocurrencies offers no marginal optionality.
              </p>
            </div>
          </c-generic-section>

          <c-generic-section top-divider>
            <div class="container-xs">
              <h4>3. XBT introduces a Second Movement Pattern</h4>
              <p>
                XBT brings diversity to the ecosystem through a countercyclical supply policy that automatically and
                proportionally adjusts supply across wallets in response to demand.
              </p>
              <p>
                This policy was designed to be the simplest direct solution to the supply inelasticity problem that
                limits assets like gold and bitcoin. Supply changes expand directly to wallets and contract directly
                from wallets, with no bank or marketplace in between.
              </p>
              <p>
                Later, we discovered the XBT solution has the tremendous additional benefit of creating a new asset
                movement pattern unlike any existing cryptocurrency or traditional asset.
              </p>
              <p>
                XBT's non-dilutive supply changes introduce a fundamentally different set of incentives for traders
                because changes in demand are expressed by the number of XBT held in addition to price. As a result,
                profit-maximizing actors are compelled to devise new trading strategies. This new behavior generates a
                step-function-like movement pattern that is distinct from Bitcoin and traditional assets.
              </p>
            </div>
          </c-generic-section>

          <c-generic-section top-divider>
            <div class="container-xs">
              <h4>4. Today XBT is a New DeFi Building Block</h4>
              <p>
                The high correlations prevalent in today's cryptocurrencies create systematic risk in the decentralized
                finance (DeFi) ecosystem because in such environments, aggregate volatility cannot be reduced using
                baskets of assets. XBT, however, creates diversity in a basket of decentralized assets. This means it
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
                Today’s decentralized assets, BTC and ETH, are the primitive building blocks of the new DeFi economy.
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
                XBT Minimizes Liquidation Risk
              </h4>
              <p>
                When all the collateral assets in a debt contract move in perfect synchrony, the risk of liquidation is
                high because no asset can offset the changes in demand for another. In Economics, this is referred to as
                non-diversifiable risk or systematic risk.
              </p>
              <p>
                XBT's differentiated movement pattern reduces risk of autoliquidation when used in combination with
                today's decentralized assets as collateral. Most importantly it does so without central authority.
              </p>
            </div>
          </c-generic-section>

          <c-generic-section top-divider>
            <div class="container-xs">
              <h4>5. Tomorrow XBT Can Be A Better Bitcoin</h4>
              <p> The XBT protocol automatically translates price-volatility into supply-volatility. But it is
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
                Early on, while XBT's market cap is small, wallet balances will be volatile. Dynamic periods will occur
                frequently as the system snaps from one supply equilibrium to the next, reflecting the rapid changes in
                demand for XBT. In this period of its lifecycle, XBT benefits from use as a diversifying asset to be
                held in investment portfolios, and from use as a decentralized collateral asset.
              </p>
              <p>
                Later on, as XBT's market cap grows, equilibrium periods will last for longer stretches of time. In
                these static periods XBT is relatively stable in both price and wallet balance. At saturation, these
                static periods would only be interrupted by macroeconomic changes in demand. These macroeconomic
                interruptions, however unpredictable, would actually be desirable because such elasticity prevents
                demand shocks from cascading into liquidity crunches and deflationary spirals.
              </p>
              <p>
                Bitcoin will become less volatile at saturation, fully stabilizing in supply, but will never be stable
                in price. And like other fixed supply assets Bitcoin will be vulnerable to sudden shocks in demand,
                which limits the size and scope of economies that can be built ontop of it.
              </p>
              <h4>Denomination</h4>
              <p>
                Lastly, we'll note that even when supply is volatile, XBT can be used as a unit of account. Use in this
                regard would be major step forward for crytocurrencies, because it means the currency would have a
                real-exchange-rate (ie: 1 XBT for 1 can of soda) in addition to a nominal-exchange-rate (ie: 10000 XBT
                for 1 BTC).
              </p>
              <p>
                Because real-exchange-rates are much more resistant to change than nominal-exchange-rates, the use of a
                currency for denomination contributes to what Economists refer to as nominal rigidity (or price and wage
                stickiness).
              </p>
              <p>
                This stickiness further allows currencies like the USD to resist macroeconomic shocks, and has played a
                major role in the longevity of currencies throughout history. If XBT were at the current-day maturity
                level of Bitcoin, we would expect that it would have already seen meaningful use in denomination.
              </p>
              <p>
                In the long-run XBT becomes a simple bankless asset, like Bitcoin, except it can be used for
                denomination and adapts to economic shocks.
              </p>
            </div>
          </c-generic-section>


          <c-generic-section top-divider>
            <div class="container-xs">
              <h4>6. Monetary Design Guidelines</h4>
              <p>
                There are highly evolved economic frameworks for how to think about monetary design. We explored them.
                The following design guidelines best leverage the qualities of decentralized money and define XBT.
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
                  Learn Basics
                </c-button>
                <c-button tag="a" color="primary" wide-mobile href="/technology">
                  Learn Technology
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
    return {
      sectionHeader: {
        title: 'Economics',
        paragraph: "XBT’s unique volatility pattern makes it a valuable new building block for decentralized finance and XBT can be even a better Bitcoin."
      },
      faqData: [{
        "title": "Rules over Discretion",
        "description": "Rules-based policies allow for predictable and measurable actions and responses. This is good for checking against discretionary economic policies."
      }, {
        "title": "Monies over Banks",
        "description": "Monies are simple, banks are complex. This is good for decentralizing governance."
      }, {
        "title": "Elasticity over Inelasticity",
        "description": "Supply elasticity allows for currencies to adapt to economic shocks. This is good for everyone."
      }]
    }
  }
}
</script>
