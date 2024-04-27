export class Drink {
    public name: string;
    public price: number;
    public volume: number;

    constructor(name: string, price: number, volume: number) {
        this.name = name;
        this.price = price;
        this.volume = volume;
    }

    toString(): string {
        let printPrice: number | string = this.price;

        if (printPrice % 1 == 0) {
            printPrice = this.price.toFixed(1);
        }
        
        return `Name: ${this.name}, Price: $${printPrice}, Volume: ${this.volume} ml`;
    }
}