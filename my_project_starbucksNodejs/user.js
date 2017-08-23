const pool=require('./stbpool');
const qs=require('querystring');

module.exports={
  register:(req,res)=>{
      req.on('data',(buf)=>{
        var obj=qs.parse(buf.toString());
        pool.getConnection((err,conn)=>{
            conn.query('INSERT INTO s_login VALUES(null,?,?)',[obj.cardNum,obj.upwd],(err,result)=>{
              var output={
                code:1,
                msg:'注册成功',
                id:result.insertId
              };
              res.json(output);
              conn.release();
        })
      })
      })
    },
login:(req,res)=>{
  req.on('data',(buf)=>{
    var obj=qs.parse(buf.toString());
  pool.getConnection((err,conn)=>{
    conn.query('SELECT * FROM s_login WHERE cardNum=? AND upwd=?',[obj.cardNum,obj.upwd],(err,result)=>{
    if(result.length>0){
    var output = {
      code: 1,
      msg: '登录成功!',
      id: result[0].id
    }
  }else{
      var output={
        code:2,
        msg:'用户名或密码错误!'
      }
    }
    res.json(output);
    conn.release();
  })
  })
  })
}
};





































































































