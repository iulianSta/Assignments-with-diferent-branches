console.log(`---The Greater Numbers---`);
// The Greater Numbers.
/* Create a function which accepts two arguments: the first argument being an array of numbers, 
and the second argument being a number. The function should return the elements of the array which are greater 
than the second argument.
i.e.
findGreatest([3, 4, 5], 4) ➞ 5
findGreatest([10, 20, 30], 12) ➞ 20, 30
findGreatest([0, 10, 3], 4) ➞ 10 */

console.log(`--Methode 1--`);
const findGreatest = (arr, num) => {
  let bigestNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      bigestNum.push(arr[i]);
    }
  }
  return bigestNum.join(", ");
};
console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

console.log(`--Methode 2--`);
const greater = (arr, num) => {
  let result = [];
  arr.filter((item) => (item > num ? result.push(item) : 0));
  return result.join(", ");
};
console.log(greater([3, 4, 5], 4));
console.log(greater([10, 20, 30], 12));
console.log(greater([0, 10, 3], 4));

console.log(`--Methode 3--`);
const findGreater = (arr, num) => {
  let result = [];
  arr.forEach((item) => {
    if (item > num) {
      result.push(item);
    }
  });
  return result.join(", ");
};
console.log(findGreater([3, 4, 5], 4));
console.log(findGreater([10, 20, 30], 12));
console.log(findGreater([0, 10, 3], 4));
