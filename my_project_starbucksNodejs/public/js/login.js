

$('#login').click(function () {
  var c=$('#cardNum').val();
  var p=$('#upwd').val();
  $.ajax({
    type:'POST',
    url:'/login',
    data:{cardNum:c,upwd:p},
    success: function (result) {
      if(result.code===1){
        alert('注册成功!3S后自动跳转到首页!');
        sessionStorage['loginCnum']=c;
        sessionStorage['loginId']=result.id;
        location.href='my_project_starbucks.html';
      }else{
        alert('登录失败!原因:'+result.msg);
      }
    }
  })
})