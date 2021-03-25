const generate = require("./generate.js");
const helperFunctions = require("./helperFunctions.js");
const boardFunctions = require("./boardFunctions.js");
const {point} = require("./point.js")


let size = 15;
let maxRowChecks = 100;
//             1,000
let maxTries = 1000;
let maxRounds = 1;
let triesNeededForSolution = 0;

let boardlist = [];

for (let rounds=0;rounds<maxRounds;++rounds) {
  for (let tries=0;tries<maxTries;++tries) {
    boardList = generate.newBoardGreedy(size);
    for (let rowCheck=0;rowCheck<maxRowChecks;++rowCheck) {
      let column = helperFunctions.randomInt(size);
      boardFunctions.placeQueenOnBoard(
          boardList,
          new point(
              column,
              boardFunctions.selectQueenRowFromConflictList(
                  boardFunctions.generateColumnConflictList(
                      boardList,
                      column))));
    }
  }
}

boardErrors = checks.isValidBoard(boardList);
if (boardErrors === 0){
  output.printBoard(boardList);
  console.log("actual boardList", boardList);
  output.printSolution(boardList);
} else {
  console.log("not a valid solution, number of errors:", boardErrors);
}
console.log("tries needed average", triesNeeded/maxRounds);

