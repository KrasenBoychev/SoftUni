abstract class Melon {
    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    toString(): string {
        const printResult = [
            `Element: Water`,
            `Sort: ${this.melonSort}`,
            `Element Index: ${this.elementIndex}`];

        return printResult.join('\n');
    }
}

class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    toString(): string {
        const printResult = [
            `Element: Fire`,
            `Sort: ${this.melonSort}`,
            `Element Index: ${this.elementIndex}`];

        return printResult.join('\n');
    }
}

class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    toString(): string {
        const printResult = [
            `Element: Earth`,
            `Sort: ${this.melonSort}`,
            `Element Index: ${this.elementIndex}`];

        return printResult.join('\n');
    }
}

class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    toString(): string {
        const printResult = [
            `Element: Air`,
            `Sort: ${this.melonSort}`,
            `Element Index: ${this.elementIndex}`];

        return printResult.join('\n');
    }
}

class Melolemonmelon extends Airmelon {
    element: Array<string>;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = [`Water`, `Fire`, `Earth`, `Air`];
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    morph() {
        let a = this.element.shift();
        if (a) {
            this.element.push(a);
        }
        return this;
    }

    toString(): string {
        const printResult = [
            `Element: ${this.element[0]}`,
            `Sort: ${this.melonSort}`,
            `Element Index: ${this.elementIndex}`];

        return printResult.join('\n');
    }

}

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());