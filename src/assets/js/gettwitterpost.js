// THIS FILE IS JUST FOR TEST

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

T.get('search/tweets', {header: '', q: '#XBNGratitude', count: 1000}, function (err, data, response) {
    console.log(data)
})
