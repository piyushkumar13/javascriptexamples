/**
 * Created by kumarp9 on 19/09/15.
 */
/**
 * There are two literal forms of declaring funtions:
 * */
//1. Function declaration
function add1(num1, num2) {
    return num1 + num2;
}
console.log("the addition1 is : " + add1(2, 7));

//2. Function expression - It actually contains the anonymous function. This is the difference b/w function declaration &
// function expression.
var add2 = function (num1, num2) {
    return num1 + num2;
}
console.log("The addition2 is : " + add2(3, 5));

//There is one more difference b/w them - Function declarations are hoisted to the top of the context (either the function
// in which the declaration occurs or the global scope) when the code is executed. That means you can actually define a
// function after it is used in code without generating an error. For example:
var result = add3(3, 4);
function add3(num1, num2) {
    return num1 + num2;
}
// This code might look like it will cause an error, but it works just fine. That’s because the JavaScript engine hoists
// the function declaration to the top and actually executes the code as if it were written like this:
// how the JavaScript engine interprets the code
/*
function add(num1, num2) {
    return num1 + num2;
}
var result = add(5, 5);
*/
//Function hoisting happens only for function declarations because the function name is known ahead of time. Function expressions,
// on the other hand, cannot be hoisted because the functions can be referenced only through a variable. So this code causes an
// error
/*
var result = add(5, 5);
var add = function(num1, num2) {
    return num1 + num2;
};
*/
//====================================================================================================================
//====================================================================================================================
/**
 *  You can pass a function into another function as an argument. The sort() method on JavaScript arrays accepts a comparison
 *  function as an optional parameter. The comparison function is called whenever two values in the array must be compared.
 *  If the first value is smaller than the second, the comparison function must return a nega- tive number. If the first value
 *  is larger than the second, the function must return a positive number. If the two values are equal, the function should
 *  return zero.By default, sort() converts every item in an array to a string and then performs a comparison. That means
 *  you can’t accurately sort an array of numbers without specifying a comparison function.
 * */

var arr1 = [1,2,8,3,23,11];
arr1.sort(function(first,second){
   return first - second;
});
console.log("The result of sorting is ::::" );
for(i in arr1){
    console.log(arr1[i]);
}

//====================================================================================================================
//====================================================================================================================

/**
 * Use of arguments object. This object is the array like structure which contains the arguments passed to the function.
 * Usually, it is discouraged to use because of bad readability. But, it is advantageaous when we are passing varying argument
 * to the functions or we dont know how many arguments going to be passed to the funtion.
 * */
var sum = function(){
  var result = 0;
    for(var i = 0;i < arguments.length;i++){
       result = result +arguments[i];
        i++;
    }
return result;
};

console.log("The sum1 is"+sum(10,12));
console.log("The sum2 is"+sum(12,12,13));
console.log(sum.length);//this represents the named argument which is zero in this case as sum does not contain any parameters in paranthesis.

//====================================================================================================================
//====================================================================================================================
/**
 * JS does not provide the function overloading since functions signature in js can accept any no of arguments even if
 * we dont define in the function signature and also, we dont define the types of the arguments in the function.Hence, we
 * can say that js functions does not have signature.Due to which it does not support function overloading. But, there is
 * a work around to achieve this.
 * */

function sayHello(message){
    if(arguments.length == 0){
        console.log("default Hello!");
        return;
    }
    console.log(message);
}
sayHello();
sayHello("Hello JS!");

