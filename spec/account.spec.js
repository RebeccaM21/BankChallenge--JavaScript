// require the source classes 

// Jasmine tests are arranged in test suites 

// Test suites
// Describe made up of 2 arguments: 1st is string to name suite, 2nd is function for all of the suite test code

//EXAMPLE
const { PersonalAccount } = require("../src/account");

let testBalance = {
    add: (amount) => { amount },
    total: () => { },
    withdraw: (amount) => { -amount },
};

let testAccount = new PersonalAccount(testBalance);
   

describe(`Account Class Tests`, () => {

    describe(`Account Class Call Tests`, () => {
    
        it(`should call the balance object's add method`, () => {
            const addSpy = spyOn(testBalance, `add`);
            
            testAccount.add(100);

            expect(addSpy).toHaveBeenCalled();

        })
    
        it(`should call the balance object's total method`, () => {
            const addSpy = spyOn(testBalance, `add`);
            const newSpy = spyOn(testBalance, `total`);
            testAccount.add(100);

            expect(addSpy).toHaveBeenCalledBefore(newSpy);

        })
    
        it(`should call the balance object's withdrawal method`, () => {
            const withdrawSpy = spyOn(testBalance, `withdraw`);
            testAccount.withdraw(100);

            expect(withdrawSpy).toHaveBeenCalled();

        })

    });

    describe(`Account Class Functionality Tests`, () => {

        it(`should allow the cash balance to be set for the specific account, and returned`, () => {

            const setBalanceSpy = spyOn(testAccount, `setCashBalance`); 
            const getBalanceSpy = spyOn(testAccount, `getCashBalance`); 

            testAccount.setCashBalance(1000);
            testAccount.getCashBalance();


            expect(setBalanceSpy).toHaveBeenCalledBefore(getBalanceSpy);
            expect(getBalanceSpy).toEqual(1000);

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