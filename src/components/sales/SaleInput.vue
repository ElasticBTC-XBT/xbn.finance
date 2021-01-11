<template>
  <div class="exchange-token bg-white p-32 has-shadow text-center">
    <div>
      <h4>I want to buy</h4>
    </div>
    <div class="mt-32">
      <div class="flex-row flex-center">
        <input value="1" autofocus class="sale-input" type="number"/>
        <div class="currency">ETH</div>
      </div>
      <div class="mt-16">
        <h2> = 78888 XBT</h2>
      </div>
    </div>
    <c-button class="mt-8" color="primary" wide-mobile>
      {{ $t('buy.buy_with_ETH') }}
    </c-button>
  </div>
</template>

<script>
import CButton from '@/components/elements/Button.vue'

export default {
  name: "SaleInput",
  components: {
    CButton
  }
}
</script>

<style scoped>
div.exchange-token {
  max-width: 50%;
  margin: 0 auto;
}

@media (max-width: 640px) {
  div.exchange-token {
    max-width: 100%;
  }
}

div.currency {
  margin-left: -52px
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.bg-white {
  background-color: #fff;
}

.sale-input {
  border-radius: 8px;
  border: 1px solid #768DB2;
}

input.sale-input {
  border-radius: 4px;
  border: 1px solid #d2dde9;
  max-width: 200px;
  line-height: 20px;
  font-size: .9em;
  color: rgba(73, 84, 99, 0.7);
  transition: all .4s;
  padding: 15px 15px;
  padding-right: 60px;
}

input.sale-input:focus {
  box-shadow: none;
  outline: none;
  border-color: #b1becc;
}

</style>
