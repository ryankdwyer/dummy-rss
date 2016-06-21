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
        url: 'http://www.nytimes.com/2016/06/02/disruption-unwelcome.html?partner=rss&emc=rss',
        guid: 'http://www.nytimes.com/2016/06/02/disruption-unwelcome.html'
    }, {
        description: 'description2',
        url: 'http://www.nytimes.com/2016/06/02/personaltech/smartphone-photos.html?partner=rss&emc=rss',
        guid: 'http://www.nytimes.com/2016/06/02/personaltech/smartphone-photos.html'
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
        url: 'http://google.com/123/456/789',
        guid: 'http://google.com/123/456/789'
        title: 'This should never change!',
        date: new Date(staticDate).toUTCString()
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
