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
                    <c-section-header tag="h1" :data="sectionHeader" class="center-content"/>
                    <h4 class="center-content">{{ date }}</h4>
                    <div id="container" class="flex-center"></div>
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

    export default {
        name: 'Login',
        components: {
            CSectionHeader,
        },
        mixins: [SectionProps],
        created() {
            this.$emit('update:layout', CLayout)
        },
        data() {
            let v = this
            return {
                sectionHeader: {
                    title: v.$t('crypto_unicorns.section_header.title')
                },
                deadline: new Date('2021-04-30'),
                date: ''
            }
        },
        mounted() {
            this.initTimerV2().bind(this)
        },
        methods: {
            initTimerV2() {
                let v = this
                // eslint-disable-next-line no-undef
                var cd = new Countdown({
                    cont: document.querySelector('#container'),
                    date: this.deadline.getTime(),
                    outputTranslation: {
                        year: v.$t('staking.years'),
                        week: v.$t('staking.weeks'),
                        day: v.$t('staking.days'),
                        hour: v.$t('staking.hours'),
                        minute: v.$t('staking.minutes'),
                        second: v.$t('staking.seconds'),
                    },
                    endCallback: null,
                    outputFormat: 'week|day|hour|minute|second',
                });
                cd.start();
            },
        }
    }
</script>
