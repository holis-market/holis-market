<?php
$name = $_POST['NAME'];
$email = $_POST['EMAIL'];
$phonenumber = $_POST['PHONENUMBER'];
$what = $_POST['WHAT'];
$why = $_POST['WHY'];
$where = $_POST['WHERE'];
$file = fopen('../data/supplier.csv', 'a');
fwrite($file, "$email; $name; $phonenumber; $what; $where; $why" . PHP_EOL);
fclose($file);
echo "success";
?>