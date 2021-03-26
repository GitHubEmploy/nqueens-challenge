const boardFunctions = require("./boardFunctions.js");
const {point} = require("./point.js");


function isValidBoard(boardList) {
  let count = 0;
  let slopeTree = boardFunctions.generateSlopeTree(
                  boardFunctions.generateAllCombinations(boardList));
  count = boardFunctions.countWholeBoardConflicts(
        boardList,
        slopeTree);
  return count;
}

exports.isValidBoard = isValidBoard;
