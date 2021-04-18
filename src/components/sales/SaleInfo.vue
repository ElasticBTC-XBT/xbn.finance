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
                  <div class="title">{{$t('sale.current_rate')}}</div>
                  <div class="value">1 BNB ~ {{ displayedSaleRate }} XBN</div>
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
                  <div class="title">{{$t('sale.your_xbt_balance')}}</div>
                  <div class="value">{{ displayedXBNBalance }} XBN</div>
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
<!--          <div class="tiles-item">-->
<!--            <div class="tiles-item-inner has-shadow">-->
<!--              <div class="sales-item-content">-->
<!--                <img-->
<!--                    class="sales-img"-->
<!--                    :src="require('@/assets/images/price.svg')"-->
<!--                    alt="Image placeholder"-->
<!--                    :width="50"-->
<!--                    :height="50"-->
<!--                />-->
<!--                <div class="sales-statis">-->
<!--                  <div class="title">{{$t('sale.sale_supply')}}</div>-->
<!--                  <div class="value">{{ displayedSaleSupply }} XBN</div>-->
<!--                </div>-->
<!--                <img-->
<!--                    class="sales-icon-bg"-->
<!--                    :src="require('@/assets/images/price.svg')"-->
<!--                    alt="Image placeholder"-->
<!--                    :width="50"-->
<!--                    :height="50"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
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
      return numeral(this.saleSupply).format('0,0.00')
    },
    displayedSaleRate() {
      return numeral(this.saleRate).format('0,0.00')
    },
    displayedXBNBalance() {
      return numeral(this.xbtBalance).format('0,0.00')
    }
  }
}
</script>

<style scoped>

</style>
