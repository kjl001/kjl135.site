import mysql from 'mysql2';
import express from 'express';

const pool = mysql.createPool({
	host: '127.0.0.1',
	user: 'kjl001',
	password: '',
	database: 'kjl135'
}).promise();

async function getAllStatic() {
	const [rows] = await pool.query("SELECT * FROM static");
	return rows;
}

async function getStatic(id) {
	const [rows] = await pool.query(`SELECT * FROM static WHERE id = ?`, [id]);
	return rows[0];
}

async function createStatic(data) {
	const [result] = await pool.query(`INSERT INTO static VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [data['id'], data['userAgent'], data['userLanguage'], data['cookieEnabled'], data['jsEnabled'], data['imgEnabled'], data['cssEnabled'], data['windowWidth'], data['windowHeight']]);
	return data;
}

const app = express();
app.use(express.json());

app.get('/static', (req, res) => {
	res.send('This should be the static data');
});

app.post('/static', (req, res) => {
	const out = createStatic(req.body);
	res.status(201).send(out);
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

app.listen(3000, () => {
	console.log('Server is running on port 3000!');
});