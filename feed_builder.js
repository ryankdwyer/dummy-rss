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
        url: 'http://www.gfsdsfgsdwertwer.com',
        guid: 'http://www.gfsdsfgsdwertwer.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.adfasdfqewrqwe.com',
        guid: 'http://www.adfasdfqewrqwe.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.poopiuoiufdgsdfg.com',
        guid: 'http://www.poopiuoiufdgsdfg.com',
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
        url: 'http://www.asdfasdqwerqew.com',
        guid: 'http://www.asdfasdqwerqew.com',
        title: 'Will not edit....',
        date: new Date(staticDate).toUTCString() 
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
