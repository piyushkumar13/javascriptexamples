/**
 * Created by kumarp9 on 19/09/15.
 */
var employee = {
    name: "Piyush",
    company: "Thermofisher Scientific"
};

//To check whether the property is present in the object use 'in' operator. Using 'in' is a good approach to identify the
//property in an object

console.log("name" in employee);
console.log("company" in employee);

//following method is incorrect to check for the property
employee.age = 0;
if (employee.age) {//Though age is the property of employee object but still if statement evaluates to false as age is zero.
    //Hence, using such a way is not the right way to checking the property.'in' operator is the right way.
    console.log("Yes it is the property");
}

//There is one disadvantage of using in operator. It returns true for the own as well as prototype property.For example :
console.log("toString" in employee);
// To overcome this use hasOwnProperty() method.
console.log(employee.hasOwnProperty("toString"));

//To delete a property use delete operator. By just setting a property to null doesn't remove the property, on contrary,
// it calls the [[set]] internal property(method) to set the value to null.
console.log("age is employee's property :::");
console.log("age" in employee);
delete employee.age;
console.log("Now age is not the employee's property");
console.log("age" in employee);

//==============================================================================================================
//==============================================================================================================
//By default, all properties that you add to an object are enumerable, which means that you can iterate over them using
// a for-in loop. Enumerable properties have their internal [[Enumerable]] attributes set to true. The for-in loop enumerates
// all enumerable properties on an object, assigning the property name to a variable.

for (property in employee) {
    console.log("Propery Name:::" + property);
    console.log("Property Value :::" + employee[property]);
}
//Another way of enumerating over properties.
var properties = Object.keys(employee);
for (var i = 0; i < properties.length; i++) {
    console.log("The property name is =" + properties[i]);
    console.log("The property value is =" + employee[properties[i]]);
}
//for-in loop enumerates own properties as well as prototype properties(if enumerable). But, keys() method returns only
//own properties.

//To check property is enumerable use method propertyIsEnumerable(). Normally, prototype properties are not enumerable.
console.log(employee.propertyIsEnumerable("name"));
console.log(properties.propertyIsEnumerable("length"));

//==============================================================================================================
//==============================================================================================================
//Making property accessed through getters and setters. Making property private. But, in actual, it doesn't make the property
// private. But, give a sense of private and indicate us to access property through getters and setters.
var student = {
    _name: "Piyush Kumar",

    get name() {
        return this._name;
    },
    set name(name) {
        console.log("Setting name to %s", name);
        this._name = name;
    }
};

console.log("The _name value is " + student.name);
student.name = "kk";
console.log("The update _name value is " + student.name);
//console.log("Acessing :::"+student._name);
//==============================================================================================================
//==============================================================================================================
//Property attributes and accessing them
//1. Common attributes - [[Enumerable]] && [[Configurable]]

var obj1 = {
    name: "Kumar"//by default, 'name' property's attribute [[Enumerable]] and [[Configurable]] are true
};

Object.defineProperty(obj1, "name", {
    enumerable: false
});

var properties = Object.keys(obj1);
console.log("The length of properties after setting attributes is :::" + properties.length);
console.log("name" in properties);
console.log(obj1.propertyIsEnumerable("name"));

Object.defineProperty(obj1, "name", {
    configurable: false
});

delete obj1.name;
console.log("name" in obj1);//will be still there in obj1 since name configurable is false. 'name' property cant be configured.

/* Nonconfigured property cant be configured.It will throw error.
 Object.defineProperty(obj1,"name",{
 configurable:true
 });
 */

// 2. Data property attributes - [[Value]] and [[Writable]]
// When Object.defineProperty() is called, it first checks to see if the property exists. If the property doesn’t exist,
// a new one is added with the attributes specified in the descriptor. In this case, name isn’t already a property of obj2,
// so it is created.When you are defining a new property with Object.defineProperty(), it’s important to specify all of the
// attributes because Boolean attributes automatically default to false otherwise.
var obj2 = {};
Object.defineProperty(obj2, "name", {
    enumerable: true,
    configurable: true,
    value: "JavaScript",
    writable: true
});

console.log("The value of obj2 ::: " + obj2.name);

//3. Accessor Property attributes - [[Set]] and [[Get]]
//Accessor properties also have two additional attributes. Because there is no value stored for accessor properties, there
// is no need for [[Value]] or [[Writable]]. Instead, accessors have [[Get]] and [[Set]], which contain the getter and setter
// functions, respectively.
//Note : If you try to create a property with both data and accessor attributes, you will get an error.
//The advantage of using accessor property attributes instead of object literal notation to define accessor properties is
// that you can also define those properties on existing objects. If you want to use object literal nota- tion, you have
// to define accessor properties when you create the object.

var obj3 = {
    _name: "PK"
};
Object.defineProperty(obj3, "name", {
    get: function () {
        return this._name;
    },
    set: function (name) {
        this._name = name;
    },
    enumerable: true,
    configurable: true
});
//As with accessor properties defined via object literal notation, an accessor property without a setter throws an error
// in strict mode when you try to change the value. In nonstrict mode, the operation silently fails. Attempting to read
// an accessor property that has only a setter defined always returns undefined.
//==============================================================================================================
//==============================================================================================================
// Defining multiple properties - use method Object.defineProperties

var obj4 = {};

Object.defineProperties(obj4, {
    _name: {
        value: "This is multiple properties defination",
        writable: true,
        enumerable: true,
        configurable: true
    },
    name: {
        set: function (value) {
            this._name = value;
        },

        get: function () {
            return this._name
        },
        enumerable: true,
        configurable: true
    }
});

// Retrieving property attributes - use method getOwnPropertyDescriptor()

var description1 = Object.getOwnPropertyDescriptor(obj4,"_name");
console.log(description1.enumerable);
console.log(description1.configurable);
console.log(description1.value);
console.log(description1.writable);

var description2 = Object.getOwnPropertyDescriptor(obj4,"name");
console.log(description2.enumerable);
console.log(description2.configurable);
console.log(description2.value);//will be undefined since name is accessor property
console.log(description2.writable);//will be undefined since name is accessor property


