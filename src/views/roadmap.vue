<template>
    <div>


        <section
                class="signin section illustration-section-02"
                :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
            <div class="container flex-center">
                <div
                        class="signin-inner section-inner"
                        :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                    <img class="roadmap-pic-mobile" :src="require('@/assets/images/roadmap-page.png')"/>

                    <c-section-header tag="h1" :data="sectionHeader" class="center-content"/>
                    <!-- Yet another update -->
                    <vue-timeline-update
                            :dateString="getDateString('2020-03-30')"
                            :date="new Date('2020-03-30')"
                            :title="$t('road_map.item_1.title')"
                            :description="$t('road_map.item_1.desc')"
                            :category="$t('road_map.item_1.category')"
                            color="orange"
                            class="active"
                    />
                    <!-- Another update -->
                    <vue-timeline-update
                            :dateString="getDateString('2020-05-05')"
                            :date="new Date('2020-05-05')"
                            :title="$t('road_map.item_2.title')"
                            :description="$t('road_map.item_2.desc')"
                            :category="$t('road_map.item_2.category')"
                            color="orange"
                            class="active"
                    />

                    <vue-timeline-update
                            :dateString="getDateString('2020-11-11')"
                            :date="new Date('2020-11-11')"
                            :title="$t('road_map.item_3.title')"
                            :description="$t('road_map.item_3.desc')"
                            :category="$t('road_map.item_3.category')"
                            color="orange"
                            class="active"
                    />

                    <vue-timeline-update
                            :dateString="getDateString('2020-12-12')"
                            :date="new Date('2020-12-12')"
                            :title="$t('road_map.item_4.title')"
                            :description="$t('road_map.item_4.desc')"
                            :category="$t('road_map.item_4.category')"
                            color="orange"
                            class="active"
                    />

                    <vue-timeline-update
                            :dateString="getDateString('2021-04-17')"
                            :date="new Date('2021-04-15')"
                            :title="$t('road_map.item_5.title')"
                            :description="$t('road_map.item_5.desc')"
                            :category="$t('road_map.item_5.category')"
                            color="black"
                    />

                    <vue-timeline-update
                            :dateString="getDateString('2021-06-17')"
                            :date="new Date('2021-06-07')"
                            :title="$t('road_map.item_6.title')"
                            :description="$t('road_map.item_6.desc')"
                            :category="$t('road_map.item_6.category')"
                            color="black"
                    />

                    <vue-timeline-update
                            :dateString="getDateString('2021-08-17')"
                            :date="new Date('2021-04-17')"
                            :title="$t('road_map.item_7.title')"
                            :description="$t('road_map.item_7.desc')"
                            :category="$t('road_map.item_7.category')"
                            color="black"
                    />

                    <vue-timeline-update
                            :dateString="getDateString('2022-01-17')"
                            :date="new Date('2021-05-15')"
                            :title="$t('road_map.item_8.title')"
                            :description="$t('road_map.item_8.desc')"
                            :category="$t('road_map.item_8.category')"
                            color="black"
                    />

                    <!-- Yet another update -->
                    <vue-timeline-update
                            :dateString="getDateString('2022-01-30')"
                            :date="new Date('2022-01-30')"
                            :title="$t('road_map.item_9.title')"
                            :description="$t('road_map.item_9.desc')"
                            :category="$t('road_map.item_9.category')"
                            color="black"
                    />

                    <!-- Yet another update -->
                    <vue-timeline-update
                            :dateString="getDateString('2022-12-30')"
                            :date="new Date('2022-12-30')"
                            :title="$t('road_map.item_10.title')"
                            :description="$t('road_map.item_10.desc')"
                            :category="$t('road_map.item_10.category')"
                            color="black"
                    />
                </div>
                <img class="roadmap-pic" :src="require('@/assets/images/roadmap-page.png')"/>

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
            CSectionHeader
        },
        mixins: [SectionProps],
        created() {
            this.$emit('update:layout', CLayout)
        },
        data() {
            let v = this
            return {
                sectionHeader: {
                    title: v.$t('road_map.section_header_title')
                }
            }
        },
        methods: {
            getDateString(str_date) {
                let v = this
                let date = new Date(str_date)

                let current_date = new Date()

                let diffTime = null

                if (date < current_date) {
                    diffTime = Math.floor(current_date.getTime() - date.getTime());
                } else {
                    diffTime = Math.floor(date.getTime() - current_date.getTime());
                }

                let day = 1000 * 60 * 60 * 24
                let hour = 1000 * 60 * 60

                const diffHours = Math.floor(diffTime / hour);
                const diffDays = Math.floor(diffTime / day);
                const diffWeek = Math.floor(diffDays / 7);
                const diffMonth = Math.floor(diffDays / 30);
                const diffYear = Math.floor(diffMonth / 12);

                if (date < current_date) {

                    if (diffYear > 0) {
                        return diffYear > 1 ? v.$t('format_time.years_past', {year: diffYear}) : v.$t('format_time.year_past', {year: diffYear})
                    } else if (diffMonth > 0) {
                        return diffMonth > 1 ? v.$t('format_time.months_past', {month: diffMonth}) : v.$t('format_time.month_past', {month: diffMonth})
                    } else if (diffWeek > 0) {
                        return diffWeek > 1 ? v.$t('format_time.weeks_past', {week: diffWeek}) : v.$t('format_time.week_past', {week: diffWeek})
                    } else if (diffDays > 0) {
                        return diffDays > 1 ? v.$t('format_time.days_past', {day: diffDays}) : v.$t('format_time.day_past', {day: diffDays})
                    } else if (diffHours > 0) {
                        return diffHours > 1 ? v.$t('format_time.hours_past', {hour: diffHours}) : v.$t('format_time.hour_past', {hour: diffHours})
                    } else {
                        return v.$t('format_time.just_now')
                    }

                } else {
                    if (diffYear > 0) {
                        return diffYear > 1 ? v.$t('format_time.years_future', {year: diffYear}) : v.$t('format_time.year_future', {year: diffYear})
                    } else if (diffMonth > 0) {
                        return diffMonth > 1 ? v.$t('format_time.months_future', {month: diffMonth}) : v.$t('format_time.month_future', {month: diffMonth})
                    } else if (diffWeek > 0) {
                        return diffWeek > 1 ? v.$t('format_time.weeks_future', {week: diffWeek}) : v.$t('format_time.week_future', {week: diffWeek})
                    } else if (diffDays > 0) {
                        return diffDays > 1 ? v.$t('format_time.days_future', {day: diffDays}) : v.$t('format_time.day_future', {day: diffDays})
                    } else if (diffHours > 0) {
                        return diffHours > 1 ? v.$t('format_time.hours_future', {hour: diffHours}) : v.$t('format_time.hour_future', {hour: diffHours})
                    } else {
                        return v.$t('format_time.just_now')
                    }
                }

            }
        }
    }
