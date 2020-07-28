 const BankModel = require('./model');
// //controllers
// const listBanksController = (req,res) =>{
//     //list all banks

//     const bank = BankModel.all();
//     res.json({data:bank})
// }
  const createBankController = (req,res) =>{

    const {name, location, branch, phone, address, accountNumber} = req.body;


    const bank = new BankModel({name, location, branch, phone, address, accountNumber});

    bank.save().then(result =>{

        res.json({message:"create successful" , data:result});

    }).catch(error => console.log(error));
} 

// const updateBankController = (req,res) =>{
//   //  update a bank

//     const {name, location, branch, phone, address, accountNumber} = req.body;
     
//     const updateBank = BankModel.update({name, location, branch, phone, address, accountNumber});

//     res.json({message:"create successful", data:updateBank});
// }

// const deleteBankController = (req,res) =>{
//    // delete a bank

//    const {name} = req.body;

//    const deleteBank = BankModel.delete({name});
//     res.json({message:"bank deleted", data:deleteBank})
// }


module.exports= {
    //listBanksController,
    //updateBankController,
    createBankController,
    //deleteBankController
}