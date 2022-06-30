class PrivateBalance {
    #transactionList;
    
    constructor(defaultBalance = 0) {
        this.#transactionList = [];
        this.add(defaultBalance);
    }

        getTransactions() { 
            return this.#transactionList;
        }
    
        add(amount) { 
            this.#transactionList.push(amount);
            return this.#transactionList;
        }
    
        withdraw(amount) { 
            let negativeWithdrawal = -Math.abs(amount);
            this.#transactionList.push(negativeWithdrawal); 
            return this.#transactionList;
        }
    
        total() {
        return this.#transactionList.reduce((previousValue, currentValue) => previousValue + currentValue);
        }
    }

module.exports = { PrivateBalance }; 
