const {point} = require("./point.js");
const {randomInt} = require("./helpFunctions.js");
const boardFunctions = require("./boardFunctions");


function newBoardGreedy(n) {
  let boardList = [];
  for (let i=0;i<n;++i) {
    boardFunctions.placeQueenOnBoard(
        boardList,
        new point (boardFunctions.selectQueenRowFromConflictsList(
            i,
            boardFunctions.generateColumnConflictsList(
                boardList,
                i))));
  }
  return boardList;
}

function newBoardRandom(n) {
  let boardList = [];
  for (let i=0;i<n;++i){
    boardFunctions.placeQueenOnBoard(
        boardList,
        new point(
            i,
            randomInt(n)));
  }
  return boardList;
}
