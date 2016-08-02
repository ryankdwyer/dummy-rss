var RSS = require('rss');
var Chance = require('chance'),
    chance = new Chance();

var feedBuilder = {};
var staticDate = 1466534277639;

feedBuilder.feedOptions = {
    title: 'Bloomberg Tracking Tags Duplication Test',
    description: 'Simple test RSS feed with an updating pubDate field.',
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
        item.title = chance.name();
        item.description = chance.paragraph();
        item.date = new Date().toUTCString();
        feed.item(item);
    });
    feed.item({
        description: 'The final',
        url: 'http://www.nnnbsfgbdfgbdfgbdfgert.com',
        guid: 'http://www.nnnbsfgbdfgbdfgbdfgert.com',
        title: 'THIS ONE SHOULD STAY THE SAME',
        date: new Date(staticDate).toUTCString() 
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
