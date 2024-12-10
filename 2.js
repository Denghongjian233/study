/**
 * @param {number[]} nums
 * @param {number} target
 */

// 闭包

let obj = {
  a: 1,
};
let b = obj;
debugger;

// try {
//   obj = {
//     a: 2,
//   };
//   JSON.parse("2432423");
//   throw new Error("123");
// } catch (e) {
//   debugger;
//   throw new Error("123");
// }

throw new Error("123");

function Pc() {
  // 解构

  console.log(obj);
  const { a } = obj;
  return function () {
    debugger;
    console.log(a);
  };
}

c()();
