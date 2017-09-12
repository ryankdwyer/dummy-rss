var http = require('http');
var fs = require('fs');
var url = require('url');

var feedBuilder = require('./feed_builder');
var port = process.env.PORT || 8080;


// FOR RSS FEEDS
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


// FOR SERVING INDEX.HTML
//fs.readFile('./index.html', function(err, html) {
//    if (err) {
//        throw err;
//    };
//
//    http.createServer(function(req, res) {
//        res.writeHeader(200, {'Content-Type': 'text/html'});
//        res.write(html);
//        res.end();
//    }).listen(port);
//})

// FOR SERVING IMAGES
http.createServer(function(req, res) {
    var request = url.parse(req.url, true);
    var action = request.pathname;

    if (action === '/trump.gif') {
        var img = fs.readFileSync('./trump.gif');
        res.writeHead(200, {'Content-Type':'image/gif'});
        res.end(img, 'binary');
    } else { 
     	res.writeHead(200, {'Content-Type': 'text/plain' });
     	res.end('Hello World \n');
	}
}).listen(port);

console.log('Server running at rdwyer.home.saturn.sfsrv.net:' + port);
