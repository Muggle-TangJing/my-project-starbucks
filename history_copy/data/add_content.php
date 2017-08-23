<?php
  header("Content-Type:application/json;charset=utf-8");
  $uname=$_REQUEST['uname'];
  $content=$_REQUEST['content'];
  if(empty($uname) || empty($content))
  {
    echo '[]';
    return;
  }
  $pubTime = time()*1000;
  require('init.php');
  $sql="INSERT INTO h_forum VALUES(null,'$uname','$content',$pubTime)";
  $result=mysqli_query($conn,$sql);
  $output = [];
  if($result){
    $arr['msg'] = 'succ';
    $arr['pid'] = mysqli_insert_id($conn);
    $output[] = $arr;
  }
  else
  {
    $arr['msg'] = 'error';
    $output[] = $arr;
  }
  echo json_encode($output);
?>