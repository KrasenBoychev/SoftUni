class BankAccount {
    private static id: number = 1;
    private balance: number;
    private static interest: number = 0.02;
   
    constructor() {
        this.balance = 0;
    }

    create() {
        BankAccount.id++;
    }

    deposit(deposit: number) {
        this.balance += deposit;
    }

    getInterest(years: number) {
        const sum = this.balance * BankAccount.interest * years;
        return sum;
    }

    set interestRate(rate: number) {
        BankAccount.interest = rate;
    }
}

type customersObj = { [key: number]: any };
const customers: customersObj = {};

function accounts(input: string[]) {
    let customerCount = 1;
    let i = 0;

    while (input[i] != "End") {
        const line = input[i];

        if (line.startsWith("Create")) {
            const newCustomer = new BankAccount;
            customers[customerCount] = newCustomer;

            console.log(`Account ID${customerCount} created`);
            newCustomer.create();
            customerCount++;

        }
        else if (line.startsWith("Deposit")) {
            const [action, id, amount] = line.split(' ');
            const customer = customers[Number(id)];
            
            if (!customer) {
                console.log('Account does not exist');
            } else {
                customer.deposit(Number(amount));
                console.log(`Deposited ${amount} to ID${id}`);
            }
        }
        else if (line.startsWith("SetInterest")) {
            const [action, interest] = line.split(' ');
            const changeInterest = new BankAccount;
            changeInterest.interestRate = Number(interest);
        }
        else if (line.startsWith("GetInterest")) {
            const [action, id, years] = line.split(' ');
            const customer = customers[Number(id)];
            
            if (!customer) {
                console.log('Account does not exist');
            } else {
                const total: number = customer.getInterest(Number(years));
                console.log(total.toFixed(2));
            }
        }

        i++;
    }
}

accounts(["Create", "Create", "Deposit 1 20", "Deposit 3 20", "Deposit 2 10", "SetInterest 1.5", "GetInterest 1 1", "GetInterest 2 1", "GetInterest 3 1", "End"]);

