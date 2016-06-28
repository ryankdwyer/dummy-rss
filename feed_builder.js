var RSS = require('rss');
var Chance = require('chance'),
    chance = new Chance();

var feedBuilder = {};
var staticDate = 1466534277639;

feedBuilder.feedOptions = {
    title: 'Bloomberg Test',
    description: 'Simple test RSS feed with an updating pubDate field.',
    feed_url: '',
    site_url: ''
}

feedBuilder.items = [{
        description: 'description1',
        url: 'http://www.test12.com',
        guid: 'http://www.test12.com/guid'
    }, {
        description: 'description2',
        url: 'http://www.test13.com',
        guid: 'http://www.test13.com/guid'
    }];
    
feedBuilder.buildFeed = function (feedOptions, items) {
    var feed = new RSS(feedOptions);
    items.forEach(function (item) {
        item.title = chance.name();
        item.date = new Date().toUTCString();
        feed.item(item);
    });
    feed.item({
        description: 'description3',
        url: 'http://google.com/1234567890',
        guid: 'http://google.com/1234567890',
        title: 'This should never change!',
        date: new Date(staticDate).toUTCString()
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
