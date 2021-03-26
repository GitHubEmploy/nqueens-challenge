const generate = require("./generate.js");
const helperFunctions = require("./helperFunctions.js");
const boardFunctions = require("./boardFunctions.js");
const {point} = require("./point.js");
const checks = require("./checks.js");
const output = require("./output.js");


let size = 7;
let maxRowChecks = 40;
//             1,000
let maxTries = 1;
let maxRounds = 1;
let triesNeededForSolution = 0;

let boardlist = [];

for (let rounds=0;rounds<maxRounds;++rounds) {
  for (let tries=0;tries<maxTries;++tries) {
    //boardList = generate.newBoardRandom(size);
    boardList = [0,1,2,3,4,5,6];
    for (let rowCheck=0;rowCheck<maxRowChecks;++rowCheck) {
      let boardErrors = checks.isValidBoard(boardList);
      if (boardErrors === 0){
        break;
      } else {
        console.log("current conflicts ", boardErrors);
        output.printBoard(boardList);
        console.log("boardlist ", boardList);
      }
      let column = helperFunctions.randomInt(size);
      boardFunctions.placeQueenOnBoard(
          boardList,
          new point(
              column,
              boardFunctions.selectQueenRowFromConflictList(
                  boardFunctions.generateAllConflictList(
                      boardList,
                      column))));
    }
  }
}

let boardErrors = checks.isValidBoard(boardList);
if (boardErrors === 0){
  output.printBoard(boardList);
  console.log("actual boardList", boardList);
  output.printSolution(boardList);
} else {
  console.log("not a valid solution, number of errors:", boardErrors);
}
console.log("tries needed average", triesNeededForSolution/maxRounds);

