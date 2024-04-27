import { Drink } from "./Drink";

export class VendingMachine {
  private buttonCapacity: number;
  private drinks: Drink[];

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
    this.drinks = [];
  }

  addDrink(drink: Drink): void {
    if (this.buttonCapacity > this.drinks.length) {
      this.drinks.push(drink);
    }
  }

  removeDrink(name: string): boolean {
    const index = this.drinks.findIndex((d) => d.name === name);

    if (index != -1) {
      this.drinks.splice(index, 1);
      return true;
    }

    return false;
  }

  checkDrinksArray(): string {
    if (this.drinks.length == 0) {
      return `No drinks recorded yet!`;
    }

    if (this.drinks.length == 1) {
      return this.drinks[0].toString();
    }

    return 'Enough Drinks';
  }

  getLongest(): string {
    const result: string = this.checkDrinksArray();

    if (result == 'Enough Drinks') {
        const sortedDrinksByVolume = this.drinks.sort((a, b) => b.volume - a.volume);
        return sortedDrinksByVolume[0].toString();
    }

    return result;
  }

  getCheapest(): string {
    const result: string = this.checkDrinksArray();

    if (result == 'Enough Drinks') {
        const sortedDrinksByPrice = this.drinks.sort((a, b) => a.price - b.price);
        return sortedDrinksByPrice[0].toString();
    }
    
    return result;
  }

  buyDrink(name: string): string {
    const drink = this.drinks.find(d => d.name === name);
    return drink.toString();
  }

  get getCount(): number {
    return this.drinks.length;
  }

  report(): string {
    return `Drinks available:\n${this.drinks.join('\n')}`;
  }
}
