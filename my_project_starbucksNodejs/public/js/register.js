
$('#register').click(function () {
    var c=$('#cardNum').val();
    var p=$('#upwd').val();
  $.ajax({
    type:'POST',
    url:'/register',
    data:{cardNum:c,upwd:p},
    success: function (result) {
      if(result.code===1){
        alert('注册成功!3S后自动跳转到登录页面!')
        setTimeout(function () {
          location.href='login.html';
        },3000)
      }else{
        alert('注册失败!请稍后重试!')
      }
    }
  })
})