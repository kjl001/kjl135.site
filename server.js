var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "kjl001",
	password: "Chk7!3Slct",
	port: "3000"
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});
