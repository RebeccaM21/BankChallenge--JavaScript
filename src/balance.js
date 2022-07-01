class PrivateBalance {
    #totalBalance;
    
    constructor(defaultBalance = 0) {
        this.#totalBalance = defaultBalance;
    }

    add(amount) {
        this.#totalBalance += amount;
        return this.#totalBalance;
    }
    
    withdraw(amount) {
        this.#totalBalance -= amount;
        return this.#totalBalance;
    }
            
    // let negativeWithdrawal = -Math.abs(amount);
    // this.#transactionList.push(negativeWithdrawal); 
    // return this.#transactionList;
    
    getTotal() {
        return this.#totalBalance;
    }
} 
         

module.exports = { PrivateBalance }; 
