import mysql from 'mysql2';
import express from 'express';

const pool = mysql.createPool({
	host: '127.0.0.1',
	user: 'kjl001',
	password: 'Chk7!3Slct',
	database: 'kjl135'
}).promise();

/* Get All from Table */
async function getAllStatic() {
	const [rows] = await pool.query("SELECT * FROM static");
	return rows;
}
async function getAllPerf() {
	const [rows] = await pool.query("SELECT * FROM performance");
	return rows;
}

/* Get Single from Table */
async function getStatic(id) {
	const [rows] = await pool.query(`SELECT * FROM static WHERE id = ?`, [id]);
	return rows[0];
}
async function getPerf(id) {
	const [rows] = await pool.query(`SELECT * FROM performance WHERE id = ?`, [id]);
	return rows[0];
}

/* Create Row in Table */
async function createStatic(data) {
	const result = await pool.query(`INSERT INTO static VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [data['id'], data['userAgent'], data['userLanguage'], data['cookieEnabled'], data['jsEnabled'], data['imgEnabled'], data['cssEnabled'], data['windowWidth'], data['windowHeight'], data['netType']]);
	return result;
}
async function createPerf(data) {
	const result = await pool.query(`INSERT IGNORE INTO performance VALUES (?, ?, ?, ?)`, [data['id'], data['loadStart'], data['loadEnd'], data['totalLoad']]);
	return result;
}

/* Update Row in Table */
async function updateStatic(data) {
	const result = await pool.query(`UPDATE static SET userAgent = ?, userLanguage = ?, cookieEnabled = ?, jsEnabled = ?, imgEnabled = ?, cssEnabled = ?, windowWidth = ?, windowHeight = ?, netType = ? WHERE id = ?`, [data['userAgent'], data['userLanguage'], data['cookieEnabled'], data['jsEnabled'], data['imgEnabled'], data['cssEnabled'], data['windowWidth'], data['windowHeight'], data['netType'], data['id']]);
	return result;
}
async function updatePerf(data) {
	const result = await pool.query(`UPDATE performance SET loadStart = ?, loadEnd = ?, totalLoad = ? WHERE id = ?`, [data['loadStart'], data['loadEnd'], data['totalLoad'], data['id']]);
	return result;
}


const app = express();
app.use(express.json());

/* GET Methods */
app.get('/static', async (req, res) => {
	const out = await getAllStatic();
	res.send(out);
});
app.get('/static/:id', async (req, res) => {
	const id = req.params.id;
	const out = await getStatic(id);
	res.send(out);
});

app.get('/performance', async (req, res) => {
	const out = await getAllPerf();
	res.send(out);
});
app.get('/performance/:id', async (req, res) => {
	const id = req.params.id;
	const out = await getPerf(id);
	res.send(out);
});



/* POST Methods */
app.post('/static', async (req, res) => {
	const out = await createStatic(req.body);
	res.status(201).send(out);
});

app.post('/performance', async (req, res) => {
	const out = await createPerf(req.body);
	res.status(201).send(out);
});

/* UPDATE Methods */
app.post('/static/:id', async (req, res) => {
	const out = await updateStatic(req.body);
	res.send(out);
});

app.post('/performance/:id', async (req, res) => {
	const out = await updatePerf(req.body);
	res.send(out);
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

app.listen(3000, () => {
	console.log('Server is running on port 3000!');
});