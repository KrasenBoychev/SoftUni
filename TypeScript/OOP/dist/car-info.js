"use strict";
class Car {
    _brand = "";
    _model = "";
    _horsepower = 0;
    get brand() {
        return this._brand;
    }
    set brand(newBrand) {
        this._brand = newBrand;
    }
    get model() {
        return this._model;
    }
    set model(newModel) {
        this._model = newModel;
    }
    get horsepower() {
        return this._horsepower;
    }
    set horsepower(newHorsepower) {
        this._horsepower = newHorsepower;
    }
    printMsg() {
        console.log(`The car is: ${this.brand} ${this.model} - ${this.horsepower} HP.`);
    }
}
const carInfo = 'Skoda Karoq 150';
const [newBrand, newModel, newHorsepower] = carInfo.split(' ');
const chevrolet = new Car;
chevrolet.brand = newBrand;
chevrolet.model = newModel;
chevrolet.horsepower = Number(newHorsepower);
chevrolet.printMsg();
//# sourceMappingURL=car-info.js.map