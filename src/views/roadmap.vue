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
          
             <!-- Another update -->
          <vue-timeline-update
              :date="new Date('2020-05-05')"
              title="Testnet launch"
              description="XBT has been launched internally for testnet"
              category="development"
              icon="code"
              color="green"
          />

          <vue-timeline-update
              :date="new Date('2020-11-11')"
              title="Public launch"
              description="XBT Pairs launched on Uniswap"
              category="launch"
              icon="code"
              color="green"
          />

          
          <vue-timeline-update
              :date="new Date('2020-12-12')"
              title="Public launch"
              description="Officially launched"
              category="announcement"
              icon="code"
              color="green"
          />

          
          <vue-timeline-update
              :date="new Date('2021-01-31')"
              title="Enable Staking"
              description="Enable staking for XBT liquidity tokens"
              category="development"
              icon="code"
              color="white"
          />
          <vue-timeline-update
              :date="new Date('2021-03-01')"
              title="Publish white papers"
              description="Rollout papers for public"
              category="research"
              icon="code"
              color="white"
          />

            <vue-timeline-update
              :date="new Date('2021-04-17')"
              title="Public launch"
              description="XBT Fund launching"
              category="launch"
              icon="code"
              color="while"
          />

            <vue-timeline-update
              :date="new Date('2020-05-15')"
              title="Public launch"
              description="XBT Games launching"
              category="launch"
              icon="code"
              color="while"
          />





       
          <!-- Yet another update -->
          <vue-timeline-update
              :date="new Date('2021-06-30')"
              title="Academic Research"
              description="Team is working on a research about how elastic supply model would affect crypto space and what are best approaches to improve its ecosystem"
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

<style>
.gb-vue-timeline-update__center {
 margin-top: 3px
}
</style>
