const { PersonalAccount } = require("../src/account"); 
const { PrivateBalance } = require("../src/balance"); 
const { Transactions } = require("../src/Transactions"); 

const FirstAccount = new PersonalAccount(new PrivateBalance(), new Transactions()); 





// const secondDate = new Date(2012, 01, 13)
// const date2 = secondDate.getDate()
// const month2 = secondDate.getMonth()
// const year2 = secondDate.getFullYear()

// console.log(`${date2}/${month2}/${year2}`);




// const thirdDate = new Date(2012, 01, 14)
// const date3 = thirdDate.getDate()
// const month3 = thirdDate.getMonth()
// const year3 = thirdDate.getFullYear()

// console.log(`${date3}/${month3}/${year3}`);

// let array1 = ["apples", '||', "oranges", '||', "bananas"];
// console.log(array1);



// const statement = () => {
//     return ("date || credit || debit || balance");
// } 

// const dates = () => { 
//     console.log(`${date1}/0${month1}/${year1}`);
//     // for loop through all the transactions with if statemetns
//     // for (all of the array), console.log

    
//     console.log(`${date2}/0${month2}/${year2}`);
//     console.log(`${date3}/0${month3}/${year3}`);
// }
// for (i = 0; i > 1; i++) { 
//     console.log(`${date1}/0${month1}/${year1} ||      || deposit ||`);
// }
// console.log(dates());

//  console.log(`${date1}/0${month1}/${year1} || ${credit} ||       || ${balance}`); 

// console.log(`${day}, "/", ${month}, "/", ${year}`); 


// Transaction.printStatement(date) shows all the dates specific to the date
// Account.printStatement shows all the dates in a sequential row 

// const printStatement {

//     firstDeposit: 1000, 
//     secondDeposit: 2000, 
//     firstWithdrawal: -500, 
// }; 

const firstDeposit = 1000;  
const secondDeposit = 2000; 
const firstWithdrawal = 500; 


FirstAccount.add(secondDeposit); 
console.log(FirstAccount.getTotal());
FirstAccount.withdraw(firstWithdrawal); 
console.log(FirstAccount.getTotal());

FirstAccount.printStatement(); 


console.log(" NEW "); 

console.log(FirstAccount.printStatement()); 
