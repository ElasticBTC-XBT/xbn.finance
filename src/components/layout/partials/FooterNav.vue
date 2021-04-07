<template>
    <nav class="footer-nav">
        <div>
            <ul class="list-reset finance-listing mt-8">
                <li>
                    <a href="https://bscscan.com/token/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac" target="_blank"
                       class="flex-center">
                        <c-image width="24" height="24" :src="require('@/assets/images/bscscan.png')"></c-image>
                        <span class="ml-8 mr-12">BscScan</span>
                    </a>
                </li>
                <li>
                    <a class="flex-center"
                       href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x547cbe0f0c25085e7015aa6939b28402eb0ccdac"
                       target="_blank">
                        <c-image width="24" height="24" :src="require('@/assets/images/pancakeswap.png')"></c-image>
                        <span class="ml-8">PancakeSwap</span>
                    </a>
                </li>
              <li>
                <a class="flex-center"
                   href="https://dexbeta.julswap.com/trading/0x7f80315c631ac59d633bceb27f80d209f7d6c254"
                   target="_blank">
                  <c-image height="24" :src="require('@/assets/images/julswap.png')"></c-image>

                </a>
              </li>
              <li>
                <a class="flex-center"
                   href="https://goswapp-bsc.web.app/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac"
                   target="_blank">
                  <c-image width="24" height="24" :src="require('@/assets/images/goswap.png')"></c-image>
                  <span class="ml-8">Goswapp</span>
                </a>
              </li>
              <li>
                <a class="flex-center"
                   href="https://1inch.exchange/#/BUSD/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac?network=56"
                   target="_blank">
                  <c-image width="24" height="24" :src="require('@/assets/images/1inch.png')"></c-image>
                  <span class="ml-8">1nch</span>
                </a>
              </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import CImage from '@/components/elements/Image.vue'

    export default {
        name: 'CFooterNav',
        components: {
            CImage
        }
    }
</script>

<style scoped>
    .flex-center {
        align-items: center
    }
</style>


<style scoped>
    @media (max-width: 640px) {
        .footer-nav li {
            margin-bottom: 16px;
        }

        .footer-nav li svg, .footer-nav li img {
            margin: 0;
        }
    }

    img {
        height: 24px;
    }
</style>
