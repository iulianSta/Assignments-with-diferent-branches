console.log(`---Create Grid---`);
/* ##### 2. Create Grid (Optional)
- Create a function called "createGrid", which returns a grid of a 2D array by accepting two arguments: 
`size` (which determines the number of nested arrays and the number of elements in each nested array) and 
`char` (which determines the characters in each nested array). Print your solution to the console.
**Create Grid Function Call**
```javascript
createGrid(3, "*");
```
**Expected Output**
```javascript
[
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"]
];
``` */

console.log(`--Methode 1--`);
const createGrid = (size, char) => {
  const myArr = [];
  for (let i = 0; i < size; i++) {
    myArr[i] = [];
    for (let j = 0; j < size; j++) {
      myArr[i][j] = char;
    }
  }
  return myArr;
};
console.log(createGrid(3, "*"));
console.log(createGrid(5, "-"));

console.log(`--Methode 2--`);
const gridCreate = (num, char) => {
  const arr = new Array(num);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(num).fill(char);
  }
  return arr;
};
console.log(gridCreate(3, "*"));
console.log(gridCreate(5, "-"));

console.log(`--Methode 3--`);
const gridArr = (num, char) =>
  Array.from(Array(num), () => new Array(num).fill(char));
console.log(gridArr(3, "*"));
console.log(gridArr(5, "-"));
