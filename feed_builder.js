var RSS = require('rss');
var Chance = require('chance'),
    chance = new Chance();

var feedBuilder = {};

feedBuilder.feedOptions = {
    title: 'Bloomberg Test',
    description: 'Simple test RSS feed with an updating pubDate field.',
    feed_url: '',
    site_url: ''
}

feedBuilder.items = [{
        description: 'description1',
        url: 'http://www.nytimes.com/2016/06/02/technology/disruption-unwelcome.html?partner=rss&emc=rss',
        guid: 'http://www.nytimes.com/2016/06/02/technology/disruption-unwelcome.html'
    }, {
        description: 'description2',
        url: 'http://www.nytimes.com/2016/06/02/technology/personaltech/smartphone-photos.html?partner=rss&emc=rss',
        guid: 'http://www.nytimes.com/2016/06/02/technology/personaltech/smartphone-photos.html'
    }];
    
feedBuilder.buildFeed = function (feedOptions, items) {
    var feed = new RSS(feedOptions);
    items.forEach(function (item) {
        item.title = chance.name();
        item.date = new Date().toUTCString();
        feed.item(item);
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
