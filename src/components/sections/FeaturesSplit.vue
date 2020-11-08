<template>
    <section
        class="features-split section"
        :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="features-split-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <div
                    class="split-wrap"
                    :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop'
                    ]">
                    <div class="split-item reveal-scale-up">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16">
                                Lorem ipsum dolor sit
                            </h3>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div
                            class="split-item-image is-3d illustration-element-03"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                :src="require('@/assets/images/features-split-image-01.svg')"
                                alt="Features split image 01"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>

                    <div class="split-item reveal-scale-up">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16">
                                Lorem ipsum dolor sit
                            </h3>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div
                            class="split-item-image is-3d illustration-element-04"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                :src="require('@/assets/images/features-split-image-02.svg')"
                                alt="Features split image 02"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>

                    <div class="split-item reveal-scale-up">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16">
                                Lorem ipsum dolor sit
                            </h3>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div
                            class="split-item-image is-3d illustration-element-05"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                :src="require('@/assets/images/features-split-image-03.svg')"
                                alt="Features split image 03"
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
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CFeaturesSplit',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionSplitProps],
  data() {
    return {
      sectionHeader: {
        title: 'Bold startup toolkit',
        paragraph:
          'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.'
      }
    }
  }
}
</script>