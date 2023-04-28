<!DOCTYPE html>
<html>
	<head>
		<title>PHP Environment Variables</title>
	</head>

	<body>
		<h1 align=center>Environment Variables</h1>
		<hr>

		<?php
			echo "<h2>Environment Variables</h2>";

			echo "<ul>";
			$envs = getenv();
			foreach ($envs as $env => $val) {
				echo "<li>$env = $val</li>";
			}
			echo "</ul>";

			echo "<h2>Server Variables</h2>";

			echo "<ul>";
			foreach($_SERVER as $serv => $val) {
				echo "<li>$serv = $val</li>";
			}
			echo "</ul>";
		?>
	</body>
</html>