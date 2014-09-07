<?php

$subscribe_url = "https://us8.api.mailchimp.com/2.0/lists/subscribe";

$email_struct = new StdClass();
$zipcode_struct = new StdClass();

$email_struct->email = $_REQUEST['EMAIL'];
$zipcode_struct->zipcode = $_REQUEST['ZIPCODE'];

$parameters = array(
    'apikey' => 'a22ede70bad3b36e959ef5d7486a4870-us8',
    'id' => '99dc037f98',
    'email' => $email_struct,
    'zipcode' => $zipcode_struct,
    'double_optin' => false,
    'send_welcome' => true
);

$curl = curl_init($subscribe_url);
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($parameters));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($curl);

if(curl_errno($curl)){
    echo 'Curl error: ' . curl_error($curl);
}

echo "Hallo";
echo $response;

?>