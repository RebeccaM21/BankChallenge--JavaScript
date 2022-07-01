class PersonalAccount {
    #cashBalance;
    #transactionList; 
    
    constructor(balanceObject) {
        this.#cashBalance = balanceObject;
        this.#transactionList = []; 
    }
    
        add(amount) { 
            this.#cashBalance.add(amount);
            return this.#cashBalance.getTotal();
        }
    
         withdraw(amount) {
            this.#cashBalance.withdraw(amount)
            return this.#cashBalance.getTotal();
    } 
    
    getTotal() { 
            return this.#cashBalance.getTotal();
    }

    getTransactions() { 
            return this.#transactionList;
    }
    
    printStatement() { 
        
    }
    
}
    

module.exports = { PersonalAccount }; 
