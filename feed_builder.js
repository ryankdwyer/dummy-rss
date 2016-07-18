var RSS = require('rss');
var Chance = require('chance'),
    chance = new Chance();

var feedBuilder = {};
var staticDate = 1466534277639;

feedBuilder.feedOptions = {
    title: 'Bloomberg Prod Test 1',
    description: 'Simple test RSS feed with an updating pubDate field.',
    feed_url: '',
    site_url: ''
}

feedBuilder.items = [{
        url: 'http://www.adfasdfpoiuiuyoy.com',
        guid: 'http://www.adfasdfpoiuiuyoy.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.poiupoiupoiaudsfasdf.com',
        guid: 'http://www.poiupoiupoiaudsfasdf.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.xcvbxvciouyiouy.com',
        guid: 'http://www.xcvbxvciouyiouy.com',
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
        url: 'http://www.vfvdvfyodsufygayugf.com',
        guid: 'http://www.vfvdvfyodsufygayugf.com',
        title: 'Knock on wood....',
        date: new Date(staticDate).toUTCString() 
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
