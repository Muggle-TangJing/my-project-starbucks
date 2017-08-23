

$('#login').click(function () {
  var c=$('#cardNum').val();
  var p=$('#upwd').val();
  sessionStorage['cNum']=c;
  $.ajax({
    type:'POST',
    url:'data/login.php',
    data:{cardNum:c,upwd:p},
    success: function (data) {
      var rs=parseInt(data);
      if(rs<0){
        alert('登录失败!请稍后重试!')
      }else{
        alert('登录成功!3S后自动跳转到首页!')
        setTimeout(function () {
          document.location.href='my_project_starbucks.html';
        },3000)

      }
    },
    error:function(){
      alert("响应消息有错！请检查网络");
    }
  })
})