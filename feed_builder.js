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
        url: 'http://www.test30.com',
        guid: 'http://www.test30.com/guid',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.test31.com',
        guid: 'http://www.test31.com/guid',
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
        description: 'description3',
        url: 'http://google.com/ABCD',
        guid: 'http://google.com/ABCD',
        title: 'This should never change!',
        date: new Date(staticDate).toUTCString()
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
