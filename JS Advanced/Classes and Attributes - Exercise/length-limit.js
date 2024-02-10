class Stringer {
    innerString;
    innerLength;

    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
        this.originalString = innerString;
    }

    checkLength() {
        if(this.originalString.length <= this.innerLength) {
            this.innerString = this.originalString;
        } else {
            this.innerString = this.originalString.slice(0, this.innerLength) + '...';
        }
    }

    increase(length) {
        this.innerLength += length;
        this.checkLength();
    }

    decrease(length) {
        this.innerLength -= length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }

        this.checkLength();
    }

    toString() {
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test