/**
 * Created by kumarp9 on 19/09/15.
 */
var name="PIYUSH";
console.log("the name in lower case is "+name.toLowerCase());

var obj1 = new Object();
var obj2 = new Array();
var obj3 = new Error();
var obj4 = new Date();
var obj5 = new Function();
var obj6 = new RegExp();

// in js objects there is one trait about the objects that we can add1 the properties at any time
obj1.myProperty = "this is the dynamic property";
console.log("the dynamic property value of the JS object is "+obj1.myProperty);

//checking objects literal syntax
var book1 = {
    name : "welcome to javascript",
    pages : 123
};

var book2 = {
    "name" : "welcome to the world of javascript",
    "pages": 142
};

console.log("the book1 name is "+book1.name + " " + "the no of pages is "+ book1.pages);
console.log("the book2 name is "+book2.name + " " + "the no of pages is "+ book2.pages);

//checking array ways of creation
// array object way
var arr1 =new Array("Piyush","Sheel","Brijesh","ShreeRam");
console.log("The name in the array 1 are : ");
for(name in arr1){
    console.log(arr1[name]);
}
//array literal way
var arr2 = ["Pi","Sh","Br","Sh"];
console.log("The name in the array 2 are : ");
for(name in arr2){
    console.log(arr2[name]);
}
console.log(typeof arr1);
console.log(typeof arr2);
console.log(arr1 instanceof Array);
console.log(arr2 instanceof Array);

