<?php
  header('Content-Type:application/json;charset=utf-8');

  $cardNum=$_REQUEST['cardNum'];
  $upwd=$_REQUEST['upwd'];
  $conn=mysqli_connect('127.0.0.1','root','','stb');
  $sql="SET NAMES UTF8";
  mysqli_query($conn,$sql);
  $sql="INSERT INTO s_login VALUES(null,$cardNum,'$upwd')";
  $result=mysqli_query($conn,$sql);

  if($result){
  echo '1';
  }else{
  echo '-1';
  };
?>