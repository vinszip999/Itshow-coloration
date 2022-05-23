const express = require('express');
const app = express();

app.listen(8080, function(){
  console.log('8080');
})
app.get('/',function(req,res){
  res.sendFile(__dirname +'./index.html');
})
app.get('/board',function(req,res){
  res.sendFile(__dirname+'./board.html');
})
app.get('/calender',function(req,res){
  res.sendFile(__dirname+'./calender.html');
})
app.get('/detail',function(req,res){
  res.sendFile(__dirname+'./detail.html');
})
app.get('/signup',function(req,res){
  res.sendFile(__dirname+'./signup.html');
})
app.get('/terms',function(req,res){
  res.sendFile(__dirname+'./terms.html');
})