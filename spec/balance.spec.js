// Need to create classes that allow for deposits (adding amount) and withdrawals (reducing amount) to be made 
// Need to be able to see the account statement, including the date alongside the relevant debit, credit and balance amounts
// First requirement: client is able to make a deposit of £1000 on the 10-01-2012 
// Second requirement: client is able to make a deposit of £2000 on the 13-01-2012
// Third requirement: client is able to make a withdrawal of £1000 on the 14-01-2012 
// Fourth requirement: client is able to print her account statement 

const { PrivateBalance } = require("../src/balance");

console.log('Testing the Balance Class');

let balance, increasedBalance; 

beforeEach(() => {
    balance = new PrivateBalance();
    increasedBalance = new PrivateBalance(500);
})


describe("Balance Class Tests ", () => {

    describe("Balance Class Add Function Tests ", () => {
    
        it("should start with 0 as a default", () => {
            expect(balance.total()).toEqual(0); 
        })
    
        it("the add function should add a value to the balance total, and to the array", () => {
            balance.add(100);
            expect(balance.total()).toEqual(100);
            expect(balance.getTransactions()).toContain(100);

        })
    
    })

    describe("Balance Class Total Function Tests ", () => {

        it("total function should return a cumulative total of values in the array", () => {
            increasedBalance.add(100);
            expect(increasedBalance.total()).toEqual(600);
        })
    })

    describe("Balance Class Withdrawal Function Tests ", () => {

        it("the withdrawal function should input a negative value into the balance array", () => {
            balance.withdraw(500);
            expect(balance.getTransactions()).toContain(-500);
        })

        it("the withdrawal function should lower the total value in the balance", () => {
            increasedBalance.withdraw(300);
            expect(increasedBalance.total()).toEqual(200);
        })

    })

})


// Need to make an account that they can deposit things into, i.e. an array of deposits 
// Need the first test to ensure you can add a number to an empty array 
// Need to make it so that the date is associated with the addition to the array 

// Object - privateBalance
// Properties - total@number, transactionList@Array[@Number]
// Messages - total(), addDeposit(), takeWithdrawal()
// Output - @Number 

// Object - personalAccount
// Properties - total@number, transactionList@Array[@Number], dateOfTransaction@String
// Messages - accountTotal(), accountDeposit(), accountWithdrawal()
// Output - @Number, @String

// Test 1: Balance starts at 0 
// Test 2: When insert value, balances changes to this value 
// Test 3: Balance adds the inserted value into an array of transactions 
// Test 4: Instance of balance increases the total 
// Test 5: Balance adds negative value to the array of transactions 
// Test 6: Withdrawal reduces the total value 

// Date.getDate() - gets the date from 1-31 
// Date.getMonth() - gets the month from 1-12 
// Date.prototype.getFullYear() - gets the year in full 

// console.log(`${day}, "-", ${month}, "-", ${year}`); 





