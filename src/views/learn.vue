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
          <c-generic-section top-divider class="center-content">
            <div class="container-xs">
              <c-section-header :data="genericSection01Header" class="center-content"/>
              <div class="button-group learn-cta">
                <router-link to="/basics/" class="mr-8">
                  <c-button color="primary" wide-mobile>
                    Basics
                  </c-button>
                </router-link>
                <router-link to="/technology/" class="mr-8">
                  <c-button color="primary" wide-mobile>
                    Technology
                  </c-button>
                </router-link>
                <router-link to="/economics/">
                  <c-button color="primary" wide-mobile href="/economics">
                    Economics
                  </c-button>
                </router-link>
              </div>
            </div>
          </c-generic-section>
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

import CGenericSection from '@/components/sections/GenericSection.vue'
import CButton from '@/components/elements/Button.vue'

export default {
  name: 'Login',
  components: {
    CSectionHeader,
    CGenericSection,
    CButton
  },
  mixins: [SectionProps],
  created() {
    this.$emit('update:layout', CLayout)
  },
  data() {
    return {
      sectionHeader: {
        title: 'Learn about XBT'
      }
    }
  }
}
</script>
<style scoped>

@media (max-width: 640px) {
  .learn-cta button {
    margin-bottom: 16px;
    width: 100%;
  }
  .learn-cta a {
    margin-right: 0;
    width: 100%;
  }
}

</style>
