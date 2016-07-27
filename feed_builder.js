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
        url: 'http://www.asdfasdfqwerqwerasdfasdfhjklkjh.com',
        guid: 'http://www.asdfasdfqwerqwerasdfasdfhjklkjh.com',
        author: 'Ryan Dwyer',
    }, {
        url: 'http://www.vhjgsdfgsdoiufwert.com',
        guid: 'http://www.vhjgsdfgsdoiufwert.com',
        author: 'Ryan Dwyer',
    }, {
        url: 'http://www.nhfghnfghnfghnfghnhg.com',
        guid: 'http://www.nhfghnfghnfghnfghnhg.com',
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
        url: 'http://www.poiupoiupoiausdfasdfasd.com',
        guid: 'http://www.poiupoiupoiausdfasdfasd.com',
        title: 'This will not and should not change... ',
        date: new Date(staticDate).toUTCString() 
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
