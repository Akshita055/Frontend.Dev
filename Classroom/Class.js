// class hoisting
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const student1 = new Student("Akshita", 20);
student1.show();


// object second way -> json
const student2 = {
    Name: "Vatsal",
    Age: 20,
    ID: 80085,
    Department: "Computer Engineering",
};

// date - 19 nov 2025



// One way -> Empty Object
const car = new Object();
car.name = "BMW";
car.model = "X5";
car.year = 2020;


// Constructor Function
function Bike(name, price) { // outer function
    this.name = name;
    this.price = price;
    this.greet = function () { 
        return `Hii my name is ${this.name} and the price of bike is ${this.price}`;
    };
}

const bike1 = new Bike("KIA-Seltos", 1500000);
console.log(bike1.greet());


// using create
const child = {
    greet() {
        console.log("Hello World");
    }
}
const child1 = Object.create(child);
child1.age = 20;
child1.greet();


// using json
const person = {"name": "John", "age": 30, "city": "New York"};
const jsonObj = JSON.parse(JSON.stringify(person)); // FIXED
console.log(jsonObj.name);

const stringObj = JSON.stringify(jsonObj); // json object converted to string


// REGEX: Regular Expressions are used to match string patterns and manipulate strings and search for patterns in strings.


// Functions
// 1.Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 3));

// 2.Anonymous Function
setTimeout(function() {
    console.log("2 sec", 2000);
});

// 3.IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("IIFE Executed");
})();

//4. HOF (Higher Order Function) - function calling another function
function greetUser(greetfn,name){
    return greetfn(name);
}

// callback function - a function passed into another function as an argument
function greet(name){
    return "hello"+name;
}
console.log(greetUser(greet,"Akshita"));
function prime(){

}
console.log(greetUser(greet,prime,"Akshita"));

// Prototype - A prototype is an object from which other objects inherit properties.
Object.prototype.print = function() {

}
let b1 = {
    name: "akshita",
    age: 20
}
b1.print();

// Callback Function 
// callback hell - when we have multiple nested callback functions
function a (fun){
    console.log("first");
    fun();
}
function b(fun){
    console.log("second");
    fun();
}

function c(fun){
    console.log("third");
    fun();
}
function d(){
    console.log("fourth");
}

a(function(){
    b(function(){
        c(d)
        })
});

// promises- A Promise is an object representing the eventual completion or failure of an asynchronous operation.



