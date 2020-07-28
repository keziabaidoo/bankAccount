//import express
const express = require('express');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');

const {listBanksController,updateBankController,createBankController,deleteBankController} = require('./contollers')

//create express service instance
  const server = express();


// //middlewares
 server.use(bodyParser.json());
// //routes
// //view banks - get method
// server.get('/bank',listBanksController);
 // create bank - post methods
 server.post('/bank',createBankController)
//  //update bank - put method   
//  server.put('/bank',updateBankController);
//  // delete bank - delete methods
//  server.delete('/bank',deleteBankController)


//connect to database and start server

mongoose.connect('mongodb+srv://codetrainUser:asomdwoe.com100@cluster0.s56xn.mongodb.net/codetrain?retryWrites=true&w=majority',
  {useNewUrlParser:true, useUnifiedTopology:true}
)
.then(result =>{

server.listen(3000, ()=> console.log('server is ready'));
}).catch(err => console.log(err));
