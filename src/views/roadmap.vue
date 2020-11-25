<template>
  <div>


    <section
        class="signin section illustration-section-02"
        :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
      <div class="container">
        <div
            class="signin-inner section-inner"
            :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
          <c-section-header tag="h1" :data="sectionHeader" class="center-content"/>
          <vue-timeline-update
              :date="new Date('2021-04-31')"
              title="Publish papers"
              description="Rollout papers for public"
              category="announcement"
              icon="code"
              color="white"
          />

          <vue-timeline-update
              :date="new Date('2021-01-31')"
              title="Enable Staking"
              description="Enable staking for XBT liquidity tokens"
              category="announcement"
              icon="code"
              color="white"
          />

          <vue-timeline-update
              :date="new Date('2020-12-08')"
              title="Public launch"
              description="Officially launched on Uniswap"
              category="announcement"
              icon="code"
              color="green"
          />

          <!-- Another update -->
          <vue-timeline-update
              :date="new Date('2019-09-22')"
              title="Testnet launch"
              description="XBT has been launched internally for testnet"
              category="announcement"
              icon="code"
              color="white"
          />

          <!-- Yet another update -->
          <vue-timeline-update
              :date="new Date('2018-06-30')"
              title="Academic Research"
              description="Team is working on a research about how elastic supply model would affect crypto space"
              category="Research"
              icon="code"
              color="white"
              is-last
          />
        </div>
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
