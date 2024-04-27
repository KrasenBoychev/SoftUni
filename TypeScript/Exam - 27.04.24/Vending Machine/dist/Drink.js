"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
class Drink {
    name;
    price;
    volume;
    constructor(name, price, volume) {
        this.name = name;
        this.price = price;
        this.volume = volume;
    }
    toString() {
        let printPrice = this.price;
        if (printPrice % 1 == 0) {
            printPrice = this.price.toFixed(1);
        }
        return `Name: ${this.name}, Price: $${printPrice}, Volume: ${this.volume} ml`;
    }
}
exports.Drink = Drink;
//# sourceMappingURL=Drink.js.map