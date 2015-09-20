/**
 * Created by kumarp9 on 20/09/15.
 */

/**
 * We can create objects which will inherit another object using Object.create(..) method.
 * */

var book = {
    name: "Machine Learning",
    author: "Piyush Kumar"
};

// The above object is same as the following

var book = Object.create(Object.prototype, {// By default, all objects inherit the object prototype.
    name: {
        value: "Machine Learning",
        writable: true,
        enumerable: true,
        configurable: true
    },
    author: {
        value: "Piyush Kumar",
        writable: true,
        enumerable: true,
        configurable: true
    }
});

// creating objects which inherits other object :-

var employee1 = {
    name: "Piyush",
    company: "Thermo",

    getName: function () {
        return this.name;
    },
    getCompany: function () {
        return this.company;
    }
};

var employee2 = Object.create(employee1, {
    name: {
        value: "Kumar",
        writable: true,
        enumerable: true,
        configurable: true
    },
    company: {
        value: "Fisher",
        writable: true,
        enumerable: true,
        configurable: true
    }
});

console.log("The employee1 name is " + employee1.getName());
console.log("The employee1 company is " + employee1.getCompany());
console.log("The employee2 name is " + employee2.getName());
console.log("The employee2 company is " + employee2.getCompany());
