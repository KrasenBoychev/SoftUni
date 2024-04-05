function personInfo(first: string, last: string, age: string) {

    type PersonInfo = {
        firstName: string,
        lastName: string,
        age: number
    }

    const person: PersonInfo = {
        firstName: first,
        lastName: last,
        age: Number(age)
    }

    return person;
}

console.log(personInfo("Peter", "Pan", "20"));
