<template>
  <div>


    <section
        class="signin section illustration-section-01"
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
          <div id="container" class="flex-center"></div>
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
        title: 'XBT Fund coming soon'
      },
      date: '',
      deadline: new Date('2021-02-03'),
      timer: null
    }
  },
  mounted() {
    this.initTimerV2().bind(this)
  },
  methods: {
    initTimerV2(){
      // eslint-disable-next-line no-undef
      var cd = new Countdown({
        cont: document.querySelector('#container'),
        date: this.deadline.getTime(),
        outputTranslation: {
          year: 'Years',
          week: 'Weeks',
          day: 'Days',
          hour: 'Hours',
          minute: 'Minutes',
          second: 'Seconds',
        },
        endCallback: null,
        outputFormat: 'week|day|hour|minute|second',
      });
      cd.start();
    },
  }
}
</script>
