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
        url: 'http://www.poiuapoisudfioausdf.com',
        guid: 'http://www.poiuapoisudfioausdf.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.lajlsdkjfasdadskjfh.com',
        guid: 'http://www.lajlsdkjfasdadskjfh.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.asdafqwerqweasdf.com',
        guid: 'http://www.asdafqwerqweasdf.com',
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
        url: 'http://www.poipoiuasodiufaoisudf.com',
        guid: 'http://www.poipoiuasodiufaoisudf.com',
        title: 'Will not edit....',
        date: new Date(staticDate).toUTCString() 
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
