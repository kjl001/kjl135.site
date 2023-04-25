<!DOCTYPE html>
	<head>
		<title>PHP Environment Variables</title>
	</head>

	<body>
		<h1 align=center>Environment Variables</h1>
		<hr>

		<?php
			echo "<h2>Environment Variables</h2>";

			$envs = getenv();
			foreach ($envs as $env => $val) {
				echo "$env = $val<br>";
			}

			echo "<h2>Server Variables</h2>";

			foreach($_SERVER as $serv => $val) {
				echo "$serv = $val<br>";
			}
		?>
	</body>
</html>