
//bank model
// class BankModel{
//     constructor({name, location, branch, phone, address, accountNumber }){
//         this.name = name;
//         this.location = location;
//         this.branch = branch;
//         this.phone = phone;
//         this.address = address;
//         this.accountNumber = accountNumber
//     }

//     save(){
//        bankDb.push(this);
//        return this;
//     }

//     static all(){
//       return bankDb;
//     }

//     static update(updateInfo ={}){
//      bankDb= bankDb.map(bank => {
//         if(bank.name === updateInfo.name){
//           return {...bank, ...updateInfo}
//         }

//         return bank;
//       });

//      }
   

//     static delete({name}){

//      let deleteBank = null;
//        bankDb= bankDb.filter(bank =>{
//           if(bank.name !==name){

//            deleteBank = bank;
//             return true;
//           }

//            deleteBank = bank;
//           return false;
//         });

//        return deleteBank;
//     }
//    }