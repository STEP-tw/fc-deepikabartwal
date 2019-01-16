const fs = require('fs');
const app = (req, res) => {
	let path = './index.html';
	if (req.url == '/styleSheet.css') {
		path = './styleSheet.css';
	}
	if (req.url == '/freshorigins.jpg') {
		path = './freshorigins.jpg';
	}
	fs.readFile(path, (err, content) => {
		res.write(content);
		res.end();
	});
};

// Export a function that can act as a handler

module.exports = app;
