<template>
  <div>
    <h2 class="center-content">You need to connect wallet to continue</h2>
    <div class="center-content">
      <p style="font-size: 14px">{{ $t('hint') }}: {{ $t('dont_have_wallet') }}
        <a target="_blank" href="https://trustwallet.com/">Trust Wallet</a>
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
