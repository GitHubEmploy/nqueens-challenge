const checks = require("./checks.js");
const generate = require("./generate.js");
const output = require("./output.js");

//let testBoard = [6,2,4,0,3,1,5];
//old let testBoard = [0,3,1,4,6,2,5];
let testBoard = [
  4, 2, 6, 1,
  5, 3, 0
]

output.printSolution(testBoard);
console.log("testboard");
console.log("isValidBoard: " , checks.isValidBoard(testBoard));
output.printBoard(testBoard);
output.printSolution(testBoard);
