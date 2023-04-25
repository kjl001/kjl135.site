<!DOCTYPE html>
<html>
	<head>
		<title>POST Request Echo</title>
	</head>

	<body>
		<h1 align=center>POST Request Echo</h1>
		<hr>

		<?php
			echo "<b>Message Body:</b><br>";

			echo "<ul>";
			foreach ($_POST as $header => $val) {
				echo "<li>$header = $val</li>";
			}
			echo "</ul>";
		?>
	</body>
</html>