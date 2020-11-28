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

module.exports= {
    save_user_information
}