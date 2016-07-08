var RSS = require('rss');
var Chance = require('chance'),
    chance = new Chance();

var feedBuilder = {};
var staticDate = 1466534277639;

feedBuilder.feedOptions = {
    title: 'Bloomberg 30 Minutes',
    description: 'Simple test RSS feed with an updating pubDate field.',
    feed_url: '',
    site_url: ''
}

feedBuilder.items = [{
        url: 'http://www.qwerlhjkasdf.com',
        guid: 'http://www.qwerlhjkasdf.com',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.pioupoiucvasdf.com',
        guid: 'http://www.pioupoiucvasdf.com/guid',
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
        title: 'Post 30 minuter',
        description: 'some guy',
        url: 'http://jkhasdfhgqweryug.com',
        guid: 'http://jkhasdfhgqweryug.com',
        date: new Date().toUTCString()
    });
    feed.item({
        description: 'description3',
        url: 'http://google.com/30min',
        guid: 'http://google.com/30min',
        title: 'This should never change! 30 min test test',
        date: new Date(staticDate).toUTCString()
    });
    //feed.item({
    //    description: 'Kathrina',
    //    url: 'http://www.aol.com',
    //    guid: 'http://www.aol.com',
    //    title: 'This is that new new',
    //    date: 'Fri, 08 Jul 2016 15:05:40 GMT' 
    //});
    //feed.item({
    //    description: 'This is the newest of the new',
    //    url: 'http://www.ryanreynolds7.com',
    //    guid: 'http://www.ryanreynolds7.com',
    //    title: 'Who the hell is ryan reynolds',
    //    date: new Date().toUTCString()
    //});
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
