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

// const arr = [1, 6, 4, 2, 3];

// Array.prototype.sortArray = function() {

//     let n = this.length;
//     for(let i=0; i<n-1; i++) {  // pass
//         let swapped = false;
//         for(let j=0; j<n-1-i; j++) { //compari

//             if(this[j]> this[j+1])
//             {
//               let temp = this[j];
//               this[j] = this[j+1];
//               this[j+1] = temp;
//               swapped = true;
//             }
//         }
//         if(swapped === false) {
//             break;
//         }
//     }
//     return this;
// }

// console.log(arr.sortArray());
const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
[1, 2, 3].forEach(async (num) => {
  await waitFor(50);
  console.log(num);
});
console.log('Done');
