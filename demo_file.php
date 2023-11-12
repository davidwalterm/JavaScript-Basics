<?php
header("Content-Type: application/json; charset=utf-8");
$jsonObj = ['name' => 'John'];
echo json_encode($jsonObj);
?>