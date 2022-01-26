<template>
  <header class="site-header">
    <!--        <c-ribbon/>-->
    <div class="container header-have-ribbon">
      <div
        class="site-header-inner"
        :class="bottomDivider && 'has-bottom-divider'"
      >
        <c-logo />
        <button
          v-if="!hideNav"
          ref="hamburger"
          class="header-nav-toggle"
          aria-controls="primary-menu"
          :aria-expanded="isActive ? 'true' : 'false'"
          @click="isActive ? closeMenu() : openMenu()"
        >
          <span class="screen-reader">Menu</span>
          <span class="hamburger">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <nav
          v-if="!hideNav"
          ref="nav"
          class="header-nav"
          :class="{ 'is-active': isActive }"
        >
          <div class="header-nav-inner">
            <ul
              class="list-reset text-xxs"
              :class="navPosition && `header-nav-${navPosition}`"
            >
              <li @click="closeMenu($event)" class="item-header-main">
                <router-link to="/roadmap/" class="text-main"
                  >Learn</router-link
                >

                <div class="list-item-header-child">
                  <ul>
                    <li @click="closeMenu">
                      <a href="https://docs.xbn.finance/" target="_blank">White Paper</a>
                    </li>
                    <!--                                <li @click="closeMenu">-->
                    <!--                                  <a href="https://tothemoon.xbn.finance/xbn-investor-protection-program" target="_blank">Investor Protection</a>-->
                    <!--                                </li>-->
                    <!-- <li @click="closeMenu">
                      <router-link to="/governance/">Governance</router-link>
                    </li> -->
                    <li @click="closeMenu">
                      <router-link to="https://docs.xbn.finance/roadmap">Roadmap</router-link>
                    </li>
                  </ul>
                </div>
              </li>

              <li @click="closeMenu($event)" class="item-header-main">
                <a href="#" class="text-main">Products</a>

                <div class="list-item-header-child" ref="child">
                  <ul>
                    <li @click="closeMenu">
                      <router-link to="/ai-staking/">Baking Cake</router-link>
                    </li>
                    <li @click="closeMenu">
                      <router-link to="/staking/">Auto Staking</router-link>
                    </li>
                    <li @click="closeMenu">
                      <router-link to="/xbn/airdrop/">{{
                        $t("airdrop.airdrop")
                      }}</router-link>
                    </li>
                    <li @click="closeMenu">
                      <router-link to="/xbn/sales/"
                        >Sales</router-link
                      >
                    </li>
                    <li @click="closeMenu">
                      <a href="https://xbc.xbn.finance" target="_blank">Earn BNB</a>
                    </li>
                    <li @click="closeMenu">
                      <router-link to="/converting_dust"
                        >Converting Dust</router-link>
                    </li>
                  </ul>
                </div>
              </li>

              <li @click="closeMenu($event)" class="item-header-main">
                <a href="#" class="text-main">Ecosystem</a>

                <div class="list-item-header-child">
                  <ul>
                    <li @click="closeMenu">
                      <a href="https://elasticbitcoin.org" target="_blank">XBT</a>
                    </li>
                    <li @click="closeMenu">
                      <a href="https://about.xbc.xbn.finance" target="_blank">XBC</a>
                    </li>
                    <li @click="closeMenu">
                      <a href="https://pepe.community" target="_blank">PePe</a>
                    </li>
                  </ul>
                </div>
              </li>
              
              <li @click="closeMenu($event)" class="item-header-main">
                <a href="#" class="text-main">Community</a>

                <div class="list-item-header-child">
                  <ul>
                    <li @click="closeMenu">
                       <a
                        href="https://twitter.com/hashtag/XBNGratitude?src=hashtag_click"
                        target="_blank"
                        >#Gratitude</a
                      >
                    </li>
                    <li @click="closeMenu">
                      <a
                        href="https://twitter.com/hashtag/XBCagainstCovid19?src=hashtag_click"
                        target="_blank"
                        >#XBCagainstCovid19</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <!--                            <li @click="closeMenu">-->
              <!--                                <router-link to="/xbn/lottery/">{{ $t("header.lottery") }}</router-link>-->
              <!--                            </li>-->
            </ul>
            <ul class="list-reset header-nav-right">
              <c-button
                tag="a"
                class="button button-primary button-sm"
                color="primary"
                wide-mobile
                href="/buy"
              >
                {{ $t("header.buy") }} XBN
              </c-button>
            </ul>
            <!--                      <ul class="list-reset header-nav-right">-->
            <!--                        <c-button tag="a" class="button button-primary button-sm" color="primary" wide-mobile-->
            <!--                                  href="https://app.xbc.xbn.finance" >-->
            <!--                          XBC App-->
            <!--                        </c-button>-->
            <!--                      </ul>-->
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import CLogo from "@/components/layout/partials/Logo.vue";
import CButton from "@/components/elements/Button";
import $ from "jquery";
// import CRibbon from "./Ribbon";

