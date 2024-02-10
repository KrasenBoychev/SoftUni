class Hex {

    constructor(value) {
        this.value = Number(value);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        let hex = this.value.toString(16).toUpperCase();
        return `0x` + hex;
    }

    plus(number) {
        let secondNum = Number(number.valueOf());
        let result = this.value + secondNum;
        return new Hex(result);
    }

    minus(number) {
        let secondNum = Number(number.valueOf());
        let result = this.value - secondNum;
        return new Hex(result);
    }

    parse(str) {
        return parseInt(str, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
