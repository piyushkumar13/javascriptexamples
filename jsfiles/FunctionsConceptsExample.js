/**
 * Created by kumarp9 on 19/09/15.
 */

/**
 * There are two way of creating functions :
 *
 * 1. Using Function constructor (This is not prefered because it is not readable and cant debug a fuction if created using
 * Function constructor).
 *
 * 2. Using function literal way (This is the prefered way of creating the functions).
 */

//1. Constructor way of creating functions
var f1= new Function("value","return value ; ");
console.log("The value of the constructor way of function"+f1("Hi!"));

//2. Function literal way of creating functions

function getValue(value){
    return value;
}

console.log("The value of the literal way of creating function : "+getValue("Double Hi"));
