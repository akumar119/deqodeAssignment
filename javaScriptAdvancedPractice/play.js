// /**
//  * array //reference
//  */
// const a = [1, 2, 3];
// const b = a;
// b.push(4);

// console.log(a);
// console.log(b);

// /**
//  * object  //reference
//  */
// const obj1 = {
//   a: 10,
//   b: 20,
// };
// const obj2 = obj1;
// obj2.c = 30;
// delete obj1.a;
// console.log(obj1);
/**
 * prototypal inheritence
 */
// used function as a constructor
// function Rectangle(height, width) {
//   this.height = height;
//   this.width = width;
// }

// Rectangle.prototype.area = function () {
//   return this.height * this.width;
// };

// function Square(height) {
//   this.height = height;
//   this.width = height;
// }
// // const rec1 = new Rectangle(2, 4);
// // console.log(rec1.area());

// Square.prototype = Rectangle.prototype;
// const sqre1 = new Square(3);

// console.log(sqre1.area());
