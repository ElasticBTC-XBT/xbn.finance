<template>
    <section
        class="team section center-content"
        :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="team-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content reveal-from-left" />
                <div
                    class="tiles-wrap"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div class="tiles-item reveal-scale-up">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24 illustration-element-06">
                                    <c-image
                                        :src="require('@/assets/images/team-member-01.jpg')"
                                        alt="Team member 01"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Markus Hasinika
                                </h5>
                                <div class="team-item-role text-xs fw-500 mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-scale-up" data-reveal-delay="200">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24 illustration-element-07">
                                    <c-image
                                        :src="require('@/assets/images/team-member-02.jpg')"
                                        alt="Team member 02"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Markus Hasinika
                                </h5>
                                <div class="team-item-role text-xs fw-500 mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-scale-up" data-reveal-delay="400">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24 illustration-element-06">
                                    <c-image
                                        :src="require('@/assets/images/team-member-03.jpg')"
                                        alt="Team member 03"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Markus Hasinika
                                </h5>
                                <div class="team-item-role text-xs fw-500 mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-scale-up">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24 illustration-element-06">
                                    <c-image
                                        :src="require('@/assets/images/team-member-04.jpg')"
                                        alt="Team member 01"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Markus Hasinika
                                </h5>
                                <div class="team-item-role text-xs fw-500 mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-scale-up" data-reveal-delay="200">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24 illustration-element-07">
                                    <c-image
                                        :src="require('@/assets/images/team-member-05.jpg')"
                                        alt="Team member 05"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Markus Hasinika
                                </h5>
                                <div class="team-item-role text-xs fw-500 mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-scale-up" data-reveal-delay="400">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24 illustration-element-06">
                                    <c-image
                                        :src="require('@/assets/images/team-member-06.jpg')"
                                        alt="Team member 06"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Markus Hasinika
                                </h5>
                                <div class="team-item-role text-xs fw-500 mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
                                </p>
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
  name: 'CTeam',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'Our story - Lorem ipsum is placeholder text.',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
}
</script>