/**
 * Created by kumarp9 on 20/09/15.
 */

/**
 * The advantage of constructors is that objects created with the same constructor contain the same proper- ties and methods.
 * If you want to create multiple similar objects, you can create your own constructors and therefore your own reference types.
 * Note : You can also explicitly call return inside of a constructor. If the returned value is an object, it will be returned instead
 * of the newly created object instance. If the returned value is a primitive, the newly created object is used and the returned
 * value is ignored.
 * */

function Person() {

}
var person1 = new Person();//we can leave the paranthesis if constructor function does not take any parameters

function Student(name, rollno) {// we dont need to explicitly return obj from the constructor function. The new operator automatically
    // creates an object of the given type and returns it to the reference variable.

    this.name = name;//This object is automatically created by new when you call the constructor, and it is an instance
                     // of the constructor’s type. (In this case, this is an instance of Student.)
    this.rollNo = rollno;
}

var student1 = new Student("Piyush", 12);
//Every object instance is automatically created with a constructor property that contains a reference to the constructor
// function that created it. For generic objects (those created via an object literal or the Object constructor), constructor
// is set to Object; for objects created with a custom constructor, constructor points back to that constructor function instead.
console.log(student1.constructor === Student);

// Another way of writing constructor function

function Employee(name) {
    Object.defineProperty(this, "name", {
        get: function () {
            return name;
        },
        set: function (newName) {
            name = newName;
        },
        enumerable: true,
        configurable: true
    });

    this.sayName = function () {
        console.log(this.name);
    };
}

var employee1 = new Employee("Piyush Kumar");
console.log("the name is :::"+employee1.name);
