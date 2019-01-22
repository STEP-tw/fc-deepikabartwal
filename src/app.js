const fs = require('fs');
const RequestHandler = require('./requestHandler');
const app = new RequestHandler();

const logRequests = function(req, res, next) {
	console.log(req.url);
	console.log(req.method);
	console.log('Headers-->/n', req.headers);
	next();
};

const addPathPrefix = url => `./public${url}`;

const getPath = function(url) {
	let path = addPathPrefix(url);
	if (url === '/') {
		path = addPathPrefix('/index.html');
	}
	return path;
};

const serveFile = function(req, res) {
	let path = getPath(req.url);
	fs.readFile(path, (err, content) => {
		if (!err) {
			res.statusCode = 200;
			res.write(content);
			res.end();
			return;
		}
		res.statusCode = 404;
		res.end();
	});
};

app.use(logRequests);
app.use(serveFile);

// Export a function that can act as a handler

module.exports = app.handleRequest.bind(app);
