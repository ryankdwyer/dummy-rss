var http = require('http');
var fs = require('fs');
var feedBuilder = require('./feed_builder');
var port = process.env.PORT || 8080;

//var xml = feedBuilder.buildFeed(feedBuilder.feedOptions, feedBuilder.items);
//
//http.createServer(function(req, res) {
//    console.log( new Date().toUTCString(), ': Requesting xml feed...');
//    console.log( new Date().toUTCString(), ': Building xml rss feed...');
//    res.writeHead(200, {'Content-Type': 'text/xml'});
//    console.log( new Date().toUTCString(), ': Delivering xml rss feed...');
//    res.end(xml);   
//}).listen(port);
//

fs.readFile('./index.html', function(err, html) {
    if (err) {
        throw err;
    };

    http.createServer(function(req, res) {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end();
    }).listen(port);
})

console.log('Server running at rdwyer.home.saturn.sfsrv.net:' + port);
