<template>
  <nav class="footer-nav">
    <div>
      <ul class="list-reset finance-listing mt-8">
        <li>
          <a
            href="https://anyswap.exchange/#/bridge?bridgetoken=0x547cbe0f0c25085e7015aa6939b28402eb0ccdac&bridgetype=bridge"
            target="_blank"
            class="flex-center"
          >
            <img :src="require('@/assets/images/anyswap.png')" />
            <span class="ml-8 mr-12"></span>
          </a>
        </li>
        <li>
          <a
            href="https://nomics.com/assets/xbn-elastic-bnb"
            target="_blank"
            class="flex-center"
          >
            <img :src="require('@/assets/images/nomics.png')" />
            <span class="ml-8 mr-12"></span>
          </a>
        </li>
        <li>
          <a
            href="https://bscscan.com/token/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac"
            target="_blank"
            class="flex-center"
          >
            <img :src="require('@/assets/images/bscscan.png')" />
            <span class="ml-8 mr-12"></span>
          </a>
        </li>
        <li>
          <a
            class="flex-center"
            href="https://pancakeswap.finance/swap?outputCurrency=0x547cbe0f0c25085e7015aa6939b28402eb0ccdac"
            target="_blank"
          >
            <img :src="require('@/assets/images/pancakeswap.png')" />
            <span class="ml-8"></span>
          </a>
        </li>
        <li>
          <a
            class="flex-center"
            href="https://www.reddit.com/r/XBNFinance/"
            target="_blank"
          >
            <svg
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="_1O4jTk-dZ-VIxsCuYB6OR8"
            >
              <g>
                <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
                <path
                  fill="#FFF"
                  d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
                ></path>
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a
            class="flex-center"
            href="https://dex.guru/token/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac-bsc"
            target="_blank"
          >
            <img :src="require('@/assets/images/dexguru.png')" />
          </a>
        </li>
        <!-- <li>
                    <a class="flex-center"
                       href="https://goswapp-bsc.web.app/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac"
                       target="_blank">
                        <c-image width=24 height=24 :src="require('@/assets/images/goswap.png')"></c-image>
                        <span class="ml-8"></span>
                    </a>
                </li> -->
        <li>
          <a
            class="flex-center"
            href="https://1inch.exchange/#/BUSD/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac?network=56"
            target="_blank"
          >
            <img :src="require('@/assets/images/1inch.png')" />
            <span class="ml-8"></span>
          </a>
        </li>
        <li>
          <a
            class="flex-center"
            href="https://www.coingecko.com/en/coins/elastic-bnb"
            target="_blank"
          >
            <img :src="require('@/assets/images/coingecko.webp')" />
            <span class="ml-8"></span>
          </a>
        </li>
        <li>
          <a
            class="flex-center"
            href="https://coinmarketcap.com/currencies/xbn/"
            target="_blank"
          >
            <img :src="require('@/assets/images/cmc.png')" />
            <span class="ml-8"></span>
          </a>
        </li>
        <li>
          <a
            class="flex-center"
            href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/XBN%20Community%20Token%20Smart%20Contract%20Security%20Audit.pdf"
            target="_blank"
          >
            <img :src="require('@/assets/images/techrate.png')" />
            <span class="ml-8"></span>
          </a>
        </li>
        <li>
          <a
            class="flex-center"
            href="https://t.me/joinchat/2HrIyVWO6B80YWY9"
            target="_blank"
          >
            <img :src="require('@/assets/images/l.png')" />
            <span class="ml-8"></span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import CImage from "@/components/elements/Image.vue";

export default {
  name: "CFooterNav",
  components: {
    // CImage,
  },
};
</script>

<style scoped>
.flex-center {
  align-items: center;
}
</style>


<style scoped>
@media (max-width: 640px) {
  .footer-nav li {
    margin-bottom: 16px;
  }

  .footer-nav li svg,
  .footer-nav li img {
    margin: 0;
  }
}

img {
  height: 24px;
}
</style>
