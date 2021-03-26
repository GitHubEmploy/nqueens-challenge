const boardFunctions = require("./boardFunctions.js");
const {point} = require("./point.js");


function isValidBoard(boardList) {
  let [slopeTree, count] = boardFunctions.generateSlopeTree(
                  boardFunctions.generateAllCombinations(boardList));
  count = boardFunctions.countWholeBoardConflicts(
        boardList,
        slopeTree,
        count);
  return count;
}

exports.isValidBoard = isValidBoard;
