/**
 * Created by kumarp9 on 20/09/15.
 */

/**Module Pattern is an object-creation pattern designed to create singleton objects with private data. The basic approach
 is to use an immediately invoked function expression (IIFE) that returns an object. An IIFE is a function expression
 that is defined and then called immediately to produce a result.
 */
var book = (function () {
    var name = "Javascript in action";

    return {
        author: "Piyush Kumar",
        getName: function () {
            return name;
        }
    };
}());

console.log("The name of the book is :: " + book.getName());
console.log("The name of the book is :: " + book.author);
console.log("The name of the book is :: " + book.name);// will give undefined since name property is private and cant be accessed directly.

// Revealing module pattern

var employee = (function () {
    var name = "Kumar";

    function getName() {
        return name;
    }

    return {
        company: "Thermo",
        getName: getName
    };
}());

console.log("The name of the employee is :: " + employee.getName());
console.log("The name of the employee is :: " + employee.company);

// Private members for the constructors
//Example - 1
function Student(name) {
    var age = 20;// This is private variable only accessible inside the constructor.

    this.name = name;
    this.getAge = function () {
        return age;
    };
}

var studentObj1 = new Student("Piyush K");
console.log("The age of the student1 is ::: " + studentObj1.getAge());
console.log("The name of the student1 is ::: " + studentObj1.name);
console.log("The age of the student1 is ::: " + studentObj1.age);// undefined because age is private and only accessible inside constructor.

// Example - 2
function Student2(name, age) {
    var age = age;// This is private variable only accessible inside the constructor.

    this.name = name;
    this.getAge = function () {
        return age;
    };
}

var studentObj2 = new Student2("Piyush Kr", 25);
console.log("The age of the student2 is ::: " + studentObj2.getAge());
console.log("The name of the student2 is ::: " + studentObj2.name);
console.log("The age of the student2 is ::: " + studentObj2.age);// undefined because age is private and only accessible inside constructor.