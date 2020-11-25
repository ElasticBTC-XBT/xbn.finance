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
                    <div v-for="member in teamData" :key="member.name" class="tiles-item reveal-scale-up">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24 illustration-element-06">
                                    <c-image
                                        :src="member.avatar"
                                        alt="Team member 01"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                  {{ member.name }}
                                </h5>
                                <div class="team-item-role text-xs fw-500 mb-8">
                                  {{ member.title }}
                                </div>
                                <p class="m-0 text-sm">
                                  {{
                                    member.description
                                  }}
                                </p>
                            </div>
                        </div>
                    </div>

<!--                    <div class="tiles-item reveal-scale-up" data-reveal-delay="200">-->
<!--                        <div class="tiles-item-inner">-->
<!--                            <div class="team-item-header">-->
<!--                                <div class="team-item-image mb-24 illustration-element-07">-->
<!--                                    <c-image-->
<!--                                        :src="require('@/assets/images/team-member-02.jpg')"-->
<!--                                        alt="Team member 02"-->
<!--                                        :width="180"-->
<!--                                        :height="180" />-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="team-item-content">-->
<!--                                <h5 class="team-item-name mt-0 mb-4">-->
<!--                                    Markus Hasinika-->
<!--                                </h5>-->
<!--                                <div class="team-item-role text-xs fw-500 mb-8">-->
<!--                                    Founder & CEO-->
<!--                                </div>-->
<!--                                <p class="m-0 text-sm">-->
<!--                                    Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.-->
<!--                                </p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="tiles-item reveal-scale-up" data-reveal-delay="400">-->
<!--                        <div class="tiles-item-inner">-->
<!--                            <div class="team-item-header">-->
<!--                                <div class="team-item-image mb-24 illustration-element-06">-->
<!--                                    <c-image-->
<!--                                        :src="require('@/assets/images/team-member-03.jpg')"-->
<!--                                        alt="Team member 03"-->
<!--                                        :width="180"-->
<!--                                        :height="180" />-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="team-item-content">-->
<!--                                <h5 class="team-item-name mt-0 mb-4">-->
<!--                                    Markus Hasinika-->
<!--                                </h5>-->
<!--                                <div class="team-item-role text-xs fw-500 mb-8">-->
<!--                                    Founder & CEO-->
<!--                                </div>-->
<!--                                <p class="m-0 text-sm">-->
<!--                                    Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.-->
<!--                                </p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="tiles-item reveal-scale-up">-->
<!--                        <div class="tiles-item-inner">-->
<!--                            <div class="team-item-header">-->
<!--                                <div class="team-item-image mb-24 illustration-element-06">-->
<!--                                    <c-image-->
<!--                                        :src="require('@/assets/images/team-member-04.jpg')"-->
<!--                                        alt="Team member 01"-->
<!--                                        :width="180"-->
<!--                                        :height="180" />-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="team-item-content">-->
<!--                                <h5 class="team-item-name mt-0 mb-4">-->
<!--                                    Markus Hasinika-->
<!--                                </h5>-->
<!--                                <div class="team-item-role text-xs fw-500 mb-8">-->
<!--                                    Founder & CEO-->
<!--                                </div>-->
<!--                                <p class="m-0 text-sm">-->
<!--                                    Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.-->
<!--                                </p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="tiles-item reveal-scale-up" data-reveal-delay="200">-->
<!--                        <div class="tiles-item-inner">-->
<!--                            <div class="team-item-header">-->
<!--                                <div class="team-item-image mb-24 illustration-element-07">-->
<!--                                    <c-image-->
<!--                                        :src="require('@/assets/images/team-member-05.jpg')"-->
<!--                                        alt="Team member 05"-->
<!--                                        :width="180"-->
<!--                                        :height="180" />-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="team-item-content">-->
<!--                                <h5 class="team-item-name mt-0 mb-4">-->
<!--                                    Markus Hasinika-->
<!--                                </h5>-->
<!--                                <div class="team-item-role text-xs fw-500 mb-8">-->
<!--                                    Founder & CEO-->
<!--                                </div>-->
<!--                                <p class="m-0 text-sm">-->
<!--                                    Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.-->
<!--                                </p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="tiles-item reveal-scale-up" data-reveal-delay="400">-->
<!--                        <div class="tiles-item-inner">-->
<!--                            <div class="team-item-header">-->
<!--                                <div class="team-item-image mb-24 illustration-element-06">-->
<!--                                    <c-image-->
<!--                                        :src="require('@/assets/images/team-member-06.jpg')"-->
<!--                                        alt="Team member 06"-->
<!--                                        :width="180"-->
<!--                                        :height="180" />-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="team-item-content">-->
<!--                                <h5 class="team-item-name mt-0 mb-4">-->
<!--                                    Markus Hasinika-->
<!--                                </h5>-->
<!--                                <div class="team-item-role text-xs fw-500 mb-8">-->
<!--                                    Founder & CEO-->
<!--                                </div>-->
<!--                                <p class="m-0 text-sm">-->
<!--                                    Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.-->
<!--                                </p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
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
      },
      teamData: [
        {
          avatar: require('@/assets/images/james.jpg'),
          name: "James T. Carter",
          title: "Strategist",
          contact: "https://www.linkedin.com/in/james-t-carter-357093200/",
          description: "20 years experience in software engineering. Smart contract builder, crypto-asset trading bot developer. Serial entrepreneur who enjoys the rolling coaster of building new things!"
        },
        {
          avatar: require('@/assets/images/erik.png'),
          name: "R. McClure",
          title: "Community Manager",
          contact: "https://www.linkedin.com/in/richard-mcclure-bab622200/",
          description: "Forex trader from 2008. Crushed by Financial crisis and still kept walking. Crypto trader and enthusiast from 2014. Mined ETH back in 2016. Waves maximalist.",
        },
        {
          avatar: require('@/assets/images/kholsa.png'),
          name: 'Kabir Khosla',
          title: 'Tech Lead',
          contact: "https://www.linkedin.com/in/kabir-khosla-2841a1200/",
          description: 'Joined crypto in 2010. 3 years exp in smart contract developing. Top DApp builder in Blockstack App Mining. Co-Founder in multiple businesses with gross revenue 20k/month. Work hard. Have fun. Getting things done.'
        },
        // {
        //   avatar: require('@/assets/images/jayce.png'),
        //   name: "Jayce EE",
        //   title: "Senior Engineer",
        //   description: ""
        // }
      ]
    }
  }
}
</script>
