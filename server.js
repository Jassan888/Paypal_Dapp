const express= require('express');

const app= express();

const bodyParser= require('body-parser');

const save_user_information= require('./models/server-db');

const path= require('path');

const publicPath= path.join(__dirname, './public');

const paypal= require('paypal-rest-sdk');
const { getMaxListeners } = require('process');

app.use(bodyParser.json());
app.use(express.static(pathPath));

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'ARw2V3N7pbj3KelC2euCThkZmi3mGeWAz_0JJc34J9_exw7FnuVjdFBN7G5_NcNjWYDv_wwGXquwn4Vf',
    'client_secret': 'EOMB6r2zRk81YYuHlfo10TPSCuVd8KdhkVcBaOHTQ7n7fev5znGp3VHV2__WzgYhR--VIAyqVyeh2u-C'
  });

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

    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Lottery",
                    "sku": "Funding",
                    "price": "amount",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "amount"
            },
            'payee':{
                email:'jeffreyassan88@gmail.com'
            },
            "description": "Lottery Purchase"
        }]
    };
    
    
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(payment);
            for(var i= 0; i < payment.links.length; i++){
                if(payment.links[1].rel == 'approval_url'){
                    return res.send(payment.links[1].href);
                }
            }
        }
    });
});

app.get('/success', async(req, res)=>{
    const payerId= req.query.payerID;
    const paymentId= req.query.paymentID;
    var execute_payment_json={
        'payerId': payerId,
        "transactions":[{
           " amount":{
               "currency": "USD",
               "total": 100
           }
        }]
    }

    paypal.execute(paymentId, execute_payment_json, function payment(err){
        
    })

});

app.get('./get_total_amount', async(req,res)=>{
   var result= await get_total_amount();
   res.send(result);
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});