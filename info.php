<?php
$servername = "localhost";
$username = "u851768328_thaiusa01";
$password = "Firefox001";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>



 <?php

/* $connect = mysql_connect(“Email”, “Message”); if (!connect) { die('Connection Failed: ' . mysql_error()); { mysql_select_db(“database_name”, $connect);

$user_info = “INSERT INTO table_name (Email, Message) VALUES ('$_POST[recipient-name]', '$_POST[message-text]')”; if (!mysql_query($user_info, $connect)) { die('Error: ' . mysql_error()); }

echo “Your information was added to the database.”;

mysql_close($connect); ?>

*/