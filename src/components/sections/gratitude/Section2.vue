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
                    <a href="https://twitter.com/hashtag/XBNGratitude" target="_blank">
                        #XBNGratitude
                    </a>
                </div>


                <div class="list-twitter-wrapper" v-if="list_gratitude.length > 0">
                    <div class="item-twitter">
                        <tweet v-for="(item,index) in list_gratitude" :id="item" :key="index"></tweet>
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

    import {Tweet} from 'vue-tweet-embed'

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
                list_gratitude_temp: [],
                loading_get_tweet: false
            }
        },
        methods: {
            checkIsReply(id, list_item) {
                let result = false
                list_item.forEach(item => {
                    if (item.id == id)
                        result = true
                })

                return result
            },
            formatListTweet(statuses) {

                let result = []
                let result_2 = []

                let v = this

                let id_twitter_xbn_official = 1327827665890381800

                statuses.forEach(item => {

                    if (item.entities.media) {
                        if (item.retweeted_status) {

                            if (item.retweeted_status.user.id != id_twitter_xbn_official) {

                                //Check có phải là reply của 1 tweet đang có khi get về

                                let is_reply = v.checkIsReply(item.retweeted_status.id, statuses)

                                if (!is_reply) {
                                    if (result.indexOf(item.id_str) == -1) {
                                        result.push(item.id_str)
                                        result_2.push(item)
                                    }
                                }
                            }
                        } else {
                            if (result.indexOf(item.id_str) == -1) {
                                result.push(item.id_str)
                                result_2.push(item)
                            }
                        }
                    }
                })


                this.$set(this, 'list_gratitude', result.slice(0, 20));
                this.$set(this, 'list_gratitude_temp', result_2.slice(0, 20));

            },
            async getTwitter() {
                this.loading_get_tweet = true
                let fetch_tweet = await fetch('https://us-central1-get-twitter-pot-with-string.cloudfunctions.net/get-twitter-post-with-string');
                let list_tweet = await fetch_tweet.json()
                this.formatListTweet(list_tweet.statuses)
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
