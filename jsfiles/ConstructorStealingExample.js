/**
 * Created by kumarp9 on 20/09/15.
 */
/**
 * Constructor stealing is the way in which we will use the other object's constructor to build the object.
 * */

function Rectangle1(length, breadth) {
    this.length = length;
    this.breadth = breadth;
}

Rectangle1.prototype.getArea = function () {
    return this.length * this.breadth;
}

Rectangle1.prototype.toString = function () {
    return "Reactangle1 with length : " + this.length + " breath : " + this.breadth;
}

function Square1(size) {
   Rectangle1.call(this,size,size);
}
Square1.prototype = Object.create(Rectangle1.prototype, {
    constructor: {
        value: Square1,
        writable: true,
        enumerable: true,
        configurable: true
    }
});

Square1.prototype.toString = function () {
    return "Square1 with size : " + this.length;
}
var rectObj1 = new Rectangle1(10, 20);
console.log("The area of rectangle1 is : " + rectObj1.getArea());
var squareObj1 = new Square1(30);
console.log("The area of square1 is : " + squareObj1.getArea());

console.log(rectObj1 instanceof Rectangle1);
console.log(squareObj1 instanceof Square1);
console.log(squareObj1 instanceof Rectangle1);