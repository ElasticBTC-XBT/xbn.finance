<template>
    <div>


        <section
                class="signin section illustration-section-02"
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
                        <div class="tiles-item">
                            <div class="tiles-item-inner">

                                <div class="signin-bottom has-top-divider">
                                    <div class="pt-32 text-xs center-content text-color-low">
                                        Don't you have an account? <router-link to="/signup/" class="func-link">Sign up</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    title: 'CryptoUnicorns'
                }
            }
        }
    }
</script>
