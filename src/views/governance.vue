<template>
    <div>


        <section
                class="signin section illustration-section-05"
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
                    <c-section-header tag="h1" :data="sectionHeader" class="center-content" />
                    <div class="tiles-wrap">


                                    XBT will be governed as a Decentralized Autonomous Organization (DAO), every decision is made through a series of sequential steps, which can be seen below.
                                   <br/>
                                   <br/>
                                   <br/> XBT Improvement Proposals (XIPs) describe standards for the XBT and can be tracked here


                    </div>
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
    import { SectionProps } from '@/utils/SectionProps.js'
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
                    title: 'XBT Gorvernance'
                }
            }
        }
    }
</script>
