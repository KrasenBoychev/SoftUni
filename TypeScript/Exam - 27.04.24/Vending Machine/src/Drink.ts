export class Drink {
    private name: string;
    private price: number;
    private volume: number;

    constructor(name: string, price: number, volume: number) {
        this.name = name;
        this.price = price;
        this.volume = volume;
    }

    toString(): string {
        return `Name: ${this.name}, Price: ${this.price}, Volume: ${this.volume} ml`;
    }
}