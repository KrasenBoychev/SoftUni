class Car {
    _brand: string = "";
    _model: string = "";
    _horsepower: number = 0;

    get brand(): string {
        return this._brand;
    }

    set brand(newBrand: string) {
        this._brand = newBrand;
    }

    get model(): string {
        return this._model;
    }

    set model(newModel: string) {
        this._model = newModel;
    }

    get horsepower(): number {
        return this._horsepower;
    }

    set horsepower(newHorsepower: number) {
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
