const  http=require('http');
const express=require('express');
const  user=require('./user');
var app=express();
http.createServer(app).listen(8080);
app.use(express.static('public'));

app.post('/register',user.register);
app.post('/login',user.login);
