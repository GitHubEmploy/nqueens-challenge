const checks = require("./checks.js");
const generate = require("./generate.js");
const output = require("./output.js");

let size = 15;
let swapCount = Math.floor(size/2);
//             1,000,000,000
let maxTries = 1000000000;
let maxRounds = 50;
let triesNeeded = 0;

for(rounds=0;rounds<maxRounds;rounds++) {
  for(tries=0;tries<maxTries;tries++) {
    if(tries%1000000 === 0){
      console.log("try", tries);
    }
    tries = tries + 1;
    boardList = generate.newBoard(size);
    if (!checks.isValidBoard(boardList)){
      for (i=0;i<boardList;i++){
        if(!areNeighborsDiagonal(boardList, i)) {
          if (generate.swapToRandomBoardPositionTillNoNeighbors(boardList, i, swapCount)) {
            console.log("no Neighbors");
            break;
          }
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
}
console.log("tries needed average", triesNeeded/maxRounds);
