var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "kjl001",
	password: "Chk7!3Slct"
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});