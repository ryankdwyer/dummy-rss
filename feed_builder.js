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
        url: 'http://www.fghjfghjgsdfgsd.com',
        guid: 'http://www.fghjfghjgsdfgsd.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.popoipoiqeroqwejjj.com',
        guid: 'http://www.popoipoiqeroqwejjj.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.cvbncvbncvbndfghfg.com',
        guid: 'http://www.cvbncvbncvbndfghfg.com',
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
        url: 'http://www.zxzsdddadagf.com',
        guid: 'http://www.zxzsdddadagf.com',
        title: 'Will not edit....',
        date: new Date(staticDate).toUTCString() 
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
