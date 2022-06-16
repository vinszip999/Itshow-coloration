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

function login(userid, userpw){
    connection.query('SELECT * from user where user_id='+userid+'and user_pw = '+userpw, (error, rows, fields) => {
        if (error) throw error;
        console.log('User info is: ', rows);
      });
      
    return rows;
}

function Signup(user_id, user_pw, user_name, user_email, user_phone, user_type, user_proimg){
  
}