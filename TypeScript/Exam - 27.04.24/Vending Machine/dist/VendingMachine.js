"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.buttonCapacity > this.drinks.length) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex((d) => d.name === name);
        if (index != -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    checkDrinksArray() {
        if (this.drinks.length == 0) {
            return `No drinks recorded yet!`;
        }
        if (this.drinks.length == 1) {
            return this.drinks[0].toString();
        }
        return 'Enough Drinks';
    }
    getLongest() {
        const result = this.checkDrinksArray();
        if (result == 'Enough Drinks') {
            const sortedDrinksByVolume = this.drinks.sort((a, b) => b.volume - a.volume);
            return sortedDrinksByVolume[0].toString();
        }
        return result;
    }
    getCheapest() {
        const result = this.checkDrinksArray();
        if (result == 'Enough Drinks') {
            const sortedDrinksByPrice = this.drinks.sort((a, b) => a.price - b.price);
            return sortedDrinksByPrice[0].toString();
        }
        return result;
    }
    buyDrink(name) {
        const drink = this.drinks.find(d => d.name === name);
        return drink.toString();
    }
    get getCount() {
        return this.drinks.length;
    }
    report() {
        return `Drinks available:\n${this.drinks.join('\n')}`;
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map