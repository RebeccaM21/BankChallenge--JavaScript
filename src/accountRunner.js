const { PersonalAccount } = require("../src/account"); 
const { PrivateBalance } = require("../src/balance"); 

const FirstAccount = new PersonalAccount(new PrivateBalance()); 

let newBalance = new PrivateBalance(500); 
console.log(newBalance.getTotal()); 
newBalance.add(100);
console.log(newBalance.getTotal()); 

let newMoney = new PrivateBalance(500); 
console.log(newMoney.getTotal()); 
newMoney.add(900);
console.log(newMoney.getTotal());


console.log("----- Checking Account -----");
FirstAccount.add(1000); 
console.log(FirstAccount.getTotal()); 





const firstDate = new Date(2012, 01, 10)
const date1 = firstDate.getDate()
const month1 = firstDate.getMonth()
const year1 = firstDate.getFullYear()

console.log(`${date1}/${month1}/${year1}`);





const secondDate = new Date(2012, 01, 13)
const date2 = secondDate.getDate()
const month2 = secondDate.getMonth()
const year2 = secondDate.getFullYear()

console.log(`${date2}/${month2}/${year2}`);




const thirdDate = new Date(2012, 01, 14)
const date3 = thirdDate.getDate()
const month3 = thirdDate.getMonth()
const year3 = thirdDate.getFullYear()

console.log(`${date3}/${month3}/${year3}`);

let array1 = ["apples", '||', "oranges", '||', "bananas"];
console.log(array1);

let practice = { 
    Date: [date3 + '/' + month3 + '/' + year3], 
    
}

console.log(practice.key); 

// console.log(`${day}, "/", ${month}, "/", ${year}`); 


// Transaction.printStatement(date) shows all the dates specific to the date
// Account.printStatement shows all the dates in a sequential row 

