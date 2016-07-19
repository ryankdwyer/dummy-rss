var RSS = require('rss');
var Chance = require('chance'),
    chance = new Chance();

var feedBuilder = {};
var staticDate = 1466534277639;

feedBuilder.feedOptions = {
    title: 'Bloomberg Tracking Tags Test',
    description: 'Simple test RSS feed with an updating pubDate field.',
    feed_url: '',
    site_url: ''
}

feedBuilder.items = [{
        url: 'http://www.asdfasdfqwerqwe.com',
        guid: 'http://www.asdfasdfqwerqwe.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.wruiwerpotuiweoirut.com',
        guid: 'http://www.wruiwerpotuiweoirut.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.pioaudsfpoiuasdoipf.com',
        guid: 'http://www.pioaudsfpoiuasdoipf.com',
        author: 'Ryan Dwyer'
    }];
    
feedBuilder.buildFeed = function (feedOptions, items) {
    var feed = new RSS(feedOptions);
    items.forEach(function (item) {
        item.title = chance.name();
        item.description = chance.paragraph();
        item.date = new Date().toUTCString();
        feed.item(item);
    });
    feed.item({
        description: 'The final',
        url: 'http://www.asdfasdfqwerqwerqwe.com',
        guid: 'http://www.asdfasdfqwerqwerqwe.com',
        title: 'Will not edit....',
        date: new Date(staticDate).toUTCString() 
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
