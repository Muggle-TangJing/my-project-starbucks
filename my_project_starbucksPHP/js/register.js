
$('#register').click(function () {
    var c=$('#cardNum').val();
    var p=$('#upwd').val();
  $.ajax({
    type:'GET',
    url:'data/register.php',
    data:{cardNum:c,upwd:p},
    success: function (data) {
      console.log(data);
      var rs=parseInt(data)
      if(rs<0){
        alert('注册失败!请稍后重试!')

      }else{
        alert('注册成功!3S后自动跳转到登录页面!')
        setTimeout(function () {
          location.href='login.html';
        },3000)
      }
    },
    error:function(){
      alert("响应消息有错！请检查网络");
    }
  })
})