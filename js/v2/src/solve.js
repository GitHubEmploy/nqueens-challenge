const generate = require("./generate.js");
const helperFunctions = require("./helperFunctions.js");
const boardFunctions = require("./boardFunctions.js");
const {point} = require("./point.js");
const checks = require("./checks.js");
const output = require("./output.js");


let size = 9;
let maxRowChecks = 400;
//             1,000
let maxTries = 100;
let maxRounds = 1;
let triesNeededForSolution = 0;

let boardlist = [];

for (let rounds=0;rounds<maxRounds;++rounds) {
  for (let tries=0;tries<maxTries;++tries) {
    boardList = generate.newBoardRandom(size);
    for (let rowCheck=0;rowCheck<maxRowChecks;++rowCheck) {
      let boardErrors = checks.isValidBoard(boardList);
      if (boardErrors === 0){
        break;
      } else if (boardErrors === 1) {
        console.log("current conflicts ", boardErrors);
        output.printBoard(boardList);
        output.printSolution(boardList);
      } 
      let column = helperFunctions.randomInt(size);
      boardFunctions.placeQueenOnBoard(
          boardList,
          new point(
              column,
              boardFunctions.selectQueenRowFromConflictList(
                  boardFunctions.generateConflictCountFromEachPointInRow(
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

