<!DOCTYPE html>
<html>
	<head>
		<title>General Request Echo</title>
	</head>

	<body>
		<h1 align=center>General Request Echo</h1>
		<hr>

		<?php
			echo "<b>Request Method: </b>" . getenv("REQUEST_METHOD") . "<br><br>";

			echo "<b>Protocol: </b>" . getenv("SERVER_PROTOCOL") . "<br><br>";

			echo "<b>Query String:</b>";
			echo "<ul>";
			foreach ($_GET as $name => $val) {
				echo "<li>$name = $val</li>";
			}
			echo "</ul>";

			echo "<br><br>";

			echo "<b>Message Body:</b>";
			echo "<ul>";
			foreach ($_POST as $header => $val) {
				echo "<li>$header = $val</li>";
			}
			echo "</ul>";
		?>
	</body>
</html>