const fs = require('fs');
const app = (req, res) => {
	let path = './html-data' + req.url;
	if (path == './html-data/') {
		path = './html-data/index.html';
	}
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

// Export a function that can act as a handler

module.exports = app;
