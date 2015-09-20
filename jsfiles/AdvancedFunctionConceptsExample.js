/**
 * Created by kumarp9 on 19/09/15.
 */
//Following example shows the tight coupling of the method with the object. Hence, it can't be reused for the other objects
// Also, there is one mode disadvantage of using this approach is if 'book' name change to something else we need to change
// in the method as well.
var book = {
    name: "Data Structures",
    author: "Piyush Kumar",
    publisher: function () {
        console.log(book.author);
    }
};
// Better way of doing it - using this.
var author = "Kumar";
function publisher1() {
    console.log(this.author);
}

var book1 = {
    name: "Data Structures",
    author: "Piyush Kumar",
    publisher: publisher1
};

var book2 = {
    name: "Data Mining",
    author: "Piyush",
    publisher: publisher1
};

book1.publisher();
book2.publisher();
publisher1();//Todo: its giving undefined.But, should give Kumar - doubt
//===================================================================================================================
//===================================================================================================================
/**
 * Changing(or manupulating) the value of 'this' by using function's call,apply and bind methods. These methods actually
 * indirectly binds the value of 'this'(i.e an object) to a particular function.
 * */

//use 'call' method of function - function is an object so function itself can have methods like any other object
var objName = "Ganesh";
function sayHello(label){
    console.log(label+" : "+this.objName);
}

var obj1 = {
    objName : "Piyush K"
}

var obj2 = {
    objName : "Sheel"
}
sayHello.call(this,"Hi!!");//Todo: giving undefined.Why? - doubt
sayHello.call(obj1,"Hi!!");
sayHello.call(obj2,"Hi!!");

// Use apply method - its functionality is same as the call except it takes the array of arguments as the second argument
//in the apply() method.
sayHello.apply(this,["Hey!!"]);
sayHello.apply(obj1,["Hey!!"]);
sayHello.apply(obj2,["Hey!!"]);

//Use 'bind' method - it permanently binds the value of 'this'(i.e an object) to a function.
sayHelloForObj1 = sayHello.bind(obj1);
sayHelloForObj1("One way of bind method ::: ");

sayHelloForObj2 = sayHello.bind(obj2,"Another way of bind method :::");
sayHelloForObj2();

obj2.sayHelloCheck = sayHelloForObj1;
obj2.sayHelloCheck("this is the use of bind ::::");

