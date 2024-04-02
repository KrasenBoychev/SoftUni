"use strict";
function cats(catsArr) {
    class Cat {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }
    for (const cat of catsArr) {
        const catDetails = cat.split(' ');
        const catName = catDetails[0];
        const catAge = Number(catDetails[1]);
        const newCat = new Cat(catName, catAge);
        console.log(newCat.meow());
    }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
//# sourceMappingURL=cats.js.map