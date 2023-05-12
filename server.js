/*const mysql = require('mysql');
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
*/

import mysql from 'mysql2';
import express from 'express';

mysql.createPool({
	host: 'localhost',
	user: 'kjl001',
	password: '',
	database: 'kjl135'
}).promise();

async function getAllStatic() {
	const [rows] = await pool.query("SELECT * FROM static");
	return rows;
}

async function getStatic(id) {
	const [rows] = await pool.quer(`SELECT * FROM static WHERE id = ?`, [id]);
	return rows[0];
}

async function createStatic(data) {
	const [result] = await pool.query(`INSERT INTO static VALUES (${data['id']}, ${data['userAgent']}, ${data['userLanguage']}, ${data['cookieEnabled']}, ${data['jsEnabled']}, ${data['imgEnabled']}, ${data['cssEnabled']}, ${data['windowWidth']}, ${data['windowHeight']})`);
	return data;
}

const app = express();

app.get('/static', (req, res) => {
	res.send('This should be the static data');
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

app.listen(3000, () => {
	console.log('Server is running on port 3000!');
});