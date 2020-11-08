<template>
    <section
        class="hero section"
        :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="hero-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <div
                    class="split-wrap"
                    :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop'
                    ]">
                    <div class="split-item">
                        <div class="hero-content split-item-content center-content-mobile">
                            <h1 class="mt-0 mb-16 reveal-from-left">
                                Landing template for startups
                            </h1>
                            <p class="mt-0 mb-24 reveal-from-left" data-reveal-delay="200">
                                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                            </p>
                            <div class="reveal-from-left" data-reveal-delay="400">
                                <c-button tag="a" color="primary" wide-mobile href="#">
                                    Get started
                                </c-button>
                            </div>
                        </div>
                        <div class="hero-figure is-3d split-item-image illustration-element-01 reveal-scale-up">
                            <c-image
                                class="has-shadow"
                                :src="require('@/assets/images/hero-image.svg')"
                                alt="Hero image"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionSplitProps } from '@/utils/SectionProps.js'
import CButton from '@/components/elements/Button.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CHeroSplit',
  components: {
    CButton,
    CImage
  },
  mixins: [SectionSplitProps]
}
</script>