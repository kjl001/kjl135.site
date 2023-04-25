<!DOCTYPE html>
<html>
	<head>
		<title>GET Request Echo</title>
	</head>

	<body>
		<h1 align=center>GET Request Echo</h1>
		<hr>

		<?php
			echo "<b>Query String:</b><br>";

			echo "<ul>";
			foreach ($_GET as $name => $val) {
				echo "<li>$name = $val</li>";
			}
			echo "</ul>";
		?>
	</body>
</html>