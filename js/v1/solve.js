const checks = require("./checks.js");
const generate = require("./generate.js");
const output = require("./output.js");

// updated 2

let size = 7;
let swapCount = 100;
//             1,000,000,000
let maxTries = 1000000000;
let maxRounds = 1;
let triesNeeded = 0;

for (let rounds=0;rounds<maxRounds;rounds++) {
  for (let tries=0;tries<maxTries;tries++) {
    if(tries%1000000 === 0){
      console.log("try", tries);
    }
    tries = tries + 1;
    boardList = generate.newBoard(size);
    if (!checks.isValidBoard(boardList)){
      for (let i=0;i<boardList.length;i++){
        if (generate.swapToRandomBoardPositionTillNoNeighbors(boardList, i, swapCount)) {
          break;
        }
      }
    } else {
      triesNeeded = triesNeeded + tries;
      break;
    }
  }
}


if (checks.isValidBoard(boardList)){
  console.log("isValidBoard: " , checks.isValidBoard(boardList));
  output.printBoard(boardList);
  console.log(boardList);
  output.printSolution(boardList);
} else {
  console.log("no valid solution");
}

console.log("tries needed average", triesNeeded/maxRounds);
