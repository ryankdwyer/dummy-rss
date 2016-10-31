var RSS = require('rss');
var Chance = require('chance'),
    chance = new Chance();

var feedBuilder = {};
var staticDate = 1466534277639;

feedBuilder.feedOptions = {
    title: 'White space and Label Test - Prod - 10/28/16',
    description: 'Test for keeping whtie space',
    feed_url: '',
    site_url: ''
}

feedBuilder.items = [{
        url: 'http://www.kjnsckdjnskdcjnskdjnkcjnskdjcn928374982739874.com',
        guid: 'http://www.kjnsckdjnskdcjnskdjnkcjnskdjcn928374982739874.com',
        author: 'Ryan Dwyer',
        categories: ['label1', 'label2']
    }, {
        url: 'http://www.vfvdfvdfvkjbkjhkjhkj1h2312kjhj.com',
        guid: 'http://www.vfvdfvdfvkjbkjhkjhkj1h2312kjhj.com',
        author: 'Ryan Dwyer',
        categories: ['label1', 'label3']
    }, {
        url: 'http://www.ckjsndkjnsdkjnsdkjn23kjn23kjn23kjn23kjn.com',
        guid: 'http://www.ckjsndkjnsdkjnsdkjn23kjn23kjn23kjn23kjn.com',
        author: 'Ryan Dwyer',
        categories: ['label2', 'label4']
    }];

//feedBuilder.items = [{
//        url: 'http://www.ckjsdkjsdkjskjsdkj.com',
//        guid: 'http://www.ckjsdkjsdkjskjsdkj.com',
//        author: 'Ryan Dwyer'
//    }, {
//        url: 'http://www.kjcnkjnskjnowewoioi.com',
//        guid: 'http://www.kjcnkjnskjnowewoioi.com',
//        author: 'Ryan Dwyer'
//    }, {
//        url: 'http://www.kjnckjndoqoiqwoioi.com',
//        guid: 'http://www.kjnckjndoqoiqwoioi.com',
//        author: 'Ryan Dwyer'
//    }];
    
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
