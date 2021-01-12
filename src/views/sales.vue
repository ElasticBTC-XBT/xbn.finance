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
          <!--          <div>-->
          <!--            <wallet-not-connect />-->
          <!--          </div>-->
          <div>
            <c-section-header tag="h1" :data="sectionHeader" class="center-content"/>
            <c-section-header tag="p" :data="{title: 'Connected as 0x98...f19'}" class="center-content"/>
            <div>
              <sale-input/>
            </div>
            <div>
              <sale-info/>
            </div>
            <div class="mb-32">
              <sale-order-book/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>

</style>

<script>
// import layout
import CLayout from '@/layouts/LayoutDefault.vue'
// import sections
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import {SectionProps} from '@/utils/SectionProps.js'
import SaleInfo from '@/components/sales/SaleInfo'
import SaleInput from '@/components/sales/SaleInput'
import SaleOrderBook from '@/components/sales/SaleOrderBook'
import WalletNotConnect from "@/components/sections/WalletNotConnect";

export default {
  name: 'Login',
  components: {
    WalletNotConnect,
    CSectionHeader,
    SaleInfo,
    SaleInput,
    SaleOrderBook
  },
  mixins: [SectionProps],
  created() {
    this.$emit('update:layout', CLayout)
  },
  data() {
    return {
      sectionHeader: {
        title: 'Public Discounted Sale'
      },
      date: '',
      deadline: new Date('2021-02-03')
    }
  },
}
</script>
