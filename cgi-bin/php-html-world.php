<!DOCTYPE html>
<head>
	<title>Hello PHP CGI World</title>
</head>

<body>

<h1 align=center>Hello HTML World!</h1>
<hr>

<?php
	echo "Hello World";
	echo "The program was run at: " . date("m-d-Y h:i:sa");
	echo "Your current IP Address is: " . .$_SERVER['REMOTE_ADDR'];
?>

</body>
</html>