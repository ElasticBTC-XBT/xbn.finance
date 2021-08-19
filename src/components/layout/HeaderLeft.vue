<template>
  <div class="main-screen">
    <!--        <c-ribbon/>-->
    <h-top></h-top>

    <div class="main-body">
      <div class="menu-left">
        <div class="menu-left-box">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isActive"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Navigator One</span>
            </template>
            <el-menu-item-group>
              <span slot="title">Group One</span>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">item four</span>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">Navigator Four</span>
          </el-menu-item>
        </el-menu>
        </div>
      </div>

      <slot />
    </div>
  </div>
</template>

<script>
// import CLogo from "@/components/layout/partials/Logo.vue";
// import CButton from "@/components/elements/Button";
import HTop from "@/components/layout/HeaderTop.vue";
import $ from "jquery";
// import CRibbon from "./Ribbon";

export default {
  name: "CHeader",
  components: {
    // CRibbon,
    // CLogo,
    // CButton,
    HTop,
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
.main-screen {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
}
.menu-left {
  position: relative !important;
  border-right: 1px solid #f3aa43;
  display: flex;
  flex-flow: row nowrap;
  width: 208px;
  overflow: hidden;
  transition: width 0.15s linear 0s;
  
}

.menu-left-box{
 height: calc(100vh - 81px);
 overflow: auto;
 width: 100%;
}
.main-body {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex: 1 1 auto;
}
.el-menu{
  width: 100%;
}
</style>
