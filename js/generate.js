const checks = require("./checks.js");
const output = require("./output.js");


function newBoard(n) {
  let boardList = [];
  for (i=0;i<n;i++) {
    boardList[i] = i;
  }
  for (i=0;i<n;i++) {
    swapToRandomBoardPosition(boardList, i);
  }
  return boardList;
}

function swapToRandomBoardPositionTillNoNeighbors(boardList, position, count) {
  let swapPosition = newRandomInterger(boardList.length-1);
  let queenAtSwapPosition = boardList[swapPosition];
  boardList[swapPosition] = boardList[position];
  boardList[position] = queenAtSwapPosition;
  // duplicate code, how to remove?
  if (!areNeighborsDiagonal(boardList, origionalPosition)) {
    if (!areNeighboarsDiagonal(boardList, swapPosition)) {
      return true;
    } else {
      if (count > 0){
        return swapToRandomBoardPositionTillNoNeighbors(boardList, swapPosition, count-1);
      }
      return false;
    }
  } else {
    if (count > 0){
      return swapToRandomBoardPositionTillNoNeighbors(boardList, swapPosition, count-1);
    }
    return false;
  }
}


function swapToRandomBoardPosition(boardList, position) {
  let swapPosition = newRandomInterger(boardList.length-1);
  let queenAtSwapPosition = boardList[swapPosition];
  boardList[swapPosition] = boardList[position];
  boardList[position] = queenAtSwapPosition;
}



function newRandomInterger(n) {
  return Math.floor(Math.random() * n);
}

exports.newBoard = newBoard;
exports.swapToRandomBoardPosition = swapToRandomBoardPosition;
exports.swapToRandomBoardPositionTillNoNeighbors = swapToRandomBoardPositionTillNoNeighbors;
