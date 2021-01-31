<template>
  <div>
    <div v-if="availableToClaim" class="exchange-token bg-white p-32 has-shadow text-center">
      <div>
        <h4>{{ $t('sale.i_want_to_buy') }}</h4>
      </div>
      <div class="mt-32">
        <div class="flex-row flex-center">
          <input
              v-model="ethPurchaseAmount"
              autofocus
              class="sale-input"
              type="number"
              :min="minBidAmount"
              :max="maxBidAmount"
          />
          <div class="currency">ETH</div>
        </div>
        <div class="mt-16">
          <h2> = {{ displayedSaleRate }} XBT</h2>
        </div>
        <div class="mt-16">
          <span style="font-size: 14px">{{ $t('sale.you_can_buy') }} {{ $t('max') }} <strong>{{ displayedMaxBidAmount }} ETH</strong> {{ $t('and') }} {{ $t('min') }} <strong>{{
              displayedMinBidAmount
            }} ETH</strong></span>
        </div>
      </div>
      <c-button :disabled="!validInput || submitted === true"
                class="mt-8"
                color="primary" wide-mobile
                @click="handlePurchase">
        {{ $t('buy.buy_with_ETH') }}
      </c-button>
    </div>

    <div v-else class="exchange-token bg-white p-32 has-shadow text-center">
      <h4>{{ $t('sale.your_next_available_purchase') }}</h4>
      <p>{{ nextAvailableClaimDate }}</p>
    </div>
  </div>
</template>

<script>
import CButton from '@/components/elements/Button.vue'
import * as numeral from "numeral";
import moment from "moment";

export default {
  name: "SaleInput",
  components: {
    CButton
  },
  props: {
    saleRate: {
      type: Number,
      default: 0
    },
    minBidAmount: {
      type: Number,
      default: 0
    },
    maxBidAmount: {
      type: Number,
      default: 0
    },
    participantWaitTime: {
      type: Number,
      default: 0
    },
    saleSupply: {
      type: Number,
      default: 0
    }
  },
  computed: {
    actualMaxBid() {
      const actualMaxBid = (this.saleSupply / this.saleRate);
      return this.maxBidAmount < actualMaxBid ? this.maxBidAmount : actualMaxBid;
    },
    displayedSaleRate() {
      return numeral(this.saleRate * this.ethPurchaseAmount).format('0,0.00')
    },
    displayedMaxBidAmount() {
      return numeral(this.actualMaxBid).format('0,0.000')
    },
    displayedMinBidAmount() {
      return numeral(this.minBidAmount).format('0,0.00')
    },
    validInput() {
      return this.ethPurchaseAmount <= this.actualMaxBid && this.ethPurchaseAmount >= this.minBidAmount;
    },
    nextAvailableClaimDate() {
      const lang = localStorage.getItem('lang') || 'en';
      return moment(this.participantWaitTime).locale(lang).format('llll');
    },
    availableToClaim() {
      return new Date() >= new Date(this.participantWaitTime);
    },
  },
  data() {
    return {
      ethPurchaseAmount: 0.01,
      submitted: false
    }
  },
  methods: {
    handlePurchase() {
      this.submitted = true;
      this.$emit('on-purchase', this.ethPurchaseAmount);
      setTimeout(() => {
        this.submitted = false;
      }, 10000);
    }
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
