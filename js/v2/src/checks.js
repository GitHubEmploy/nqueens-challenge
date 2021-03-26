const boardFunctions = require("./boardFunctions.js");
const {point} = require("./point.js");


function isValidBoard(boardList) {
  let total = 0;
  let count = 0;
  let slopeTree = boardFunctions.generateSlopeTree(
                  boardFunctions.generateAllCombinations(boardList));
  for (let i=0;i<boardList.length;++i) {
    count = boardFunctions.countConflicts(
          boardList,
          slopeTree,
          new point(i, boardList[i]));
    total = total + count;
  }
  return total;
}

exports.isValidBoard = isValidBoard;
