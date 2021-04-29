<template>
    <header class="site-header">
<!--        <c-ribbon/>-->
        <div class="container header-have-ribbon">
            <div class="site-header-inner" :class="bottomDivider && 'has-bottom-divider'">
                <c-logo/>
                <button
                        v-if="!hideNav"
                        ref="hamburger"
                        class="header-nav-toggle"
                        aria-controls="primary-menu"
                        :aria-expanded="isActive ? 'true' : 'false'"
                        @click="isActive ? closeMenu() : openMenu()">
                    <span class="screen-reader">Menu</span>
                    <span class="hamburger">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <nav
                        v-if="!hideNav"
                        ref="nav"
                        class="header-nav"
                        :class="{ 'is-active': isActive }">
                    <div class="header-nav-inner">
                        <ul
                                class="list-reset text-xxs"
                                :class="navPosition && `header-nav-${navPosition}`">

                          <li @click="closeMenu" class="item-header-main">
                            <router-link to="/roadmap/" class="text-main">Learn</router-link>

                            <div class="list-item-header-child">
                              <ul>
                                <li @click="closeMenu">
                                  <router-link to="/governance/">Governance</router-link>
                                </li>
                                <li @click="closeMenu">
                                  <router-link to="/roadmap/">Roadmap</router-link>
                                </li>

                                <li @click="closeMenu">
                                  <a href="https://elasticbitcoin.org" target="_blank">
                                    XBT
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>

<!--                            <li @click="closeMenu">-->
<!--                                <router-link to="/governance/">{{ $t("header.governance") }}</router-link>-->
<!--                            </li>-->
<!--                            <li @click="closeMenu">-->
<!--                                <router-link to="/roadmap/">{{ $t("header.roadmap") }}</router-link>-->
<!--                            </li>-->
                            <!--                          <li @click="closeMenu">-->
                            <!--                            <router-link to="/xbn/sales/">XBN Sales</router-link>-->
                            <!--                          </li>-->
                          <li @click="closeMenu">
                            <router-link to="/xbc/">XBC</router-link>
                          </li>
                            <li @click="closeMenu">
                                <router-link to="/xbn/airdrop/">{{ $t("airdrop.airdrop") }}</router-link>
                            </li>
                          <li @click="closeMenu">
                            <router-link to="/xbn/sales/"><img src="https://i.imgur.com/jmPNlwr.png" style="height: 17px; display: inline-block; margin-bottom: -2px">Sales</router-link>
                          </li>

<!--                            <li @click="closeMenu">-->
<!--                                <router-link to="/xbn/lottery/">{{ $t("header.lottery") }}</router-link>-->
<!--                            </li>-->

                            <li @click="closeMenu">
                                <router-link to="/xbn/gratitude/">{{ $t("header.gratitude") }}</router-link>
                            </li>




                        </ul>
                        <ul class="list-reset header-nav-right">
                            <c-button tag="a" class="button button-primary button-sm" color="primary" wide-mobile
                                      href="/buy" >
                                {{ $t("header.buy") }} XBN
                            </c-button>
                        </ul>
                      <ul class="list-reset header-nav-right">
                        <c-button tag="a" class="button button-primary button-sm" color="primary" wide-mobile
                                  href="https://xbc.xbn.finance" >
                          XBC App
                        </c-button>
                      </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    import CLogo from '@/components/layout/partials/Logo.vue'
    import CButton from '@/components/elements/Button'
    // import CRibbon from "./Ribbon";

    export default {
        name: 'CHeader',
        components: {
            // CRibbon,
            CLogo,
            CButton
        },
        props: {
            active: Boolean,
            navPosition: {
                type: String,
                default: ''
            },
            hideNav: {
                type: Boolean,
                default: false
            },
            hideSignin: {
                type: Boolean,
                default: false
            },
            bottomDivider: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isActive: this.active || false
            }
        },
        watch: {
            active(value) {
                this.isActive = value
            }
        },
        methods: {
            openMenu() {
                document.body.classList.add('off-nav-is-active')
                if (this.$refs.nav)
                    this.$refs.nav.style.maxHeight = this.$refs.nav.scrollHeight + 'px'
                this.$emit('update:active', true)
                this.isActive = true
            },
            closeMenu() {
                document.body.classList.remove('off-nav-is-active')
                if (this.$refs.nav) this.$refs.nav.style.maxHeight = null
                this.$emit('close')
                this.$emit('update:active', false)
                this.isActive = false
            },
            keyPress() {
                this.isActive && event.keyCode === 27 && this.closeMenu()
            },
            clickOutside(e) {
                if (!this.$refs.nav) return
                if (
                    !this.isActive ||
                    this.$refs.nav.contains(e.target) ||
                    e.target === this.$refs.hamburger
                )
                    return
                this.closeMenu()
            }
        },
        mounted() {
            this.active && this.openMenu()
            document.addEventListener('keydown', this.keyPress)
            document.addEventListener('click', this.clickOutside)
        },
        beforeDestroy() {
            document.addEventListener('keydown', this.keyPress)
            document.removeEventListener('click', this.clickOutside)
            this.closeMenu()
        }
    }
</script>

<style scoped>
    nav.header-nav li > a {
        font-weight: 600 !important;
    }

    .header-have-ribbon {
        margin-top: 60px !important;
    }
</style>
