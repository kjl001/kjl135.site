import mysql from 'mysql2';
import express from 'express';

const pool = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	port: process.env.MYSQL_PORT,
	database: process.env.MYSQL_DATABASE,
	waitForConnections: true,
	connectionLimit: 10,
	maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
	idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
	queueLimit: 0
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
async function getAllActivity() {
	const [rows] = await pool.query("SELECT * from activity");
	return rows;
}

/* Get Specific from Table */
async function getStatic(id) {
	const [rows] = await pool.query(`SELECT * FROM static WHERE uid = ?`, [id]);
	return rows;
}
async function getPerf(id) {
	const [rows] = await pool.query(`SELECT * FROM performance WHERE uid = ?`, [id]);
	return rows;
}
async function getActivity(id) {
	const [rows] = await pool.query(`SELECT * FROM activity WHERE uid = ?`, [id]);
	return rows;
}

/* Create Row in Table */
async function createStatic(data) {
	const result = await pool.query(`INSERT INTO static (uid, userAgent, userLanguage, cookieEnabled, jsEnabled, imgEnabled, cssEnabled, windowWidth, windowHeight, netType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [data['uid'], data['userAgent'], data['userLanguage'], data['cookieEnabled'], data['jsEnabled'], data['imgEnabled'], data['cssEnabled'], data['windowWidth'], data['windowHeight'], data['netType']]);
	return result;
}
async function createPerf(data) {
	const result = await pool.query(`INSERT INTO performance (uid, loadStart, loadEnd, totalLoad) VALUES (?, ?, ?, ?)`, [data['uid'], data['loadStart'], data['loadEnd'], data['totalLoad']]);
	return result;
}
async function createActivity(data) {
	const result = await pool.query(`INSERT INTO activity (uid, error, mouseCoords, clickCoords, clickButton, scrollCoords, keyUp, idleEnd, idleDuration, enteredPage, lastPageURI, leftPage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [data['uid'], data['error'], data['mouseCoords'], data['clickCoords'], data['clickButton'], data['scrollCoords'], data['keyUp'], data['idleEnd'], data['idleDuration'], data['enteredPage'], data['lastPageURI'], data['leftPage']]);
	return result;
}

/* Update Row in Table */
async function updateStatic(data, id) {
	const result = await pool.query(`UPDATE static SET uid = ?, userAgent = ?, userLanguage = ?, cookieEnabled = ?, jsEnabled = ?, imgEnabled = ?, cssEnabled = ?, windowWidth = ?, windowHeight = ?, netType = ? WHERE id = ?`, [data['uid'], data['userAgent'], data['userLanguage'], data['cookieEnabled'], data['jsEnabled'], data['imgEnabled'], data['cssEnabled'], data['windowWidth'], data['windowHeight'], data['netType'], id]);
	return result;
}
async function updatePerf(data, id) {
	const result = await pool.query(`UPDATE performance SET uid = ?, loadStart = ?, loadEnd = ?, totalLoad = ? WHERE id = ?`, [data['uid'], data['loadStart'], data['loadEnd'], data['totalLoad'], id]);
	return result;
}
async function updateActivity(data, id) {
	const result = await pool.query(`UPDATE activity SET uid = ?, error = ?, mouseCoords = ?, clickCoords = ?, clickButton = ?, scrollCoords = ?, keyUp = ?, idleEnd = ?, idleDuration = ?, enteredPage = ?, lastPageURI = ?, leftPage = ? WHERE id = ?`, [data['uid'], data['error'], data['mouseCoords'], data['clickCoords'], data['clickButton'], data['scrollCoords'], data['keyUp'], data['idleEnd'], data['idleDuration'], data['enteredPage'], data['lastPageURI'], data['leftPage'], id]);
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

app.get('/activity', async (req, res) => {
	const out = await getAllActivity();
	res.send(out);
});
app.get('/activity/:id', async (req, res) => {
	const id = req.params.id;
	const out = await getActivity(id);
	res.send(out);
})



/* POST Methods */
app.post('/static', async (req, res) => {
	const out = await createStatic(req.body);
	res.status(201).send(out);
});

app.post('/performance', async (req, res) => {
	const out = await createPerf(req.body);
	res.status(201).send(out);
});

app.post('/activity', async (req, res) => {
	const out = await createActivity(req.body);
	res.status(201).send(out);
});

/* UPDATE Methods */
app.post('/static/:id', async (req, res) => {
	const id = req.params.id;
	const out = await updateStatic(req.body, id);
	res.send(out);
});

app.post('/performance/:id', async (req, res) => {
	const id = req.params.id;
	const out = await updatePerf(req.body, id);
	res.send(out);
});

app.post('/activity/:id', async (req, res) => {
	const id = req.params.id;
	const out = await updateActivity(req.body, id);
	res.send(out);
})

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

app.listen(3000, () => {
	console.log('Server is running on port 3000!');
});