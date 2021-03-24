function placeQueenOnBoard(boardList, location) {
  return boardList[location.x] = location.y;
}

function selectQueenFromConflictsList () {

}

function generateColumnConflictsList(boardList, column) {
  let slopeTree = createSlopeTree(boardList, column);
  let conflictsList = [];
  for (let row=0;row<boardList.length;++row) {
    queenLocatrowon = new point(column, row);
    conflictList[i] = countConflicts(board, slopeTree, queenLocation);
  }
}

function countConflicts(board, slopeTree, queenLocation) {

}

function createSlopeTree(boardList, currentWorkingColumn) {
  let tree = new binaryNode();
}


function generateAllCombinations(boardList) {
  let combinationList = [];
  for (let row=0;row<boardList.length;++row) {
    for (let column=row+1;column<boardList.length;++column) {
      pointA = new point(i, boardList[i]);
      pointB = new point(j, boardList[j]);
      combinationList.push([pointA, pointB]);
    }
  }
  return combinationList;
}

function removeWorkingColumnFromCobinationList(combinationList, column) {
  return combinationList.filter((item) => { 
    let [pointA, pointB] = item;
    if (pointA.x === column || pointB.x === column) {
      return false;
    }
    return true;
  });
}

