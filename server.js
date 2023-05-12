const mysql = require('mysql');
const express = require('express');

const db = mysql.createConnection({
	host: "localhost",
	user: "kjl001",
	password: "Chk7!3Slct",
	database: "kjl135"
});

db.connect((err) => {
	if (err) throw err;
	console.log("Connected!");
});

const app = express();
app.use(express.json());

app.post('/static', (req, res) => {
	const data = req.body;
	let sql = `INSERT INTO static VALUES (${data['id']}, ${data['userAgent']}, ${data['userLanguage']}, ${data['cookieEnabled']}, ${data['jsEnabled']}, ${data['imgEnabled']}, ${data['cssEnabled']}, ${data['windowWidth']}, ${data['windowHeight']});`;
	db.query(sql, (err) => {
		if (err) {
			throw err;
		}
		res.send('Static Data Inserted');
	});
});

app.get('/static', (req, res) => {
	let sql = 'SELECT * FROM static';
	db.query(sql, (err, results) => {
		if (err) {
			throw err;
		}
		res.send('Retrieving Static Data');
		console.log(results);
	});
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});
