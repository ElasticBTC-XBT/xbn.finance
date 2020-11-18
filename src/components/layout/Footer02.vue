<template>
    <footer class="site-footer">
        <div class="container">
            <div class="site-footer-inner" :class="topDivider && 'has-top-divider'">
                <div class="footer-top text-xxs">
                    <div class="footer-blocks">
                        <div class="footer-block reveal-from-bottom" data-reveal-offset="0">
                            <c-logo class="mb-16" />
                            <div class="footer-copyright">&copy; 2020 XBT, all rights reserved</div>
                        </div>
                        <div class="footer-block reveal-from-bottom" data-reveal-offset="0" data-reveal-delay="100">
                            <div class="footer-block-title">Company</div>
                            <ul class="list-reset">
                                <li>
                                    <a href="#">Dummy text used</a>
                                </li>
                                <li>
                                    <a href="#">The purpose of lorem</a>
                                </li>
                                <li>
                                    <a href="#">Filler text can be very useful</a>
                                </li>
                                <li>
                                    <a href="#">Be on design</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-block reveal-from-bottom" data-reveal-offset="0" data-reveal-delay="200">
                            <div class="footer-block-title">Uses cases</div>
                            <ul class="list-reset">
                                <li>
                                    <a href="#">Consectetur adipiscing</a>
                                </li>
                                <li>
                                    <a href="#">Lorem Ipsum is place</a>
                                </li>
                                <li>
                                    <a href="#">Excepteur sint</a>
                                </li>
                                <li>
                                    <a href="#">Occaecat cupidatat</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-block reveal-from-bottom" data-reveal-offset="0" data-reveal-delay="300">
                            <div class="footer-block-title">Docs</div>
                            <ul class="list-reset mb-0">
                                <li>
                                    <a href="#">The purpose of lorem</a>
                                </li>
                                <li>
                                    <a href="#">Dummy text used</a>
                                </li>
                                <li>
                                    <a href="#">Excepteur sint</a>
                                </li>
                                <li>
                                    <a href="#">Occaecat cupidatat</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom space-between center-content-mobile text-xxs reveal-from-bottom" data-reveal-offset="0">
                    <c-footer-nav />
                    <c-footer-social />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import CLogo from '@/components/layout/partials/Logo.vue'
import CFooterNav from '@/components/layout/partials/FooterNav.vue'
import CFooterSocial from '@/components/layout/partials/FooterSocial.vue'

export default {
  name: 'CFooter',
  components: {
    CLogo,
    CFooterNav,
    CFooterSocial
  },
  props: {
    topDivider: {
      type: Boolean,
      default: false
    }
  }
}
</script>
