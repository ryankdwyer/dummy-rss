var RSS = require('rss');
var Chance = require('chance'),
    chance = new Chance();

var feedBuilder = {};
var staticDate = 1466534277639;

feedBuilder.feedOptions = {
    title: 'Bloomberg Test',
    description: 'Simple test RSS feed with an updating pubDate field.',
    feed_url: '',
    site_url: ''
}

feedBuilder.items = [{
        url: 'http://www.sdflxkjwoeiru.com',
        guid: 'http://www.sdflxkjwoeiru.com/guid',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.dhsfkjahsdfkljhaskjdfh.com',
        guid: 'http://www.dhsfkjahsdfkljhaskjdfh.com/guid',
        author: 'Ryan Dwyer'
    }];
    
feedBuilder.buildFeed = function (feedOptions, items) {
    var feed = new RSS(feedOptions);
    //items.forEach(function (item) {
    //    item.title = chance.name();
    //    item.description = chance.paragraph();
    //    item.date = new Date().toUTCString();
    //    feed.item(item);
    //});
    feed.item({
        title: 'hey there please dont break',
        description: 'some guy',
        url: 'http://bibleasldkjfalskdjfasdfasdf.com',
        guid: 'http://bibleasldkjfalskdjfasdfasdf.com',
        date: new Date().toUTCString()
    });
    //feed.item({
    //    description: 'description3',
    //    url: 'http://google.com/A',
    //    guid: 'http://google.com/A',
    //    title: 'This should never change!',
    //    date: new Date(staticDate).toUTCString()
    //});
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
