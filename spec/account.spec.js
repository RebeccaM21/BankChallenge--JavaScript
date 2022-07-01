// require the source classes 

// Jasmine tests are arranged in test suites 

// Test suites
// Describe made up of 2 arguments: 1st is string to name suite, 2nd is function for all of the suite test code

//EXAMPLE
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

        xit(`should allow for the default balance of the class to be set when declaring new Account`, () => {

            const setBalanceSpy = spyOn(testBalance); 

            let newTestAccount = new PersonalAccount(testBalance(1000)); 
    
            expect(setBalanceSpy).toHaveBeenCalled();
            expect(newTestAccount.total).toEqual(1000)
        })

        it(`should allow to see the cash balance when calling getTotal`, () => {
            testAccount.add(testAmount); 
            console.log(testAccount.getTotal()); 
    
            expect(testAccount.getTotal()).toEqual(1000);
        })

        

    })
})

    // Test that you can get the cashbalance of the account 
    // Test that you can extract the dates related to the transactions


        // it(`should call the balance object's add method only once`, () => {
        //     // Arrange
        //     const testBalance = {
        //         add: () => { },
        //         total: () => { }
        //     }
        //     const testWallet = new Wallet(testBalance);

        //     const addSpy = spyOn(testBalance, `add`);

        //     // Act
        //     testWallet.add(10);

        //     // Assert
        //     // See if testBalance's add method has been called
        //     expect(addSpy).toHaveBeenCalledTimes(1);

        // });

        // it(`should call the balance object's add method with the testAmount`, () => {
        //     // Arrange
        //     const testBalance = {
        //         add: () => { },
        //         total: () => { }
        //     }
        //     const testWallet = new Wallet(testBalance);
        //     const testAmount = 10;

        //     const addSpy = spyOn(testBalance, `add`);

        //     // Act
        //     testWallet.add(testAmount);

        //     // Assert
        //     // See if testBalance's add method has been called
        //     expect(addSpy).toHaveBeenCalledWith(testAmount);

        // });
//         const testBalance = {
//             add: () => { },
//             total: () => { }
//         }

//         const testAmount = 11110;

//         let testWallet, addSpy, totalSpy;

//         beforeEach(() => {
//             testWallet = new Wallet(testBalance);
//             addSpy = spyOn(testBalance, `add`);
//             totalSpy = spyOn(testBalance, `total`);
//         });

//         afterEach(() => {
//             testWallet = null;
//             addSpy = null;
//             totalSpy = null;
//         });

//         describe(`wallet.add - balance.add tests`, () => {
//             // This one test replaces the 3 above:
//             it(`should call the balance object's add method with the testAmount`, () => {
//                 // Arrange

//                 // Act
//                 testWallet.add(testAmount);

//                 // Assert
//                 // See if testBalance's add method has been called
//                 expect(addSpy).toHaveBeenCalledOnceWith(testAmount);

//             });

//             it(`should call the balance object's add method with the testAmount`, () => {
//                 // Arrange            

//                 // Act
//                 testWallet.add(testAmount);

//                 // Assert
//                 // See if testBalance's add method has been called
//                 expect(addSpy).toHaveBeenCalledBefore(totalSpy);

//             });
//         });

//         describe(`wallet.add - balance.total tests`, () => {
//             it('should call the balance total method once', () => {
//                 // Arrange

//                 // Act
//                 testWallet.add(testAmount);

//                 // Assert
//                 expect(totalSpy).toHaveBeenCalledTimes(1);
//             });
//         });
//     });
// });