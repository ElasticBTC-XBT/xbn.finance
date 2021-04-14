<template>

    <div class="container hero">

        <div v-if="list_gratitude.length > 0">
            <div class="main-title">
                LIST TWEET FOR #XBNGratitude HASHTAG
            </div>

            <div class="list-twitter-wrapper">
                <div class="item-twitter">
                    <tweet v-for="(item,index) in list_gratitude" :id="item.id_str" :key="index"></tweet>
                </div>
            </div>
        </div>

        <div v-else>
            <div class="main-title">
                DO NOT HAVE ANY TWEET FOR #XBNGratitude HASHTAG
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
                list_gratitude: []
            }
        },
        methods: {
            async getTwitter() {
                let fetch_tweet = await fetch('https://us-central1-get-twitter-pot-with-string.cloudfunctions.net/get-twitter-post-with-string');
                let list_tweet = await fetch_tweet.json()
                this.$set(this, 'list_gratitude', list_tweet.statuses);
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

    .list-twitter-wrapper .twitter-tweet {
        margin: auto;
    }
</style>
