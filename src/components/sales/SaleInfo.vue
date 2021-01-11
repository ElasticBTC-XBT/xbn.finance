<template>
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
                  <div class="value">1 ETH = 78888 XBT</div>
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
                  <div class="value">170,000 XBT</div>
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
export default {
  name: "SaleInfo"
}
</script>

<style scoped>

</style>
