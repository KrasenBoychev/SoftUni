type customerObj = { customerName: string; visited: boolean };

class Courier implements FoodAndBeverages.Delivery {
  protected placesToVisit: customerObj[];

  constructor(placesToVisit: customerObj[]) {
    this.placesToVisit = placesToVisit;
  }

  newCustomer(customerName: string, visited?: boolean): void | string {
    if (!visited) {
      visited = false;
    }
    for (const customer of this.placesToVisit) {
      if (customerName == customer.customerName) {
        throw new Error(`${customerName} is already a customer of yours!`);
      } else {
        this.placesToVisit.push({ customerName, visited });
        return `${customerName} just became your client.`;
      }
    }
  }

  visitCustomer(customerName: string): void {
    for (const customer of this.placesToVisit) {
      if (customerName == customer.customerName) {
        customer.visited = true;
        return;
      }
    }
    throw new Error(`${customerName} is not your customer`);
  }

  showCustomers(): string {
    const result: string[] = [];
    for (const { customerName, visited } of this.placesToVisit) {
      result.push(`${customerName} -> ${visited}`);
    }

    return result.join(`\n`);
  }
}

let courier = new Courier([{ customerName: "DHL", visited: false }]);
courier.newCustomer("Speedy");
courier.newCustomer("MTM");
courier.newCustomer("TipTop");

courier.visitCustomer("DHL");
courier.visitCustomer("MTM");
courier.visitCustomer("MTM");

console.log(courier.showCustomers());
