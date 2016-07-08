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
        url: 'http://www.test30.com',
        title: 'Marie Hart',
        description: 'Cu dubiwome tufviuf dugepico kisel tudko cupculvep ajzenni kal hegpikli mor geada bu terpalut ri. Tu tejdahde muz linzubwi va ropeudo lov ta tovirzoh fenpa bin videp cobip iru dakzijru kujulgo se. Mot hahi gu werihgoj rezeobo fas elcaz ge jeboov ukoasmov lemoh necojma aw perujkec daboc. Rihesron cijaeri gitgo huknu cug dowmu karpet setiepi fa pejzen mil ukwen coluba govuf jotce ifacos co. Uf rocvep keade bavibo kiza coepo lomomer ke jow pu zuko reutohe ha ojumij kucmuko gedahvaw. Velvon kun vedokfed pababte wilwug zatvahe socafre fedrupef rofwi damgiiv mec degi sic miv fowew rughikdu.',
        guid: 'http://www.test30.com/guid',
        author: 'Ryan Dwyer'
    }, {
        url: 'http://www.test31.com',
        title: 'Jeremy Murray',
        description: 'Ikevuwar hut oduzaros pojzusos nenipu olaru uv pog utuug aho cetobdor wodo iki ko. Hun fol horkulpar ku gevse soaj fepsiktif hejaku tib cu in mecul ne putamces cambo ho av. Jijgi gow kalengi se lu nik tif boizutij um poj we fizroci gahhu. Hutjihe macsihor puhowewi rurfef zihsef dekwiggak geojamef lakpa jujge digudwi tekujop ruh pam ragof go pu petradsac wizek. Ja dej ses emki gazug zuvoeve fo tudol egoab oduumu noz vip ho idpoene musuvi. Piflem zanrejoh fidmub zizun vuro lukiju ke rigzetpo fecarra sufokca ikjomwi vufmav nedew pu.',
        guid: 'http://www.test31.com/guid',
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
    //feed.item({
    //    description: 'description3',
    //    url: 'http://google.com/ABCD',
    //    guid: 'http://google.com/ABCD',
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
    feed.item({
        description: 'This is the newest of the new',
        url: 'http://www.ryanreynolds.com',
        guid: 'http://www.ryanreynolds.com',
        title: 'Ryan Reynolds',
        date: new Date().toUTCString()
    });
    var xml = feed.xml();
    return xml;
};

module.exports = feedBuilder;
