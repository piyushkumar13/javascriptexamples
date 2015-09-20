/**
 * Created by kumarp9 on 20/09/15.
 */

function Rectangle(length, breadth) {
    this.length = length;
    this.breadth = breadth;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.breadth;
}

Rectangle.prototype.toString = function () {
    return "Reactangle with length : " + this.length + " breath : " + this.breadth;
}

function Square(size) {
    this.length = size;
    this.breadth = size;
}
Square.prototype = new Rectangle();
Square.prototype.constructor = Square;

Square.prototype.toString = function () {
    return "Square with size : " + this.length;
}
var rectObj = new Rectangle(10, 20);
console.log("The area of rectangle is : " + rectObj.getArea());
var squareObj = new Square(30);
console.log("The area of square is : " + squareObj.getArea());

console.log(rectObj instanceof Rectangle);
console.log(squareObj instanceof Square);
console.log(squareObj instanceof Rectangle);

// In the line "Square.prototype = new Rectangle();" To change the prototype chain this way, you always need to make sure
// that the constructor won’t throw an error if the arguments aren’t supplied. So, with the above approach we need to be
// extra concious. But, the above can be simplified by the following :

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
    this.length = size;
    this.breadth = size;
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