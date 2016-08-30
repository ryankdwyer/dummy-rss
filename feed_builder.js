var RSS = require('rss');
var Chance = require('chance'),
    chance = new Chance();

var feedBuilder = {};
var staticDate = 1466534277639;

feedBuilder.feedOptions = {
    title: 'White space for new client - Liftable',
    description: 'Test for keeping whtie space',
    feed_url: '',
    site_url: ''
}

feedBuilder.items = [{
        url: 'http://www.vfdsvsfvsdfjkjkjkkjjk.com',
        guid: 'http://www.vfdsvsfvsdfjkjkjkkjjk.com',
        author: 'Ryan Dwyer',
    }, {
        url: 'http://www.mmhfhgmfghmfghmfgh.com',
        guid: 'http://www.mmhfhgmfghmfghmfgh.com',
        author: 'Ryan Dwyer',
    }, {
        url: 'http://www.poioiuqwerqwerqwerkjlhlkjhadsfasd.com',
        guid: 'http://www.poioiuqwerqwerqwerkjlhlkjhadsfasd.com',
        author: 'Ryan Dwyer',
    }];
    
feedBuilder.buildFeed = function (feedOptions, items) {
    var feed = new RSS(feedOptions);
    items.forEach(function (item) {
        item.title = chance.name() + "<br><br>" + chance.name();
        item.description = chance.paragraph() + "<br><br>" + chance.paragraph();
        item.date = new Date().toUTCString();
        feed.item(item);
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
