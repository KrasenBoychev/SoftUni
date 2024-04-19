namespace FoodAndBeverages {
    export interface Delivery {
        newCustomer(customerName: string, visited: boolean): void | string;
        visitCustomer(customerName: string): void;
        showCustomers(): string;
    }
}