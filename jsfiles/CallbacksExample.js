
var add = function(num1, num2){

    return num1 + num2 ;

};

var multiply = function(num1, num2){
    return num1 * num2 ;
};

var calc = function(num1, num2, callback){

     return callback(num1, num2);
};

console.log(calc(2,4,add));