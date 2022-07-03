class PersonalAccount {
    #cashBalance;
    #transactionList;

    constructor(balanceObject, transactionObject) {
        this.#cashBalance = balanceObject;
        this.#transactionList = transactionObject;
    }
    
    add(amount) {
        this.#cashBalance.add(amount);
        this.#transactionList.add(amount);
        return this.#cashBalance.getTotal();
    }
    
    withdraw(amount) {
        this.#cashBalance.withdraw(amount)
        let negativeWithdrawal = -Math.abs(amount);
        this.#transactionList.add(negativeWithdrawal);
        return this.#cashBalance.getTotal();
    }
    
    getTotal() {
        return this.#cashBalance.getTotal();
    }
    
    
    printStatement() {
        console.log(this.#transactionList.transactionStatement());
        return this.#transactionList.printStatement();
    }
    
    
    } 
    

module.exports = { PersonalAccount }; 
