<template>
  <div>
    <h2 class="center-content">Connect #BSC wallet to continue</h2>
    <div class="center-content">
      <p>
        Please switch to <a href="https://docs.binance.org/smart-chain/wallet/metamask.html" target="_blank">BSC network</a><br/>
      </p>
      <p style="font-size: 14px">{{ $t('hint') }}: {{ $t('dont_have_wallet') }}
        <a target="_blank" href="https://safepal.io/download">SafePal</a>, 
        <a target="_blank" href="https://trustwallet.com/">Trust Wallet</a>,
        {{ $t('or') }} <a target="_blank" href="https://metamask.io/">Metamask</a></p>
      <p style="font-size: 14px">
        {{ $t('any_questions') }}
        <a target="_blank" href="https://t.me/elasticbitcoinxbt">{{ $t('here') }}</a>
      </p>
    </div>
    <div class="center-content">
      <c-button color="primary" wide-mobile target="_blank" @click="$emit('connect-wallet')">
        {{ $t('connect_wallet') }}
      </c-button>
    </div>
  </div>
</template>

<script>
import CButton from '@/components/elements/Button.vue'

export default {
  name: "WalletNotConnect",
  components: {
    CButton
  }
}
</script>

<style scoped>

</style>
