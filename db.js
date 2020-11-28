const mysql= require('mysql');
const { disconnect } = require('process');

const db_config= {
    host: '127.0.0.1',
    user: 'root',
    password: 'mecca888$',
    database: 'webapp'
}

const connection;

function handDisconnet(){
    connection= mysql.createConnection(db_config);
    connection.connect(function(err){
        if(err){
            console.log('Error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        }
    });

    connection.on('error', function(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handleDisconnect();
        }else{
            throw error;
        }
    });
}

handleDisconnect();

module.exports = connection;