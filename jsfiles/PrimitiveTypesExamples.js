/**
 * Created by kumarp9 on 19/09/15.
 */

//Here the result is false since js engine doens't create temprory primitive wrapper object in the following case because
// wrapper object is created only when the value is read.
var name = "Nicholas";
var count = 10;
var found = false;
console.log(typeof name);//string
console.log(typeof count);//number
console.log(typeof found);//boolean
console.log(name instanceof String);    // false
console.log(count instanceof Number);   // false
console.log(found instanceof Boolean);  // false

var name = new String("Nicholas");
var count = new Number(10);
var found = new Boolean(false);
console.log(name instanceof Object);//true
console.log(count instanceof Object);//true
console.log(found instanceof Object);//true
console.log(name instanceof String);//true
console.log(count instanceof Number);//true
console.log(found instanceof Boolean);//true

var name = new String("Nicholas");
var count = new Number(10);
var found = new Boolean(false);
console.log(typeof name);//Object
console.log(typeof count);//Object
console.log(typeof found);//Object

/**
 * Using primitive wrapper types is discouraged because it lead to the several confusion and errors :
 * */
// In the following example, typeof results into the Object because creating an instance of the primitive wrapper type
// just creates another object, which means that typeof can’t identify the type of data you intend to store.
var name = new String("Nicholas");
var count = new Number(10);
var found = new Boolean(false);
console.log(typeof name);//Object
console.log(typeof count);//Object
console.log(typeof found);//Object

//Another instance for the reason not using primitive wrapper types :
//The Boolean object is false, yet console.log("Found") still executes because an object is always considered true inside
// a conditional statement. It doesn’t matter that the object represents false; it’s an object, so it evalu- ates to true.
var found = new Boolean(false);
if (found) {
    console.log("Found");       // this executes
}

