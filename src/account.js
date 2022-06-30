class PersonalAccount {
    #cashBalance;
    
    constructor(balanceObject) {
        this.#cashBalance = balanceObject;
    }
    
        add(amount) { 
            this.#cashBalance.add(amount);
            return this.#cashBalance.total();
        }
    
         withdraw(amount) {
        this.#cashBalance.withdraw(amount)
        return this.#cashBalance.total();
    } 


    setCashBalance(cashBalance) { 
        this.#cashBalance = cashBalance; 
        return this.#cashBalance;
    }

    getCashBalance() { 
        return this.#cashBalance; 
        }
    
}
    
let personal1 = new PersonalAccount()

personal1.setCashBalance(1000); 
console.log(personal1.getCashBalance()); 

module.exports = { PersonalAccount }; 
