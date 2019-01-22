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

const send = function(res, statusCode, content) {
	res.statusCode = statusCode;
	res.write(content);
	res.end();
	return;
};

const sendNotFound = function(res) {
	return send(res, 404, 'Page Not Found');
};

const serveFile = function(req, res) {
	let path = getPath(req.url);
	fs.readFile(path, (err, content) => {
		if (!err) {
			send(res, 200, content);
			return;
		}
		sendNotFound(res);
		return;
	});
};

app.use(logRequests);
app.use(serveFile);

// Export a function that can act as a handler

module.exports = app.handleRequest.bind(app);
