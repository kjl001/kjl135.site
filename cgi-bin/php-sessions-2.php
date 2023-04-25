<?php
	session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<title>PHP Sessions</title>
</head>

<body>
	<h1 align=center>PHP Sessions Page 2</h1>
	<hr>

	<?php
		echo "<b>Name: </b>" . $_SESSION["name"] . "<br><br>";

		echo "<a href='/cgi-bin/php-sessions-1.php'>Session Page 1</a>";
		echo "<br>";

		echo "<a href='/php-cgiform.html'>PHP CGI Form</a>";
		echo "<br><br>";

		echo "<form action='/cgi-bin/php-destroy-session.php' method='get'>";
		echo "<button type='submit'>Destroy Session</button>";
		echo "</form>";
	?>
</body>
</html>