// OOPS
// INHERITANCE-> It is a mechanism where a new class acquires the properties and behaviors (methods) of a parent class.
class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
class Students extends person{
    constructor(name,age){
        super(name,age);
    }
}
const stud3 = new Students("Akshita",21);
stud3.showInfo();


