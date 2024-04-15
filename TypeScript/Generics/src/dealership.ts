interface Dealership<T> {
  dealershipName: T;
  soldCars: number;
}

interface Actions<T> {
  sellCar(dealerID: string, model: T): void;
}

type modelsSoldObj<T> = { [key: string]: T };

class CarDealership<T> implements Dealership<T>, Actions<T> {
  modelsSold: modelsSoldObj<T>;
  dealershipName: T;
  soldCars: number;

  constructor(dealershipName: T) {
    this.modelsSold = {};
    this.dealershipName = dealershipName;
    this.soldCars = 0;
  }

  sellCar(dealerID: string, model: T): void{
    this.modelsSold[dealerID] = model;
    this.soldCars++;
  }

  showDetails() {
    let results = [];
    results.push(`${this.dealershipName}:`);
    Object.entries(this.modelsSold).forEach((el) => {
        results.push(`${el[0]} sold ${el[1]}`);
    });

    return results.join(`\n`);
  }
}


let dealership = new CarDealership("SilverStar");
dealership.sellCar("BG01", "C Class");
dealership.sellCar("BG02", "S Class");
dealership.sellCar("BG03", "ML Class");
dealership.sellCar("BG04", "CLK Class");
console.log(dealership.showDetails());
