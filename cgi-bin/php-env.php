<!DOCTYPE html>
	<head>
		<title>PHP Environment Variables</title>
	</head>

	<body>
		<h1>Environment Variables</h1>
		<hr>

		<?php
			$envs = getenv();
			foreach ($envs as $env => $val) {
				echo "$env = $val<br>";
			}
		?>
	</body>
</html>