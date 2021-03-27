const generate = require("./generate.js");
const helperFunctions = require("./helperFunctions.js");
const boardFunctions = require("./boardFunctions.js");
const {point} = require("./point.js");
const checks = require("./checks.js");
const output = require("./output.js");


let size = 201;
let maxRowChecks = 100000;
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
    let boardErrors = checks.countTotalBoardConflicts(boardList);
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
    if (rowCheck % 1000 === 1 ) {
      console.log("Error Average So far", totalBoardErrors/rowCheck, "current row check", rowCheck);
    }
    let column = helperFunctions.randomInt(size);
    boardFunctions.placeQueenOnBoard(
        boardList,
        new point(
            column,
            boardFunctions.selectQueenRowFromConflictList(
                boardFunctions.generateConflictCountForEachPointInColumn(
                    boardList,
                    column))));
  }
}

console.log(solutionsFound, "for board of size", size)
console.log("tries needed average", maxRounds/solutionsFound);
console.log("average row checks needed", totalRowChecksNeeded/solutionsFound);
