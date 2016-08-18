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
        url: 'http://www.asdfasdfasdqwerqwer.com',
        guid: 'http://www.asdfasdfasdqwerqwer.com',
        author: 'Ryan Dwyer',
    }, {
        url: 'http://www.vfsdfvsdfvsdfvsdfv.com',
        guid: 'http://www.vfsdfvsdfvsdfvsdfv.com',
        author: 'Ryan Dwyer',
    }, {
        url: 'http://www.poiuuireotiweoiuruiowertu.com',
        guid: 'http://www.poiuuireotiweoiuruiowertu.com',
        author: 'Ryan Dwyer',
    }];
    
feedBuilder.buildFeed = function (feedOptions, items) {
    var feed = new RSS(feedOptions);
    items.forEach(function (item) {
        item.title = chance.name() + "\n\n" + chance.name();
        item.description = chance.paragraph() + "\n\n" + chance.paragraph();
        item.date = new Date().toUTCString();
        feed.item(item);
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
