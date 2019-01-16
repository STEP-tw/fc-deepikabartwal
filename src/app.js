const fs = require('fs');
const app = (req, res) => {
	let path = './html-pages' + req.url;
	if (path == './html-pages/') {
		path = './html-pages/index.html';
	}
	console.log(path);
	fs.readFile(path, (err, content) => {
		if (!err) {
			res.statusCode = 200;
			res.write(content);
			res.end();
		}
		res.statusCode = 404;
		res.end();
	});
};

// Export a function that can act as a handler

module.exports = app;
