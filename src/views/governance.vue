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
                    <c-section-header tag="h1" :data="sectionHeader" class="center-content"/>
                    <c-generic-section top-divider>
                        <div class="container-xs">
                            <h4>{{ $t('governance.title_1') }}</h4>
                            <p>
                                {{ $t('governance.desc_1') }}
                                <br/><br/>
                                {{ $t('governance.desc_2') }}

                            </p>
                            <h4>{{ $t('governance.title_2') }}</h4>
                            <p>
                                {{ $t('governance.desc_3') }}
                            </p>
                            <h4>
                                {{ $t('governance.title_3') }}
                            </h4>
                            <p>
                                {{ $t('governance.desc_4') }}
                            </p>
                            <h4>
                                {{ $t('governance.title_4') }}
                            </h4>
                            <p>
                                {{ $t('governance.desc_5') }}
                            </p>
                            <h4>
                                {{ $t('governance.title_5') }}
                            </h4>
                            <p>
                                {{ $t('governance.desc_6') }}
                            </p>
                            <h4>
                                {{ $t('governance.title_6') }}
                            </h4>
                            <p>
                                {{ $t('governance.desc_7') }}
                            </p>
                            <h4>
                                {{ $t('governance.title_7') }}
                            </h4>
                            <p>
                                {{ $t('governance.desc_8') }}
                            </p>
                        </div>
                    </c-generic-section>
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
    import {SectionProps} from '@/utils/SectionProps.js'
    import CGenericSection from '@/components/sections/GenericSection.vue'

    export default {
        name: 'Login',
        components: {
            CSectionHeader,
            CGenericSection
        },
        mixins: [SectionProps],
        created() {
            this.$emit('update:layout', CLayout)
        },
        data() {
            let v = this
            return {
                sectionHeader: {
                    title: v.$t('governance.section_header_title')
                }
            }
        }
    }
</script>
