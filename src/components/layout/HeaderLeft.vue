<template>
  <div class="main-screen">
    <!--        <c-ribbon/>-->
    <div class="site-header">
      <div class="header-have-ribbon">
        <div
          class="site-header-inner"
          :class="bottomDivider && 'has-bottom-divider'"
        >
          <button
            ref="hamburger"
            class="header-nav-toggle-btn"
            aria-controls="primary-menu"
            v-on:click="isActive = !isActive"
          >
            <span class="screen-reader">Menu</span>
            <i :class="isActive ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
          </button>
          <c-logo />

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
                <!--                            <li >-->
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

    <div class="main-body">
      <div class="menu-left" :class="isActive ? 'is-collapse' : 'is-expand'">
        <div class="menu-left-box">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isActive"
          >
            <el-submenu index="1">
              <template slot="title">
                <i>
                  <img
                    class="icon-menu"
                    src="data:image/png;base64,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"
                  />
                </i>
                <router-link slot="title" to="/roadmap/" class="text-main"
                  ><span>Learn</span></router-link
                >
              </template>
              <el-menu-item index="1-1">
                <a href="https://docs.xbn.finance/" target="_blank">White Paper</a>
              </el-menu-item>
              <!-- <el-menu-item index="1-2" v-on:click="menuToggle()">
                <router-link to="/governance/">Governance</router-link>
              </el-menu-item> -->
              <el-menu-item index="1-3" v-on:click="menuToggle()">
                <a href="https://docs.xbn.finance/roadmap" target="_blank">Roadmap</a>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i>
                  <img
                    class="icon-menu"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABBklEQVRoge3YPwrCMBQG8C/i4ODoqIu7q+AVHAU3wa14Ag/hCewRHFScPIb/jtB6Ax06xUGKIEkTpeZZ+H5TeQnp+whpoAARkSRlKupVbwilYgDtwP3YpFA6UuPL/n2gZpz+X80DQBtaxaYBc4D/aj7XMRVtASqDAaQxgDTjPZDTS+hQjRRRM3ufld8BBpDGANIYQBoDSGMAaQwgjQGkiQQ4XYFz6q75qJfTkr97BuyOgAbQbQHNhrnmK/gObE/ALXs2vT7Ya76CB5j0X8/Tgb3mi4dYWuX/SgT/Cs037jmLkf96wQN80pyPyp8BV4Av7sbSJUWDxQFqiFwL/FgCIBJ8PxGRwwOApDdyPTbN1QAAAABJRU5ErkJggg=="
                  />
                </i>
                <span slot="title">Products</span>
              </template>
              <el-menu-item index="3-1" v-on:click="menuToggle()">
                <router-link to="/ai-staking/">Baking Cake</router-link>
              </el-menu-item>
              <el-menu-item index="3-2" v-on:click="menuToggle()">
                <router-link to="/staking/">Auto Staking</router-link>
              </el-menu-item>
              <el-menu-item index="3-3" v-on:click="menuToggle()">
                <router-link to="/xbn/airdrop/">{{
                  $t("airdrop.airdrop")
                }}</router-link>
              </el-menu-item>
              <el-menu-item index="3-4" v-on:click="menuToggle()">
                <router-link to="/xbn/sales/">Discounted Sales</router-link>
              </el-menu-item>
              <!-- <el-menu-item index="3-5">
                <a href="https://xbc.xbn.finance">Earn BNB</a>
              </el-menu-item> -->
              <el-menu-item index="3-6" v-on:click="menuToggle()">
                <router-link to="/migration">Migrate to XBN</router-link>
              </el-menu-item>
            </el-submenu>

             <el-submenu index="2">
              <template slot="title">
                <i>
                  <img
                    class="icon-menu"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEXklEQVRoge2ZXWgcVRTHf+dO1k1i0iZKGqWQWEWhfaiUWChCRUFqIz6YtkYFH6yETSxIFb/ypQRjxDb1RWiyqRahKq2pVVCU0FBRfKhCY4ugFKV9aKBWTasFs9lmu3N8SDY7u9mPZGcmyUP+b3PuOef+/3vmnnvnLixjcSH5HLqevr94Yrz0TrVil/ceGb64EKQAtI9KhEGUVtnFSDY/kytJa2P9M9fGi/822D9bcWu0bUd9j/dUk1BFVBF9n5uwGEZ4EMOwhrknMZYek7UCrY9v3Sg2JwELOIvaL08Ggj+8c/jLMV/I97MB4ac5uD4rLYQTD0VZ3eLagoglMBbDPND76dAlL4h6jewCxGwGReFQ79Gv/SevrEh5H6oroboCro7Dhb9AZ0ZqnGHpAqTtsfq1qmwQdA2AiP7oG+lpaB+VGPqSFKtg411Jh8oyOHM+8bRb+ziWWNgzAtobH2pUlb2gteL4JWzb/Osr+Q8o5hrfAOuSAlalOtVUOQWUYhjSATZJM+cMQFvj1odV5QhQO+0UA0aBi8bYFX4KkJ1EgY9TjNHJVKdoLC2I74ALMF0BUZp0qiP9htovBmXl8a6jR9Oy+AdpYZ+GWQ08D8Cvo3BzOZSVwOR1OHPO6X4aeFKaic0IsOFWgctSFLvvrcMn/lwo4ilQDiHTAiJROH4abgxCZBJsO+knHEyQh0QF4FuUkbmQ1zADOR1sPpJdfF+YCudECv9FM9iJOx+LAKKUvxGUq+tme2dEKOeoxQgUIMBmjKLpH0e5G9g0MyacRzmBYBPnF2dY3rNQOjTs6MiZIDRLMwfmmzfDPC8BvQjHcLzz6ch5FlpMSAv7gO38wRPZyEOunXgJQFr4LJ9PXgHaTweGhqTBJSuPkb8CQg1K3XwT6wA12LwGgKFbmqc2Hq/h3xqIU4XQhNBEnCq/plmyi3iuWBaw2FgSbTTSQYMKHU6bKD2lPXyeL9YPAVt0P1/MJ0ANVemdTs3cFr73ApTtWDwCfOV57gzwaw0EgW2O51Kf5lmgRSypH+JeYmEWsXI2k3m8k1NAnZvjyXIb9RsTXdTYsakzlQnQXdKVeqZatApoiACQ98bDdpyp7AxnqvwChJLCKGaHhghEVjEI3OE2V9ZXSN9lBTfQi/KU20lS8oYIRKr5BOVRL/JlFKADbEF5D7xvf5Fq1qOODySXmPUKaT8NKEN4Sd6wft4xSvt4J6dQPkyYbGXN7NTpEF6hgNuKPOjWgXnvxrVAHbA2YRDDP+lOKQL0APfivI/xDquxecFtElFmXTSnVsCDSbLPTqvu5xav084I0H5uA286QxaUYXjd66TJCgi78XtnFkLBCm73MqUB0IOUAzu9TJwFllXCcy7it6UbpipwnRCw0kXiucOw2SouMFZpj3TyttMkOojFFX6H2T3WL9gxiLr4F0JgT+mbtAIYrrCDBSQPYAJQ5OIbTeHVRCVEw5zEn96fm0QcJi7h6q5VYI9nhJZRIP4HU2tCeCR4BAcAAAAASUVORK5CYII="
                  />
                </i>
                <span slot="title">Ecosystem</span>
              </template>
              <!-- <el-menu-item index="2-1">
                <a href="https://elasticbitcoin.org">XBT - Rebase</a>
              </el-menu-item> -->
              <!-- <el-menu-item index="2-2">
                <a href="https://about.xbc.xbn.finance">XBC Community Coin</a>
              </el-menu-item> -->
              <!-- <el-menu-item index="2-3">
                <a href="https://pepe.community">PePe Metaverse</a>
              </el-menu-item> -->
              <el-menu-item index="2-3">
                <a href="https://cryptowar.network" target="_blank">Cryptowar ⚔️ xBlade </a>
              </el-menu-item>
            </el-submenu>

            <!-- <el-submenu index="4">
              <template slot="title">
                <i>
                  <img
                    class="icon-menu"
                    src="data:image/png;base64,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"
                  />
                </i>
                <span slot="title">Community</span>
              </template>
              <el-menu-item index="4-1">
                <a
                  href="https://twitter.com/hashtag/XBNGratitude?src=hashtag_click" target="_blank"
                  >#Gratitude</a
                >
              </el-menu-item>
              <el-menu-item index="4-2">
                <a
                  href="https://twitter.com/hashtag/XBCagainstCovid19?src=hashtag_click" target="_blank"
                  >#XBCagainstCovid19</a
                >
              </el-menu-item>
            </el-submenu> -->
          </el-menu>
        </div>
      </div>

      <slot />
    </div>
  </div>
