<?php
	session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<title>PHP Sessions</title>
</head>

<body>
	<h1 align=center>PHP Sessions Page 1</h1>
	<hr>

	<?php
		echo "<b>Name: </b> $_POST['name']";

		$_SESSION["name"] = $_POST["name"];
	?>
</body>
</html>