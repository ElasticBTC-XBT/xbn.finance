<template>
    <!--        <c-ribbon/>-->
    <div class="site-header">
      <div class="header-have-ribbon">
        <div
          class="site-header-inner"
          :class="bottomDivider && 'has-bottom-divider'"
        >
          <c-logo />
          <button
            ref="hamburger"
            class="header-nav-toggle-btn"
            aria-controls="primary-menu"
            :aria-expanded="isActive ? 'true' : 'false'"
            @click="closeMenu()"
          >
            <span class="screen-reader">Menu</span>
            <!-- <span class="hamburger">
              <span class="hamburger-inner"></span>
            </span> -->
            <i :class="isActive ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
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
                        <a href="https://tothemoon.xbn.finance/">White Paper</a>
                      </li>
                      <!--                                <li @click="closeMenu">-->
                      <!--                                  <a href="https://tothemoon.xbn.finance/xbn-investor-protection-program">Investor Protection</a>-->
                      <!--                                </li>-->
                      <li @click="closeMenu">
                        <router-link to="/governance/">Governance</router-link>
                      </li>
                      <li @click="closeMenu">
                        <router-link to="/roadmap/">Roadmap</router-link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li @click="closeMenu($event)" class="item-header-main">
                  <a href="#" class="text-main">Ecosystem</a>

                  <div class="list-item-header-child">
                    <ul>
                      <li @click="closeMenu">
                        <a href="https://elasticbitcoin.org">XBT</a>
                      </li>
                      <li @click="closeMenu">
                        <a href="https://about.xbc.xbn.finance">XBC</a>
                      </li>
                      <li @click="closeMenu">
                        <a href="https://pepe.community">PePe</a>
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
                        <router-link to="/xbn/sales/">Sales</router-link>
                      </li>
                      <li @click="closeMenu">
                        <a href="https://xbc.xbn.finance">Earn BNB</a>
                      </li>
                      <li @click="closeMenu">
                        <router-link to="/converting_dust"
                          >Converting Dust</router-link
                        >
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
                          >#Gratitude</a
                        >
                      </li>
                      <li @click="closeMenu">
                        <a
                          href="https://twitter.com/hashtag/XBCagainstCovid19?src=hashtag_click"
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
    </div>
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
      // document.body.classList.add("off-nav-is-active");
      // // if (this.$refs.nav)
      // //     this.$refs.nav.style.maxHeight = this.$refs.nav.scrollHeight + 'px'
      // this.$emit("update:active", true);
      this.isActive = true;
    },
    closeMenu() {
      // var currentTag =e ? e.currentTarget : null;
      // if (currentTag && !$(currentTag).children(".list-item-header-child").hasClass("expand")) {
      //   $(".list-item-header-child").removeClass("expand");
      //   $(currentTag).children(".list-item-header-child").addClass("expand");
      // }else{
      //   $(".list-item-header-child").removeClass("expand");
      // }

      // if(!currentTag || $(currentTag).children(".list-item-header-child").length == 0){
      //   document.body.classList.remove("off-nav-is-active");
      //   if (this.$refs.nav) this.$refs.nav.style.maxHeight = null;
      //   this.$emit("close");
      //   this.$emit("update:active", false);
      //   this.isActive = false;
      this.isActive = !this.isActive;
      // }
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
.site-header {
  position: relative !important;
  border-bottom: 1px solid #f3aa43;
}
.header-nav-toggle-btn {
  border: 1px solid #f3aa43;
  border-radius: 3px;
}
.header-nav-toggle-btn i {
  color: #f3aa43;
}
nav.header-nav li > a {
  font-weight: 600 !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-vertical-demo {
  position: absolute;
  top: 0;
  bottom: 0;
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
    transition: max-height 0.25s ease-in-out, opacity 0.15s;
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
  .list-item-header-child.expand {
    max-height: 1000px;
  }
}
</style>
