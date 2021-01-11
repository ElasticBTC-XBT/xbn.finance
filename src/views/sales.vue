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
          <c-section-header tag="p" :data="{title: 'Connected as 0x98...f19'}" class="center-content"/>
          <sale-info />
          <sale-input />
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

export default {
  name: 'Login',
  components: {
    CSectionHeader,
    SaleInfo,
    SaleInput
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
