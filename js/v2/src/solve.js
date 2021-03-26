const generate = require("./generate.js");
const helperFunctions = require("./helperFunctions.js");
const boardFunctions = require("./boardFunctions.js");
const {point} = require("./point.js");
const checks = require("./checks.js");
const output = require("./output.js");


let size = 50;
let maxRowChecks = 50;
//             100
let maxRounds = 100;
let triesNeededForSolution = 0;
let solutionsFound = 0;
let totalRowChecksNeeded = 0;
let totalBoardErrors = 0;

let boardlist = [];

for (let round=0;round<maxRounds;++round) {
  console.log("average board error amount", totalBoardErrors/maxRowChecks);
  console.log("starting round", round);
  boardList = generate.newBoardRandom(size);
  totalBoardErrors = 0;
  for (let rowCheck=0;rowCheck<maxRowChecks;++rowCheck) {
    let boardErrors = checks.isValidBoard(boardList);
    totalBoardErrors += boardErrors;
    if (boardErrors === 0){
      solutionsFound++;
      totalRowChecksNeeded += rowCheck;
      console.log("====================================");
      output.printSolution(boardList);
      console.log("rowcheck ", rowCheck);
      console.log("otherboardErrors", totalBoardErrors/rowCheck);
      break;
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

console.log(solutionsFound, "for board of size", size)
console.log("tries needed average", maxRounds/solutionsFound);
console.log("average row checks needed", totalRowChecksNeeded/solutionsFound);

