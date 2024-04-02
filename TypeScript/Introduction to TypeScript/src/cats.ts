function cats(catsArr: Array<string>): void{
    class Cat {
        private name: string;
        private age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    for (const cat of catsArr) {
        const catDetails: Array<string> = cat.split(' ');

        const catName: string = catDetails[0];
        const catAge: number = Number(catDetails[1]);

        const newCat = new Cat(catName, catAge)
        console.log(newCat.meow());
    }
}

cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
