/**
 * Created by kumarp9 on 20/09/15.
 */

//the hasOwnProperty() method is defined on the generic Object prototype, but it can be accessed from any object as if
// it were an own property
var book = {
    title : "Data"
};

console.log(book.hasOwnProperty("title"));
console.log("hasOwnProperty" in book);
console.log(book.hasOwnProperty("hasOwnProperty"));
console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));

//An instance keeps track of its prototype through an internal property called [[Prototype]]. This property is a pointer
// back to the prototype object that the instance is using. When you create a new object using new, the constructor’s prototype
// property is assigned to the [[Prototype]] property of that new object.

//For any generic object , [[Prototype]] is always a reference to Object.prototype.
var object = {};
var prototype = Object.getPrototypeOf(object);
console.log(prototype === Object.prototype);

// Using prototypes with constructors - The shared nature of prototypes makes them ideal for defining methods once for all
// objects of a given type. Because methods tend to do the same thing for all instances, there’s no reason each instance needs
// its own set of methods.It’s much more efficient to put the methods on the prototype and then use this to access the current instance.

function Student(name){
    this.name = name;
    this.say = function(){
        return {
            x:"abc"
        };
    }
}

Student.prototype.sayHi = function(){
    console.log("The student name is :::"+this.name);
    return this.name;
}

var student1 = new Student("Piyush");
var student2 = new Student("Kumar");

console.log(student1.sayHi());
console.log(student2.sayHi())

console.log("this is special ::"+student1.say().x);

//We can add properties to the prototype one by one, many developers use a more succinct pattern that involves replacing
// the prototype with an object literal:

function Employee(name){
    this.name = name;
}

Employee.prototype = {
    sayHi : function(){
        console.log("Hi!!"+this.name);
    },
    myName : function(){
        return this.name;
    }
};

var employee1 = new Employee("Sheel");
console.log("the value of my name :: "+employee1.myName());
employee1.sayHi();
console.log("the employee1 name :: "+employee1.name);

console.log(employee1 instanceof Employee);
console.log(typeof employee1);
console.log(employee1.constructor === Employee);
console.log(employee1.constructor === Object);// Here is problem, the constructor property is set to the Object . This
// problem can be solved by again defining the constructor property in the literal while defining the literal for the prototypes.

function Employee1(name){
    this.name = name;
}

Employee1.prototype = {
    constructor : Employee1,
    sayHi : function(){
        console.log("Hi!!"+this.name);
    },
    myName : function(){
        return this.name;
    }
};

var employee12 = new Employee1("Sheel kumar");
console.log("the value of my name :: "+employee12.myName());
employee12.sayHi();
console.log("the employee12 name :: "+employee12.name);

console.log(employee12 instanceof Employee1);
console.log(typeof employee12);//Todo : everything is working fine now but this one is not even when constructor property
// Todo: is set to Employee1.Why?
console.log(employee12.constructor === Employee1);
console.log(employee12.constructor === Object);
