class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    printPerson() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const personInfo = 'Sofia 33';
const [pName, pAge] = personInfo.split(' ');

const newPerson = new Person(pName, Number(pAge));
newPerson.printPerson();