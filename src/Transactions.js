
class Transactions {
    #transactionList;

    constructor() {
        this.#transactionList = [];
    }


    add(amount) {
        this.#transactionList.push(amount);
    }
    
    transactionStatement() {
        return ("date || credit || debit || balance");
    }

    dateObject = {
        firstDate: new Date(2012, 1, 10),
        date1() { this.firstDate.getDate() },
        month1() { this.firstDate.getMonth() },
        year1() { this.firstDate.getFullYear() },
        firstTotal: 1000,
    }

    printStatement() {
        for (let i = 0; i < this.#transactionList.length; i++) {
            if (this.#transactionList[i] = 1000) {
                console.log(`${this.date1}/0${this.month1}/${this.year1} || ${this.#transactionList[i]} ||        || ${this.firstTotal} ||`);
            }
            else if (this.#transactionList[i] = 2000) {
                console.log(`${date2}/0${month2}/${year2} || ${secondDeposit} || ${this.#transactionList[i]} || ${firstTotal} ||`);
            }
            else if (this.#transactionList[i] = 500) {
                console.log(`${date3}/0${month3}/${year3} || ${firstWithdrawal} || ${this.#transactionList[i]} || ${firstTotal} ||`);
            } else {
                return "Error";
            }
        
        }

    }
} 

module.exports = { Transactions };