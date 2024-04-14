"use strict";
class Animal {
    eat() {
        console.log("eating");
    }
}
class Dog extends Animal {
    bark() {
        console.log("barking");
    }
}
class Cat extends Animal {
    meow() {
        console.log("meowing");
    }
}
const Choki = new Cat();
Choki.eat();
Choki.meow();
//# sourceMappingURL=inheritance.js.map