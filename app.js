var express = require('express'),
	sassMiddleware = require('node-sass-middleware');
var app = express();

// adding the sass middleware
app.use(
	sassMiddleware({
		src: __dirname + '/sass', 
		dest: __dirname + '/app/styles',
		prefix: '/styles',
		debug: true,
		outputStyle: 'compressed'
	})
);
app.use(express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/*', function(req, res) {
	res.sendFile('index.html', { root: __dirname+'/app' });
});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});