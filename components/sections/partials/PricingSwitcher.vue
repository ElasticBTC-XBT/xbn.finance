<template>
    <div class="pricing-switcher center-content">
        <div class="pricing-switcher-inner">
            <span class="pricing-switcher-label fw-500">{{labels.default}}</span>
            <c-switch
                label-hidden
                v-model="localState"
                :value="state"
                @input="$emit('update:state', localState)">{{labels.type}}</c-switch>
            <span class="pricing-switcher-label fw-500">{{labels.switchOn}}</span>
        </div>
    </div>
</template>

<script>
import CSwitch from '@/components/elements/Switch.vue'

export default {
  name: 'CPricingSwitcher',
  components: {
    CSwitch
  },
  props: {
    state: Boolean,
    labels: Object
  },
  data() {
    return {
      localState: this.state
    }
  }
}
</script>
