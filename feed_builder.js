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
        url: 'http://www.adsfasdfasdfasfas.com',
        guid: 'http://www.adsfasdfasdfasfas.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.asdfasdfasdfasdfasd.com',
        guid: 'http://www.asdfasdfasdfasdfasd.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.ooaoasoidfiasdiof.com',
        guid: 'http://www.ooaoasoidfiasdiof.com',
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
        url: 'http://www.asdfasdfqwerqwefasdfasdf.com',
        guid: 'http://www.asdfasdfqwerqwefasdfasdf.com',
        title: 'Will not edit....',
        date: new Date(staticDate).toUTCString() 
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
