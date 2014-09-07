<?php
$question = $_POST['QUESTION'];
$email = $_POST['EMAIL'];
$file = fopen('../data/faq.txt', 'a');
fwrite($file, "$email; $question" . PHP_EOL);
fclose($file);
echo "success";
?>