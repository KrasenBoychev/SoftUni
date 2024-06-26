class Box<T> {
    element: T;

    constructor(el: T) {
        this.element = el;
    }

    toString() {
        return `${this.element} is of type ${typeof this.element}`;
    }
}



let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());