<!DOCTYPE html>
	<head>
		<title>Hello PHP CGI World</title>
	</head>

	<body>
		<?php
			$ip = $_SERVER['REMOTE_ADDR'];
			$date = date("m-d-Y h:i:sa");
			$out = array("IP" => $ip, "heading" => "Hello World", "time" => $date, "title" => "Hello PHP CGI World");

			echo json_encode($out);
		?>
	</body>
</html>
