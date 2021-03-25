const {point} = require("./point.js");
const {randomInt} = require("./helperFunctions.js");
const boardFunctions = require("./boardFunctions");


function newBoardGreedy(n) {
  let boardList = [];
  for (let i=0;i<n;++i) {
    boardFunctions.placeQueenOnBoard(
        boardList,
        new point (boardFunctions.selectQueenRowFromConflictList(
            i,
            boardFunctions.generateColumnConflictList(
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

exports.newBoardGreedy = newBoardGreedy;
exports.newBoardRandom = newBoardRandom;
