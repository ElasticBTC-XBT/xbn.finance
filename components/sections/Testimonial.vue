<template>
    <section
        class="testimonial section"

        :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="testimonial-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content invert-color" />
                <div
                    class="tiles-wrap illustration-section-06"
                    :class="[
                        pushLeft && 'push-left',
                    ]">


                    <div class="tiles-item reveal-scale-up" data-reveal-delay="200">
                        <div class="tiles-item-inner has-shadow">
                            <div class="testimonial-item-header">
                                <div class="testimonial-item-image">
                                    <c-image
                                        :src="require('@/assets/images/testimonial-image-02.png')"
                                        alt="Testimonial image 02"
                                        :width="56"
                                        :height="56" />
                                </div>
                            </div>
                            <div class="testimonial-item-content">
                                <p class="text-sm mb-0">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                </p>
                            </div>
                            <div
                                class="testimonial-item-footer h6 mt-32 mb-0 pt-24 has-top-divider">
                                <span class="testimonial-item-name">
                                    Archiver
                                </span>
                                <span class="text-color-low"> - </span>
                                <span class="testimonial-item-link text-xs">
                                    <a href="#">Lead Developer</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="tiles-item reveal-scale-up">
                        <div class="tiles-item-inner has-shadow">
                            <div class="testimonial-item-header">
                                <div class="testimonial-item-image">
                                    <c-image
                                            :src="require('@/assets/images/testimonial-image-01.png')"
                                            alt="Testimonial image 01"
                                            :width="56"
                                            :height="56" />
                                </div>
                            </div>
                            <div class="testimonial-item-content">
                                <p class="text-sm mb-0">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                </p>
                            </div>
                            <div class="testimonial-item-footer h6 mt-32 mb-0 pt-24 has-top-divider">
                                <span class="testimonial-item-name">
                                    Gail Wynand
                                </span>
                                <span class="text-color-low"> - </span>
                                <span class="testimonial-item-link text-xs">
                                    <a href="#">Strategist</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="tiles-item reveal-scale-up" data-reveal-delay="400">
                        <div class="tiles-item-inner has-shadow">
                            <div class="testimonial-item-header">
                                <div class="testimonial-item-image">
                                    <c-image
                                        :src="require('@/assets/images/testimonial-image-03.png')"
                                        alt="Testimonial image 03"
                                        :width="56"
                                        :height="56" />
                                </div>
                            </div>
                            <div class="testimonial-item-content">
                                <p class="text-sm mb-0">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                </p>
                            </div>
                            <div
                                class="testimonial-item-footer h6 mt-32 mb-0 pt-24 has-top-divider">
                                <span class="testimonial-item-name">
                                    James Simons
                                </span>
                                <span class="text-color-low"> - </span>
                                <span class="testimonial-item-link text-xs">
                                    <a href="#">XBT Fund Manager</a>
                                </span>
                            </div>

                        </div>
                    </div>
                    <div class="tiles-item reveal-scale-up" data-reveal-delay="400">
                        <div class="tiles-item-inner has-shadow">
                            <div class="testimonial-item-header">
                                <div class="testimonial-item-image">
                                    <c-image
                                            :src="require('@/assets/images/testimonial-image-03.png')"
                                            alt="Testimonial image 03"
                                            :width="56"
                                            :height="56" />
                                </div>
                            </div>
                            <div class="testimonial-item-content">
                                <p class="text-sm mb-0">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                </p>
                            </div>
                            <div
                                    class="testimonial-item-footer h6 mt-32 mb-0 pt-24 has-top-divider">
                                <span class="testimonial-item-name">
                                    To Be Hired
                                </span>
                                <span class="text-color-low"> - </span>
                                <span class="testimonial-item-link text-xs">
                                    <a href="#">Alliance Director</a>
                                </span>
                            </div>

                        </div>
                    </div>
                    <div class="tiles-item reveal-scale-up" data-reveal-delay="400">
                        <div class="tiles-item-inner has-shadow">
                            <div class="testimonial-item-header">
                                <div class="testimonial-item-image">
                                    <c-image
                                            :src="require('@/assets/images/testimonial-image-03.png')"
                                            alt="Testimonial image 03"
                                            :width="56"
                                            :height="56" />
                                </div>
                            </div>
                            <div class="testimonial-item-content">
                                <p class="text-sm mb-0">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                </p>
                            </div>
                            <div
                                    class="testimonial-item-footer h6 mt-32 mb-0 pt-24 has-top-divider">
                                <span class="testimonial-item-name">
                                    To Be Hired
                                </span>
                                <span class="text-color-low"> - </span>
                                <span class="testimonial-item-link text-xs">
                                    <a href="#">Community Manager</a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionTilesProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CTestimonial',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'XBT Foundation Team',
        paragraph: 'The XBT Foundation (XF) is a non-profit organization dedicated to supporting XBT and related technologies, their role is not to control but contribue to XBT\'s growth' +
            '<br/> <em>The team will be remained anonymous for various privacy reasons.</em>'
      }
    }
  }
}
</script>
