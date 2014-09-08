<?php
$question = $_POST['QUESTION'];
$email = $_POST['EMAIL'];
$file = fopen('../data/faq.csv', 'a');
fwrite($file, "$email; $question" . PHP_EOL);
fclose($file);
echo "success";
?>