export default {
  name: "CHeader",
  components: {
    // CRibbon,
    CLogo,
    CButton,
  },
  props: {
    active: Boolean,
    navPosition: {
      type: String,
      default: "",
    },
    hideNav: {
      type: Boolean,
      default: false,
    },
    hideSignin: {
      type: Boolean,
      default: false,
    },
    bottomDivider: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: this.active || false,
    };
  },
  watch: {
    active(value) {
      this.isActive = value;
    },
  },
  methods: {
    openMenu() {
      document.body.classList.add("off-nav-is-active");
      // if (this.$refs.nav)
      //     this.$refs.nav.style.maxHeight = this.$refs.nav.scrollHeight + 'px'
      this.$emit("update:active", true);
      this.isActive = true;
    },
    closeMenu(e) {
      var currentTag =e ? e.currentTarget : null;
      if (currentTag && !$(currentTag).children(".list-item-header-child").hasClass("expand")) {
        $(".list-item-header-child").removeClass("expand");
        $(currentTag).children(".list-item-header-child").addClass("expand");
      }else{
        $(".list-item-header-child").removeClass("expand");
      }
      
      if(!currentTag || $(currentTag).children(".list-item-header-child").length == 0){
        document.body.classList.remove("off-nav-is-active");
        if (this.$refs.nav) this.$refs.nav.style.maxHeight = null;
        this.$emit("close");
        this.$emit("update:active", false);
        this.isActive = false;
      }
    },
    keyPress() {
      this.isActive && event.keyCode === 27 && this.closeMenu();
    },
    clickOutside(e) {
      if (!this.$refs.nav) return;
      if (
        !this.isActive ||
        this.$refs.nav.contains(e.target) ||
        e.target === this.$refs.hamburger
      )
        return;
      this.closeMenu();
    },
  },
  mounted() {
    this.active && this.openMenu();
    document.addEventListener("keydown", this.keyPress);
    document.addEventListener("click", this.clickOutside);
  },
  beforeDestroy() {
    document.addEventListener("keydown", this.keyPress);
    document.removeEventListener("click", this.clickOutside);
    this.closeMenu();
  },
};
</script>

<style scoped>
nav.header-nav li > a {
  font-weight: 600 !important;
}

.header-have-ribbon {
  /*margin-top: 60px !important;*/
}

@media screen and (max-width: 25rem) {
  .item-header-main .list-item-header-child {
    position: relative;
    top: 0;
    left: 0;
    max-height: 0;
    transition: max-height .25s ease-in-out, opacity .15s;
    overflow: hidden;
  }

  .item-header-main .list-item-header-child ul {
    background: rgba(155, 155, 155, 0.5);
  }
  .item-header-main .list-item-header-child :after {
    display: none;
  }

  .off-nav-is-active .header-nav .header-nav-inner {
    padding-left: 0px;
    padding-right: 0px;
  }
  .list-item-header-child.expand{
    max-height: 1000px;
  }
}
</style>
