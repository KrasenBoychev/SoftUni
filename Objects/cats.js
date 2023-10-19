function cats(inputArr) {

   let cats = [];
    
    class Cat {
        constructor(name, age) {
        this.name = name;
        this.age = age;
        }

        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < inputArr.length; i++) {
        let catData = inputArr[i].split(" ");
        let name, age;
        [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));
    }

    for (let el of cats) {
        el.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);