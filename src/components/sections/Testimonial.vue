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
        <c-section-header :data="sectionHeader" class="center-content invert-color"/>
        <div
            class="tiles-wrap illustration-section-06"
            :class="[
                        pushLeft && 'push-left',
                    ]">


          <div v-for="member in teamData" :key="member.name" class="tiles-item reveal-scale-up" data-reveal-delay="200">
            <div class="tiles-item-inner has-shadow">
              <div class="testimonial-item-header">
                <div class="testimonial-item-image">
                  <c-image
                      :src="member.avatar"
                      alt="Testimonial image 02"
                      :width="56"
                      :height="56"/>
                </div>
              </div>
              <div class="testimonial-item-content">
                <p class="text-sm mb-0">
                  — {{
                    member.description
                  }}
                </p>
              </div>
              <div
                  class="testimonial-item-footer h6 mb-0 pt-8">
                <a data-control-name="nav.homepage" :href="member.contact" target="_blank" id="ember13"
                   class="ember-view">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
                       class="global-nav__logo">
                    <title>LinkedIn</title>
                    <g>
                      <!---->
                      <path
                          d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                          fill="currentColor"></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div
                  class="testimonial-item-footer h6 mt-16 mb-0 pt-24 has-top-divider">
                                <span class="testimonial-item-name">
                                    {{ member.name }}
                                </span>
                <span class="text-color-low"> - </span>
                <span class="testimonial-item-link text-xs">
                                    <a href="#">{{ member.title }}</a>
                                </span>
              </div>
            </div>
          </div>
          <!--                    <div class="tiles-item reveal-scale-up">-->
          <!--                        <div class="tiles-item-inner has-shadow">-->
          <!--                            <div class="testimonial-item-header">-->
          <!--                                <div class="testimonial-item-image">-->
          <!--                                    <c-image-->
          <!--                                            :src="require('@/assets/images/testimonial-image-01.png')"-->
          <!--                                            alt="Testimonial image 01"-->
          <!--                                            :width="56"-->
          <!--                                            :height="56" />-->
          <!--                                </div>-->
          <!--                            </div>-->
          <!--                            <div class="testimonial-item-content">-->
          <!--                                <p class="text-sm mb-0">-->
          <!--                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.-->
          <!--                                </p>-->
          <!--                            </div>-->
          <!--                            <div class="testimonial-item-footer h6 mt-32 mb-0 pt-24 has-top-divider">-->
          <!--                                <span class="testimonial-item-name">-->
          <!--                                    Gail Wynand-->
          <!--                                </span>-->
          <!--                                <span class="text-color-low"> - </span>-->
          <!--                                <span class="testimonial-item-link text-xs">-->
          <!--                                    <a href="#">Strategist</a>-->
          <!--                                </span>-->
          <!--                            </div>-->
          <!--                        </div>-->
          <!--                    </div>-->
          <!--                    <div class="tiles-item reveal-scale-up" data-reveal-delay="400">-->
          <!--                        <div class="tiles-item-inner has-shadow">-->
          <!--                            <div class="testimonial-item-header">-->
          <!--                                <div class="testimonial-item-image">-->
          <!--                                    <c-image-->
          <!--                                        :src="require('@/assets/images/testimonial-image-03.png')"-->
          <!--                                        alt="Testimonial image 03"-->
          <!--                                        :width="56"-->
          <!--                                        :height="56" />-->
          <!--                                </div>-->
          <!--                            </div>-->
          <!--                            <div class="testimonial-item-content">-->
          <!--                                <p class="text-sm mb-0">-->
          <!--                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.-->
          <!--                                </p>-->
          <!--                            </div>-->
          <!--                            <div-->
          <!--                                class="testimonial-item-footer h6 mt-32 mb-0 pt-24 has-top-divider">-->
          <!--                                <span class="testimonial-item-name">-->
          <!--                                    James Simons-->
          <!--                                </span>-->
          <!--                                <span class="text-color-low"> - </span>-->
          <!--                                <span class="testimonial-item-link text-xs">-->
          <!--                                    <a href="#">XBT Fund Manager</a>-->
          <!--                                </span>-->
          <!--                            </div>-->

          <!--                        </div>-->
          <!--                    </div>-->
          <!--                    <div class="tiles-item reveal-scale-up" data-reveal-delay="400">-->
          <!--                        <div class="tiles-item-inner has-shadow">-->
          <!--                            <div class="testimonial-item-header">-->
          <!--                                <div class="testimonial-item-image">-->
          <!--                                    <c-image-->
          <!--                                            :src="require('@/assets/images/testimonial-image-03.png')"-->
          <!--                                            alt="Testimonial image 03"-->
          <!--                                            :width="56"-->
          <!--                                            :height="56" />-->
          <!--                                </div>-->
          <!--                            </div>-->
          <!--                            <div class="testimonial-item-content">-->
          <!--                                <p class="text-sm mb-0">-->
          <!--                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.-->
          <!--                                </p>-->
          <!--                            </div>-->
          <!--                            <div-->
          <!--                                    class="testimonial-item-footer h6 mt-32 mb-0 pt-24 has-top-divider">-->
          <!--                                <span class="testimonial-item-name">-->
          <!--                                    To Be Hired-->
          <!--                                </span>-->
          <!--                                <span class="text-color-low"> - </span>-->
          <!--                                <span class="testimonial-item-link text-xs">-->
          <!--                                    <a href="#">Alliance Director</a>-->
          <!--                                </span>-->
          <!--                            </div>-->

          <!--                        </div>-->
          <!--                    </div>-->
          <!--                    <div class="tiles-item reveal-scale-up" data-reveal-delay="400">-->
          <!--                        <div class="tiles-item-inner has-shadow">-->
          <!--                            <div class="testimonial-item-header">-->
          <!--                                <div class="testimonial-item-image">-->
          <!--                                    <c-image-->
          <!--                                            :src="require('@/assets/images/testimonial-image-03.png')"-->
          <!--                                            alt="Testimonial image 03"-->
          <!--                                            :width="56"-->
          <!--                                            :height="56" />-->
          <!--                                </div>-->
          <!--                            </div>-->
          <!--                            <div class="testimonial-item-content">-->
          <!--                                <p class="text-sm mb-0">-->
          <!--                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.-->
          <!--                                </p>-->
          <!--                            </div>-->
          <!--                            <div-->
          <!--                                    class="testimonial-item-footer h6 mt-32 mb-0 pt-24 has-top-divider">-->
          <!--                                <span class="testimonial-item-name">-->
          <!--                                    To Be Hired-->
          <!--                                </span>-->
          <!--                                <span class="text-color-low"> - </span>-->
          <!--                                <span class="testimonial-item-link text-xs">-->
          <!--                                    <a href="#">Community Manager</a>-->
          <!--                                </span>-->
          <!--                            </div>-->

          <!--                        </div>-->
          <!--                    </div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {SectionTilesProps} from '@/utils/SectionProps.js'
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
        paragraph: 'The XBT Foundation (XF) is a non-profit organization dedicated to supporting XBT and related technologies, their role is not to control but contribue to XBT\'s growth'
      },
      teamData: [
        {
          avatar: require('@/assets/images/PhiNguyen.jpeg'),
          name: "Phi Nguyen",
          title: "Founder & CEO",
          contact: "https://www.linkedin.com/in/philiperik/",
          description: "20 years experience in software engineering. Smart contract builder, crypto-asset trading bot developer. Serial entrepreneur who enjoys the rolling coaster of building new things!"
        },
        {
          avatar: require('@/assets/images/ToanVo.jpeg'),
          name: "Toan Vo",
          title: "Data Engineer",
          contact: "https://www.linkedin.com/in/toanalien/",
          description: "I lead and provide everything data. Tailored. Scalable. Automated.",
        },
        {
          avatar: require('@/assets/images/TamNguyen.jpeg'),
          name: 'Tam Nguyen',
          title: 'Blockchain Developer ',
          contact: "https://www.linkedin.com/in/tamnguyenngoc/",
          description: 'I have a great passion for product development'
        },
        {
          avatar: require('@/assets/images/TuanTruong.jpeg'),
          name: "Tuan Truong",
          title: "Product Designer",
          contact: 'https://www.linkedin.com/in/tnvtuan/',
          description: "The expectation of customers on the product design is increasing rapidly in terms of quality and timely manner. My goal is to meet customer demands with user-friendly an modern design by expertising strong UX UI design, user centered design and software testing."
        },
        {
          avatar: require('@/assets/images/KhangTran.jpg'),
          name: "Khang Tran",
          title: "DApps Specialist",
          contact: 'https://www.linkedin.com/in/khangtrandinh/',
          description: "Joined software engineering for 5 years. Doing full-stack stuffs: mobile, backend, frontend, and DevOps development. My lifetime goal is to become a human-expert in my own life journey. Have been fallen in love with bootstrapped startups and cryptocurrency. Currently, I'm running a business with my friends @ activators.dev and doing dApp specialist @ elasticbitcoin.org"
        }
      ]
    }
  }
}
</script>
