const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const db = mysql.createConnection({
	host: "localhost",
	user: "kjl001",
	password: "Chk7!3Slct",
	port: "3000",
	database: "kjl135"
});

db.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});

const app = express();
app.use(bodyParser.json());

app.post('/static', (req, res) => {
	let sql = `INSERT INTO static (id, userAgent, userLanguage, cookieEnabled, jsEnabled, imgEnabled, cssEnabled, windowWidth, windowHeight) VALUES (${req.body['id']}, ${req.body['userAgent']}, ${req.body['userLanguage']}, ${req.body['cookieEnabled']}, ${req.body['jsEnabled']}, ${req.body['imgEnabled']}, ${req.body['cssEnabled']}, ${req.body[windowWidth]}, ${req.body[windowHeight]})`;
	db.query(sql, err => {
		if (error) throw err
		res.send('Static Data Inserted');
	});
});

app.listen('3000', () => {
	console.log('Server started on port 3000');
});
