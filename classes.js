
class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
    console.log("walk");
    }   
}

const person = new Person("John");
 // or 
//person.name = "john";

console.log(person)