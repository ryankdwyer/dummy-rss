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
        url: 'http://www.test26.com',
        guid: 'http://www.test26.com/guid'
    }, {
        description: 'description2',
        url: 'http://www.test27.com',
        guid: 'http://www.test27.com/guid'
    }];
    
feedBuilder.buildFeed = function (feedOptions, items) {
    var feed = new RSS(feedOptions);
    items.forEach(function (item) {
        var url = chance.url();
        item.url = url;
        item.guid = url;
        item.title = chance.name();
        item.description = chance.paragraph();
        item.date = new Date().toUTCString();
        feed.item(item);
    });
    feed.item({
        description: 'description3',
        url: 'http://google.com/ABCDE',
        guid: 'http://google.com/ABCDE',
        title: 'This should never change!',
        date: new Date(staticDate).toUTCString()
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
