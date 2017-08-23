<?php

header('Content-Type:application/json;charset=utf-8');

$start = $_REQUEST['start'];
$count = 10;
$pubTime = time()*1000;

require('init.php');

$sql = "SELECT * FROM h_forum LIMIT $start,$count";
$result = mysqli_query($conn,$sql);

$output = [];
while(true)
{
  $row = mysqli_fetch_assoc($result);
  if(!$row){
  break;
 }
  $output[] = $row;
}

echo json_encode($output);