<template>
    <footer class="site-footer center-content-mobile">
        <div class="container">
            <div class="site-footer-inner" :class="topDivider && 'has-top-divider'">
                <div class="footer-top space-between text-xxs">
                    <c-logo/>
                    <div class="footer-top space-between">

<!--                        <div class="icon-flag-wrapper">-->
<!--                            <a href="/vi" @click="setToVi()" class="clickable">-->
<!--                                <img class="icon-flag" :src="require('@/assets/images/vi-sm.png')"/>-->
<!--                            </a>-->

<!--                            <a href="/" @click="setToEn()" class="clickable">-->
<!--                                <img class="icon-flag" :src="require('@/assets/images/en-sm.png')"/>-->
<!--                            </a>-->

<!--                            <a href="/kr" @click="setToKr()" class="clickable">-->
<!--                                <img class="icon-flag" :src="require('@/assets/images/kr-sm.png')"/>-->
<!--                            </a>-->

<!--                        </div>-->

                        <c-footer-social/>
                    </div>
                </div>
                <div class="footer-bottom space-between text-xxs invert-order-desktop">
                    <c-footer-nav/>
                    <div class="footer-copyright">&copy; {{ $t('footer.copy_right') }}</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import CLogo from '@/components/layout/partials/Logo.vue'
    import CFooterSocial from '@/components/layout/partials/FooterSocial.vue'
    import CFooterNav from '@/components/layout/partials/FooterNav.vue'

    export default {
        name: 'CFooter',
        components: {
            CLogo,
            CFooterSocial,
            CFooterNav
        },
        props: {
            topDivider: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            setToEn() {
                this.$i18n.locale = 'en';
                localStorage.lang = 'en';
                window.location.reload()
            },

            setToVi() {
                window.location.reload()
            },

            setToKr() {
                window.location.reload()
            }
        }
    }
</script>
