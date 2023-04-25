<!DOCTYPE html>
<html>
	<head>
		<title>Hello PHP CGI World</title>
	</head>

	<body>

	<h1 align=center>Hello HTML World!</h1>
	<hr>

	<?php
		echo "Hello World<br><br>";
		echo "This page was generated with the PHP programming language<br><br>";
		echo "The program was run at: " . date("Y-m-d") . "<br><br>";
		echo "Your current IP Address is: " . $_SERVER['REMOTE_ADDR'];
	?>

	</body>
</html>