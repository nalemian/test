class Person {
    constructor(name, age, happiness) {
        this.name=name;
        this.age=age;
        this.happiness=happiness;
    }
    info() {
        console.log("Человек "+ this.name); //выводит имя человека
    }
}

var alex=new Person("Alex", 45, true);
var bob=new Person("Bob", 25, false);
alex.info(); //Alex
bob.info(); //Bob