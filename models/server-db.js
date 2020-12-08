const { resolve } = require('path');
const db= require('../db.js');

save_user_information= (dta) => new Promise((Resolve,Reject)=>{

    db.query('INSERT INTO lottery_information SET ?', data,

    function(err,results,feilds){

        if(err){
            reject('could not insert in lottery information');
        }

        resolve('Successful');
    });
})

get_total_amount= (dta) => new Promise((Resolve,Reject)=>{

    db.query('select sum(amount) as total_amount from lottery_information', null,

    function(err,results,feilds){

        if(err){
            reject('could not get total amount');
        }

        resolve(result);
    });
})

get_list_of_participants= (data)=> Promise((Resolve, Reject)=>{
    db.query('select from lotteryinformation', null, function(err,results,fields){
        if(err){
            reject('could not fetch list from participants')
        }
        resolve(results);
    });
});

delete_users=(data)=> new Promise((resolve,reject)=>{
    db.query('delete from lottery_information where ID > 0',null,funtion(err,results,fields)>={
        if(err){
            reject("could not delete all users");
            resolve("sucessfully deleted all users");
        }
    });
});

module.exports= {
    save_user_information,
    get_list_of_participants,
    delete_user

}