/**
 * Created by ellenrocha on 21/03/2017.
 */
const mysql = require('mysql');

const connMySql = ()=> {
    const parametrosConexao = {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'sistema_escola'
    };

    return mysql.createConnection(parametrosConexao);
};

module.exports = function(){
    return connMySql;
}