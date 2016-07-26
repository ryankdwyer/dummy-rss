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
        url: 'http://www.thisisthefirstlinkofthefeed.com',
        guid: 'http://www.thisisthefirstlinkofthefeed.com',
        author: 'Ryan Dwyer',
        title: 'Title Number One ',
        date: new Date(staticDate).toUTCString()
    }, {
        url: 'http://www.thisisthesecondlinkofthefeed.com',
        guid: 'http://www.thisisthesecondlinkofthefeed.com',
        author: 'Ryan Dwyer',
        title: 'Title Number Two ',
        date: new Date(staticDate).toUTCString()
    }, {
        url: 'http://www.thisisthethirdlinkofthefeed.com',
        guid: 'http://www.thisisthethirdlinkofthefeed.com',
        author: 'Ryan Dwyer',
        title: 'Title Number Three ',
        date: new Date(staticDate).toUTCString()
    }];
    
feedBuilder.buildFeed = function (feedOptions, items) {
    var feed = new RSS(feedOptions);
    items.forEach(function (item) {
        //item.title = chance.name();
        //item.description = chance.paragraph();
        //item.date = new Date().toUTCString();
        feed.item(item);
    });
    feed.item({
        description: 'The final',
        url: 'http://www.bbbasaaassssswwwww.com',
        guid: 'http://www.bbbasaaassssswwwww.com',
        title: 'Title Number Four ',
        date: new Date(staticDate).toUTCString() 
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
