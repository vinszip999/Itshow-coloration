const express = require('express');
const app = express();

app.listen(8080, function(){
  console.log('8080');
})
app.get('/',function(req,res){
  res.sendFile(__dirname + './public/index.html');
})
app.get('/board',function(req,res){
  res.sendFile(__dirname+'src/public/board.html');
})
app.get('/calender',function(req,res){
  res.sendFile(__dirname+'src/public/calender.html');
})
app.get('/detail',function(req,res){
  res.sendFile(__dirname+'src/public/detail.html');
})
app.get('/signup',function(req,res){
  res.sendFile(__dirname+'src/public/signup.html');
})
app.get('/terms',function(req,res){
  res.sendFile(__dirname+'src/public/terms.html');
})