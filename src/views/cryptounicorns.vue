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
          <h4 class="center-content">{{ date }}</h4>
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
import moment from "moment";

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
        title: 'CryptoUnicorns coming soon'
      },
      deadline: new Date('2021-04-30'),
      date: ''
    }
  },
  mounted() {
    this.initTimer().bind(this)
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    initTimer() {
      this.timer = setInterval(updateTime.bind(this), 100);
      updateTime();

      function updateTime() {
        this.date = moment(this.deadline).countdown(new Date()).toString(); //=> '26 years, 9 months, and 4 days'
      }
    }
  }
}
</script>