</script>

<style>

    @media (min-width: 641px) {
        .gb-base-badge {
            padding-bottom: 8px !important;
        }
    }

    @media (max-width: 640px) {
        .gb-vue-timeline-update__ago {
            margin-left: 16px;
        }

        .gb-vue-timeline-content__right {
            margin-top: 0 !important;
        }

        .gb-base-badge {
            padding-bottom: 0 !important;
        }

        .roadmap-pic-mobile {
            margin-top: 0px !important;
            width: 100% !important;
            margin-left: 0 !important;
            margin-bottom: 48px;
            display: inherit !important;
        }

        .roadmap-pic {
            display: none;
        }
    }

    .roadmap-pic {
        margin-top: 140px;
        width: 50%;
        margin-left: 32px;
    }

    .roadmap-pic-mobile {
        display: none;
    }

    .active .gb-vue-timeline-update__line {
        background-color: orange !important;
    }

    .gb-vue-timeline-update--dark .gb-vue-timeline-update__center .gb-vue-timeline-update__line {
        width: 2px !important;
    }

    .gb-vue-timeline-update--dark .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet {
        box-shadow: none !important;
    }

    .gb-vue-timeline-update {
        font-family: inherit !important;
    }

    .gb-vue-timeline-update__description {
        color: #aca8a8 !important;
    }

    .gb-vue-timeline-content__right {
        padding: 16px 12px;
        background: #fff;
        border-radius: 8px;
        z-index: 1;
        position: relative;
        margin-top: -8px;
    }

    .gb-vue-timeline-update .gb-vue-timeline-update__left {
        text-align: center !important;
    }

    .gb-vue-timeline-update .gb-vue-timeline-update__right {
        /*box-shadow: 0px 8px 21px -23px #18191a;*/
        box-shadow: 0px 0px 50px 0px rgba(11, 11, 12, 0.05);
        flex: 1;
        margin-bottom: 40px;
        padding-bottom: 0 !important;
    }

    .gb-vue-timeline-update__ago {
        margin-right: 6px;
        width: 100%;
        color: #1b2431 !important;
    }

    .gb-vue-timeline-update .gb-vue-timeline-update__center {
        margin-left: 18px !important;
    }

    .gb-vue-timeline-update h1, .gb-vue-timeline-update h2 {
        margin: 0;
    }

    .gb-vue-timeline-update__center {
        margin-top: 3px
    }

    .gb-vue-timeline-update__meta {
        width: 100%;
    }

    .gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta {
        margin: 0 !important;
        display: block !important;
    }

    .gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__category {
        box-shadow: none !important;
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
    }

    .gb-base-badge {
        border-radius: 5px !important;
        width: 100%;
        height: 5vh;
        display: flex;
        align-items: center;
        font-family: inherit !important;
    }

    article.gb-vue-timeline-update:last-child .gb-vue-timeline-update__line {
        display: none;
    }
</style>
