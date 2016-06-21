var http = require('http');
var feedBuilder = require('./feed_builder');

var xml = feedBuilder.buildFeed(feedBuilder.feedOptions, feedBuilder.items);

http.createServer(function(req, res) {
    console.log( new Date().toUTCString(), ': Requesting xml feed...');
    console.log( new Date().toUTCString(), ': Building xml rss feed...');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    console.log( new Date().toUTCString(), ': Delivering xml rss feed...');
    res.end(xml);   
}).listen(28330);


console.log('Server running at rdwyer.home.saturn.sfsrv.net:28330');
