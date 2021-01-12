<template>
  <div class="sales section">
    <div class="container">
      <div class="sales-inner section-inner">
        <div class="tiles-wrap">
          <div class="tiles-item">
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
                  <div class="value">1 ETH = {{ displayedSaleRate }} XBT</div>
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
          <div class="tiles-item tiles-primary">
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
                  <div class="value">{{ displayedXBTBalance }} XBT</div>
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
          <div class="tiles-item">
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
                  <div class="value">{{ displayedSaleSupply }} XBT</div>
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
    </div>
  </div>
</template>

<script>
import * as numeral from 'numeral';

export default {
  name: "SaleInfo",
  props: ['saleSupply', 'saleRate', 'xbtBalance'],
  computed: {
    displayedSaleSupply() {
      return numeral(this.saleSupply).format('0,0')
    },
    displayedSaleRate() {
      return numeral(this.saleRate).format('0,0')
    },
    displayedXBTBalance() {
      return numeral(this.xbtBalance).format('0,0')
    }
  }
}
</script>

<style scoped>

</style>
