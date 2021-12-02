const express = require('express');
const moment = require('moment')
const server = express();
server.all('/', (req, res) => {
	res.sendFile(__dirname + "/index.html")
});

function keepAlive() {
	server.listen(3000, () => {
		console.log(`[ HOST 24/7 ] Ready for Hosting at ` + moment(Date.now()).utcOffset("+0700").format("LLLL"));
	});
}

module.exports = keepAlive;