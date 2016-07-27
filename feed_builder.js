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
        url: 'http://www.bgdfgbdfgbdfgbdfgbdf.com',
        guid: 'http://www.bgdfgbdfgbdfgbdfgbdf.com',
        author: 'Ryan Dwyer',
        date: new Date().toUTCString()
    }, {
        url: 'http://www.jklajlsdhfjkalhsdfkjlhasd.com',
        guid: 'http://www.jklajlsdhfjkalhsdfkjlhasd.com',
        author: 'Ryan Dwyer',
        date: new Date().toUTCString()
    }, {
        url: 'http://www.vfsdfvsdfvsdfvsdfvsdf.com',
        guid: 'http://www.vfsdfvsdfvsdfvsdfvsdf.com',
        author: 'Ryan Dwyer',
        date: new Date().toUTCString()
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
        url: 'http://www.bbgsgbgfbdffgbdfgbdfg.com',
        guid: 'http://www.bbgsgbgfbdffgbdfgbdfg.com',
        title: 'This will not change....adfasdfasdfa',
        date: new Date(staticDate).toUTCString() 
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
