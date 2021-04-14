<template>

    <div class="container hero" v-loading="loading_get_tweet">

        <div
                class="hero-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
            <div
                    class="split-wrap"
                    :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop'
                    ]">

                <div class="main-title">
                    LIST TWEET FOR #XBNGratitude HASHTAG
                </div>


                <div class="list-twitter-wrapper" v-if="list_gratitude.length > 0">
                    <div class="item-twitter">
                        <tweet v-for="(item,index) in list_gratitude" :id="item.id_str" :key="index"></tweet>
                    </div>
                </div>

                <div v-else>
                    <div class="main-title not-tweet">
                        Do not have any tweet for #XBNGratitude Hashtag
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
    import {SectionSplitProps} from '@/utils/SectionProps.js'

    import {Tweet, Moment, Timeline} from 'vue-tweet-embed'

    export default {
        name: 'GratitudeSection2',
        components: {
            Tweet,
            // Moment,
            // Timeline
        },
        mixins: [SectionSplitProps],
        data() {
            return {
                list_gratitude: [],
                loading_get_tweet: false
            }
        },
        methods: {
            async getTwitter() {
                this.loading_get_tweet = true
                let fetch_tweet = await fetch('https://us-central1-get-twitter-pot-with-string.cloudfunctions.net/get-twitter-post-with-string');
                let list_tweet = await fetch_tweet.json()
                this.$set(this, 'list_gratitude', list_tweet.statuses);
                this.loading_get_tweet = false
            }
        },
        mounted() {
            this.getTwitter()
        }
    }
</script>
<style>

    .main-title {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        color: black;
        margin-bottom: 100px;
    }


    .list-twitter-wrapper .item-twitter {
        margin-bottom: 50px;
    }

    .not-tweet {
        font-size: 20px;
    }

    .list-twitter-wrapper .twitter-tweet {
        margin: auto;
    }

    .el-loading-spinner {
        left: calc(50% - 21px) !important;
    }

</style>
