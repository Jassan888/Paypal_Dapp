const express= require('express');

const app= express();

const bodyParser= require('body-parser');

const save_user_information= require('./models/server-db');

const path= require('path');

const publicPath= path.join(__dirname, './public');

app.use(bodyParser.json());
app.use(express.static(pathPath));

app.post('/post_info',async(req,res)=>{
    var email= req.body.email;
    var amount= res.bode.amount;

    if(amount<= 1){
        return_info= {};
        return_info.error= true;
        return_info.message= "Amount should be greater than 1";
        return_req.send(return_info);
    }

    var result= await save_user_information({"amount" :amount, "email" :email});
    res.send(result);
});

app.get('./get_total_amount', async(req,res)=>{
   var result= await get_total_amount();
   res.send(result);
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});