</template>

<script>
import CLogo from "@/components/layout/partials/Logo.vue";
import CButton from "@/components/elements/Button";
// import $ from "jquery";
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
      isActive: true,
    };
  },
  watch: {
    active(value) {
      this.isActive = value;
    },
  },
  methods: {
    menuToggle() {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    if (window.innerWidth >= 960) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }

    document.addEventListener("keydown", this.keyPress);
    document.addEventListener("click", this.clickOutside);
  },
  beforeDestroy() {
    document.addEventListener("keydown", this.keyPress);
    document.removeEventListener("click", this.clickOutside);
  },
};
</script>

<style scoped>
.main-screen {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
}
.menu-left {
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  transition: width 0.15s linear 0s;
}

.icon-menu {
  display: initial;
  width: 23px;
  margin-right: 15px;
}

.el-menu--collapse .icon-menu {
  margin-right: 0px;
}

.el-submenu__title span {
  color: #dd9c3c;
}

.el-submenu .el-menu-item {
  padding-right: 20px;
}

.el-submenu .el-menu-item a {
  padding-left: 1rem;
  display:block;
}

.menu-left-box {
  height: calc(100vh - 81px);
  overflow: auto;
  width: 100%;
  max-width: 250px;
  background: #f8f8f8;
}
.main-body {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex: 1 1 auto;
}

.site-header {
  position: relative !important;
  border-bottom: 1px solid #f3aa43;
}

.header-nav-toggle-btn {
  border: none;
  border-radius: 3px;
  margin-right: 1rem;
  cursor: pointer;
}
.header-nav-toggle-btn i {
  color: #f3aa43;
}
nav.header-nav li > a {
  font-weight: 600 !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}

.el-menu {
  border: none;
  background: #f9f9f9;
}

.header-have-ribbon {
  /*margin-top: 60px !important;*/
}

@media (max-width: 960px) {
  .menu-left {
    position: absolute;
    z-index: 99;
  }
  .el-menu--collapse {
    width: 0px;
  }

  .is-collapse.menu-left {
    border-right: none;
  }

  .is-expand .menu-left-box::before {
    content: "";
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: rgba(0, 0, 0, 0.3);
  }
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
