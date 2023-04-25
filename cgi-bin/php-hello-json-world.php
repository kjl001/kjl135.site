<!DOCTYPE html>
	<head>
		<title>Hello PHP CGI World</title>
	</head>

	<body>
		<?php
			$ip = $_SERVER['REMOTE_ADDR'];
			$date = date("m-d-Y h:i:sa");
			$out = array("message" => "Hello World from PHP!", "date" => "Today's date is $date", "ipAddress" => $ip);

			echo json_encode($out);
		?>
	</body>
</html>
