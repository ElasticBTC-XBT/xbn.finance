/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */



exports.getPosts = (req, res) => {

    var Twit = require('twit')

    var apikey = '98lC4TeRFcbQnpXQcA0t0EXfE'
    var apiSecretKey = 'dxRbEAn6QhJzHeXwC5iPkSJrY3iMUtXbNz02d6ZcC6smjtNYGe'
    var accessToken = '907931084603535360-JKhChGzzOzQAQAWpvnQeM2qvoOcdQk6'
    var accessTokenSecret = 'BIVWetKkl97G9zaGi0I1StC7Pw1sdRCuAAnbST4TgKHvF'

    var T = new Twit({
        consumer_key: apikey,
        consumer_secret: apiSecretKey,
        access_token: accessToken,
        access_token_secret: accessTokenSecret,
    });

    T.get('search/tweets', {header: '', q: '#XBNGratitude', count: 1000}, function (err, data, response) {
        // console.log(data)
        res.status(200).send(data);
    })
    // let message = req.query.message || req.body.message || 'Hello World!';
    // res.status(200).send('aa');
};
