console.log(`---Odds and Evens.---`);
/* Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
[6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19] */

console.log(`--Methode 1--`);
const oddOrEven = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i]--;
      result.push(arr[i]);
    } else {
      arr[i]++;
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(oddOrEven([3, 5, 2, 4]));
console.log(oddOrEven([6, 9, 10, 20]));

console.log(`--Methode 2--`);
const oddOrEven1 = (arr) => {
  return arr.map((item) => (item % 2 === 0 ? item - 1 : item + 1));
};
console.log(oddOrEven1([3, 5, 2, 4]));
console.log(oddOrEven1([6, 9, 10, 20]));

console.log(`--Methode 3--`);
const oddOrEven2 = (arr) => {
  let result = [];
  arr.forEach((cur) =>
    cur % 2 === 0 ? result.push(cur - 1) : result.push(cur + 1)
  );
  return result;
};
console.log(oddOrEven2([3, 5, 2, 4]));
console.log(oddOrEven2([6, 9, 10, 20]));
