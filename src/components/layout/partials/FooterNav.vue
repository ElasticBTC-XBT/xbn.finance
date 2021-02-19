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
                       href="https://www.dextools.io/app/uniswap/pair-explorer/0x080cf470ea91532bf5e313acc60c4b0d029409d4"
                       target="_blank">
                        <c-image width="24" height="24" :src="require('@/assets/images/pancakeswap.png')"></c-image>
                        <span class="ml-8">PancakeSwap</span>
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
