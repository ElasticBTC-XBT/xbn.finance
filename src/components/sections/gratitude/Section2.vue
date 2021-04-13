<template>

    <div class="container hero">
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
                <div class="list-twitter-wrapper">
                    <tweet v-for="(item,index) in list_gratitude" :id="item.id_str" :key="index"></tweet>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {SectionSplitProps} from '@/utils/SectionProps.js'

    import {Tweet, Moment, Timeline} from 'vue-tweet-embed'

    const Twit = require('twit')

    const apikey = '98lC4TeRFcbQnpXQcA0t0EXfE'
    const apiSecretKey = 'dxRbEAn6QhJzHeXwC5iPkSJrY3iMUtXbNz02d6ZcC6smjtNYGe'
    const accessToken = '907931084603535360-JKhChGzzOzQAQAWpvnQeM2qvoOcdQk6'
    const accessTokenSecret = 'BIVWetKkl97G9zaGi0I1StC7Pw1sdRCuAAnbST4TgKHvF'

    var T = new Twit({
        consumer_key: apikey,
        consumer_secret: apiSecretKey,
        access_token: accessToken,
        access_token_secret: accessTokenSecret,
    });

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
                list_gratitude: []
            }
        },
        methods: {
            getTwitter() {
                let v = this;
                T.get('search/tweets', {header: '', q: '#XBNGratitude', count: 1000}, function (err, data, response) {
                    data.statuses.forEach(item => {
                        v.list_gratitude.push(item)
                    })
                })
            }
        },
        mounted() {
            this.getTwitter()
        }
    }
</script>
<style>
    #big-banner-logo {
        box-shadow: none !important;
    }

    .subtitle {
        font-size: 18px;
    }
</style>
