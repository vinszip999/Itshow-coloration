"use strict";
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'color',
  password : '1111',
  database : 'dacheroum'
});

if(connection.connect()){
    console.log("연결 완료");
}else{
    console.log("연결 실패");
}
//사용하고 나면 end()시켜줘야 함


// connection.query('SELECT * from Users', (error, rows, fields) => {
//   if (error) throw error;
//   console.log('User info is: ', rows);
// });

function Login(userid, userpw){
    connection.query('SELECT * from user where user_id='+userid+'and user_pw = '+userpw, (error, rows, fields) => {
        if (error) throw error;
        console.log('User info is: ', rows);
      });
      
    return rows;
}

function Signup(user_id, user_pw, user_name, user_email, user_phone, user_type, user_proimg){
  connection.query('INSERT INTO USERS VALUES('+user_id+', '+user_pw+', '+user_name+', '+user_email+', '+user_phone+', '+user_type+', '+user_proimg+')', (error, rows, fields) => {
    if (error) throw error;
  });
}

function Select_Post(){
  connection.query('SELECT * from post', (error, rows, fields) => {
    if (error) throw error;
  });
  return rows;
}

function Select_Like_Post(user_id){
  connection.query('SELECT * from like_post where user_id ='+user_id, (error, rows, fields) => {
    if (error) throw error;
  });
  return rows;
}

function Upload_post(post_title, post_map, post_imgid, post_text, post_user){
  connection.query('INSERT INTO post VALUES('+post_title+', '+post_map+', '+post_imgid+', '+post_text+', '+post_user+')', (error, rows, fields) => {
    if (error) throw error;
  });
}