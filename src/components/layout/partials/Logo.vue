<template>
    <div class="brand">
        <h1 class="m-0">
            <router-link to="/">
                <c-image
                    :src="require('@/assets/images/XBN-GRADIANT-PNG.png')"
                    alt="XBN"
                    :width="127"
                    :height="48" />
            </router-link>
        </h1>
    </div>
</template>

<script>
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CLogo',
  components: {
    CImage
  }
}
</script>

