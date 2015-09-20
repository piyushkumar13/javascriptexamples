/**
 * Created by kumarp9 on 19/09/15.
 */


/**
 * There are two way of accessing the object properties.
 * One is dot notation and one is square bracket notation
 */

//Bracket notation
var arrProp1 = [];
arrProp1["push"]("123");
console.log("The value of array for bracket notation is " + arrProp1[0]);
//-It has an advantage, if we want to dynamically decide which property to access. This is the way to
// to do. Consider following example.
var arrProp2 = [];
var prop = "push";
arrProp2[prop]("2015");
console.log("The value of array for bracket notation is " + arrProp2[0]);


//Dot notation
var arrProp3 = [];
arrProp3.push("12345");
console.log("The value of the array for dot notation is : " + arrProp3[0]);
