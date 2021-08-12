/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */



exports.getPosts = (req, res) => {

    var Twit = require('twit')

    var apikey = '98lC4TeRFc2bQnpXQcA0t0EXfE'
    var apiSecretKey = 'xdxRbEAn6QhJzHeXwC5iPkSJrY3i3MUtXbNz02d6ZcC6smjtNYGe'
    var accessToken = 'x907931084603535360-JKhChGzzOzQAQAWpvnQeM2qvdoOcdQk6'
    var accessTokenSecret = 'BIVWetKkl97G9zaGi0I1SetC7Pw1sdRCuAAnbST4TgKHvF'

    var T = new Twit({
        consumer_key: apikey,
        consumer_secret: apiSecretKey,
        access_token: accessToken,
        access_token_secret: accessTokenSecret,
    });

    T.get('search/tweets', {header: '', q: '#XBNGratitude', count: 1000}, function (err, data, response) {

        res.status(200).send(data);
    })
    // let message = req.query.message || req.body.message || 'Hello World!';
    // res.status(200).send('aa');
};
