<?php
$name = $_POST['NAME'];
$email = $_POST['EMAIL'];
$phonenumber = $_POST['PHONENUMBER'];
$sector = $_POST['SECTOR'];
$history = $_POST['HISTORY'];
$aboutholis = $_POST['ABOUTHOLIS'];
$file = fopen('../data/jobs.csv', 'a');
fwrite($file, "$email; $name; $phonenumber; $sector; $history; $aboutholis" . PHP_EOL);
fclose($file);
echo "success";
?>