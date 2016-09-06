var RSS = require('rss');
var Chance = require('chance'),
    chance = new Chance();

var feedBuilder = {};
var staticDate = 1466534277639;

feedBuilder.feedOptions = {
    title: 'White space for new client - Liftable',
    description: 'Test for keeping whtie space',
    feed_url: '',
    site_url: ''
}

feedBuilder.items = [{
        url: 'http://www.sdckjsndckjnsdckjn.com',
        guid: 'http://www.sdckjsndckjnsdckjn.com',
        author: 'Ryan Dwyer',
        categories: ['label1', 'label2']
    }, {
        url: 'http://www.kjncsskjnsdkjnsdkjn.com',
        guid: 'http://www.kjncsskjnsdkjnsdkjn.com',
        author: 'Ryan Dwyer',
        categories: ['label1', 'label3']
    }, {
        url: 'http://www.kjcnksdjnsdkjnkjnwekjkjwekj.com',
        guid: 'http://www.kjcnksdjnsdkjnkjnwekjkjwekj.com',
        author: 'Ryan Dwyer',
        categories: ['label2', 'label4']
    }];
    
feedBuilder.buildFeed = function (feedOptions, items) {
    var feed = new RSS(feedOptions);
    items.forEach(function (item) {
        item.title = chance.name() + "<br/><br/>" + chance.name();
        item.description = chance.paragraph() + "<br/><br/>" + chance.paragraph();
        item.date = new Date().toUTCString();
        feed.item(item);
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
