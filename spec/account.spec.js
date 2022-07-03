const { PersonalAccount } = require("../src/account");

const testBalance = { 
    add: () => { }, 
    getTotal: () => { }, 
    withdraw: () => { }, 
}

let testAmount = 100; 

let addSpy, totalSpy, withdrawSpy, testAccount; 

 beforeEach(() => {
            testAccount = new PersonalAccount(testBalance);
            addSpy = spyOn(testBalance, `add`);
            totalSpy = spyOn(testBalance, `getTotal`);
            withdrawSpy = spyOn(testBalance, `withdraw`);
});
   
afterEach(() => {
            testWallet = null;
            addSpy = null;
            totalSpy = null;
            withdrawSpy = null; 
});
        

describe(`Account Class Tests`, () => {

    describe(`Account Class Call Tests`, () => {
    
        it(`should call the balance object's add method`, () => {
            
            testAccount.add(testAmount);

            expect(addSpy).toHaveBeenCalled();
            

        })
    
        it(`should call the balance object's getTotal method`, () => {
            testAccount.add(testAmount);

            expect(addSpy).toHaveBeenCalledBefore(totalSpy);

        })
    
        it(`should call the balance object's withdrawal method`, () => {
            testAccount.withdraw(testAmount);

            expect(withdrawSpy).toHaveBeenCalled();
            expect(withdrawSpy).toHaveBeenCalledBefore(totalSpy);

        })

    });

    describe(`Account Class Functionality Tests`, () => {

        it(`should allow to see the cash balance when calling getTotal`, () => {
            testAccount.add(testAmount); 
            console.log(testAccount.getTotal()); 
    
            expect(testAccount.getTotal()).toEqual(1000);
        })



    })
})

    // Test that you can get the cashbalance of the account 
    // Test that you can extract the dates related to the transactions