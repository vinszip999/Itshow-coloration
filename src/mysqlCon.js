"use strict";
let conmysql = () => {
    const mysql = require('mysql');  // mysql 모듈 로드
    const conn = {  // mysql 접속 설정
        host: 'localhost',
        port: '3306',
        user: 'color',
        password: '1111',
        database: 'DACHEROUM'
    };
    if (conn) {
        return conn;
    } else {
        console.log('연결 실패');
    }
}
module.exports = conmysql;