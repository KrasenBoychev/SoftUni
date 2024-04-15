abstract class CreateAccount<T, V> {
    bankName: T;
    bankID: V;

    constructor(bankName: T, bankID: V) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}

type transactions = { [key: string]: number};

class PersonalAccount<T, V> extends CreateAccount<T, V> {
    readonly ownerName: string;
    money: number;
    recentTransactions: transactions;

    constructor(bankName: T, bankID: V, ownerName: string) {
        super(bankName, bankID);
        this.ownerName = ownerName;
        this.money = 0;
        this.recentTransactions = {};
    }

    deposit(amount: number) {
        this.money += amount;
    }

    expense(amount: number, expenseType: string) {
        if (this.money >= 0) {

            if (!(expenseType in this.recentTransactions)) {
                this.recentTransactions[expenseType] = 0;
            }
            this.recentTransactions[expenseType] += amount;
            this.money -= amount;

        } else {
            throw new Error(`You cant make ${expenseType} transaction`)
        }
    }

    showDetails() {
        let result: string[] = [];

        let totalMoneySpent = 0;
        Object.values(this.recentTransactions).forEach(amount => {
            totalMoneySpent += amount;
        });

        result.push(`Bank name: ${this.bankName}`);
        result.push(`Bank ID: ${this.bankID}`);
        result.push(`Owner name: ${this.ownerName}`);
        result.push(`Money: ${this.money}`);
        result.push(`Money spent: ${totalMoneySpent}`);

        return result.join('\n');
    }
}

let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');
account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());

console.log('--------------------------');

let account2 = new PersonalAccount('Fibank', 100000, 'Petar Petrol');
account2.deposit(10000);
account2.deposit(7000);
account2.expense(1200, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');
console.log(account2.showDetails());
