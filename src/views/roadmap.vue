<template>
  <div>


    <section
        class="signin section illustration-section-02"
        :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
      <div class="container flex-center">
        <div
            class="signin-inner section-inner"
            :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
          <img class="roadmap-pic-mobile" :src="require('@/assets/images/roadmap-page.png')" />

          <c-section-header tag="h1" :data="sectionHeader" class="center-content"/>
          <!-- Yet another update -->
          <vue-timeline-update
              :date="new Date('2020-03-30')"
              title="Academic Research"
              description="The team conducted researches on how elastic supply model would affect crypto space and what are best approaches to improve its ecosystem"
              category="Research"
              color="orange"
              class="active"
          />
          <!-- Another update -->
          <vue-timeline-update
              :date="new Date('2020-05-05')"
              title="Testnet launch"
              description="XBT has been launched internally for testnet"
              category="development"
              color="orange"
              class="active"
          />

          <vue-timeline-update
              :date="new Date('2020-11-11')"
              title="Public launch"
              description="XBT Pairs launched on Uniswap"
              category="launch"
              color="orange"
              class="active"
          />

          <vue-timeline-update
              :date="new Date('2020-12-12')"
              title="Public launch"
              description="Officially launched"
              category="announcement"
              color="orange"
              class="active"
          />

          <vue-timeline-update
              :date="new Date('2021-01-31')"
              title="Enable Staking"
              description="Enable staking XBT liquidity tokens"
              category="development"
              color="black"
          />

          <vue-timeline-update
              :date="new Date('2021-03-01')"
              title="Publish whitepaper"
              description="The team will launch XBT Whitepaper for public audiences"
              category="research"
              color="black"
          />

          <vue-timeline-update
              :date="new Date('2021-04-17')"
              title="Public launch"
              description="Launch XBT Foundation Fund"
              category="launch"
              color="black"
          />

          <vue-timeline-update
              :date="new Date('2021-05-15')"
              title="Public launch"
              description="Launch games which are built on top of XBT"
              category="launch"
              color="black"
          />

          <!-- Yet another update -->
          <vue-timeline-update
              :date="new Date('2022-01-30')"
              title="Launch on top exchanges"
              description="The team aims to launch XBT on top exchanges, which helps increase mass adoption for XBT"
              category="Growth"
              color="black"
          />

          <!-- Yet another update -->
          <vue-timeline-update
              :date="new Date('2022-12-30')"
              title="Launch on Tron Chain and Binance Chain"
              description="XBT will become a multi-chain system with its unique elastic-supply model"
              category="Growth"
              color="black"
          />
        </div>
        <img class="roadmap-pic" :src="require('@/assets/images/roadmap-page.png')" />
      </div>
    </section>
  </div>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutDefault.vue'
// import sections
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import {SectionProps} from '@/utils/SectionProps.js'

export default {
  name: 'Login',
  components: {
    CSectionHeader
  },
  mixins: [SectionProps],
  created() {
    this.$emit('update:layout', CLayout)
  },
  data() {
    return {
      sectionHeader: {
        title: 'Roadmap'
      }
    }
  }
}
</script>

<style>

@media (min-width: 641px) {
  .gb-base-badge {
    padding-bottom: 8px!important;
  }
}

@media (max-width: 640px) {
  .gb-vue-timeline-update__ago {
    margin-left: 16px;
  }

  .gb-vue-timeline-content__right {
    margin-top: 0!important;
  }

  .gb-base-badge {
    padding-bottom: 0!important;
  }

  .roadmap-pic-mobile {
    margin-top: 0px!important;
    width: 100% !important;
    margin-left: 0!important;
    margin-bottom: 48px;
    display: inherit!important;
  }

  .roadmap-pic {
    display: none;
  }
}

.roadmap-pic {
  margin-top: 140px;
  width: 50%;
  margin-left: 32px;
}

.roadmap-pic-mobile {
  display: none;
}

.active .gb-vue-timeline-update__line {
  background-color: orange !important;
}

.gb-vue-timeline-update--dark .gb-vue-timeline-update__center .gb-vue-timeline-update__line {
  width: 2px !important;
}

.gb-vue-timeline-update--dark .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet {
  box-shadow: none !important;
}

.gb-vue-timeline-update {
  font-family: inherit !important;
}

.gb-vue-timeline-update__description {
  color: #aca8a8 !important;
}

.gb-vue-timeline-content__right {
  padding: 16px 12px;
  background: #fff;
  border-radius: 8px;
  z-index: 1;
  position: relative;
  margin-top: -8px;
}

.gb-vue-timeline-update .gb-vue-timeline-update__left {
  text-align: center !important;
}

.gb-vue-timeline-update .gb-vue-timeline-update__right {
  /*box-shadow: 0px 8px 21px -23px #18191a;*/
  box-shadow: 0px 0px 50px 0px rgba(11, 11, 12, 0.05);
  flex: 1;
  margin-bottom: 40px;
  padding-bottom: 0 !important;
}

.gb-vue-timeline-update__ago {
  margin-right: 6px;
  width: 100%;
  color: #1b2431!important;
}

.gb-vue-timeline-update .gb-vue-timeline-update__center {
  margin-left: 18px !important;
}

.gb-vue-timeline-update h1, .gb-vue-timeline-update h2 {
  margin: 0;
}

.gb-vue-timeline-update__center {
  margin-top: 3px
}

.gb-vue-timeline-update__meta {
  width: 100%;
}

.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta {
  margin: 0 !important;
  display: block !important;
}

.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__category {
  box-shadow: none !important;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
}

.gb-base-badge {
  border-radius: 5px !important;
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  font-family: inherit !important;
}

article.gb-vue-timeline-update:last-child .gb-vue-timeline-update__line {
  display: none;
}
</style>
