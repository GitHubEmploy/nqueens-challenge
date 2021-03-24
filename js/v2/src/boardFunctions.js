function placeQueenOnBoard(boardList, location) {
  return boardList[location.x] = location.y;
}

function selectQueenFromConflictsList () {

}

function generateColumnConflictsList(boardList, column) {
  let slopeTree = createSlopeTree(boardList, column);
  let conflictsList = [];
  for (let row=0;row<boardList.length;++row) {
    queenLocation = new point(column, row);
    conflictList[i] = countConflicts(board, slopeTree, queenLocation);
  }
  return conflictsList;
}

function countConflicts(boardList, slopeTree, queenLocation) {
  

}

function countConflictsToMax(boardList, slopeTree, queenLocation, max) {

}

function createSlopeTree(boardList, currentWorkingColumn) {
  let tree = new binaryNode();
  let pointA = new point(0, 0);
  let pointB = new point(0, 0);
  let workingCombinationList = removeWorkingColumnFromCombinationList(
      generateAllCombinations(boardList),
      currentWorkingColumn);
  for (let item=0;item<workingCombinationList.length;++item) {
    [pointA, pointB] = workingCombinationList[item];
    slopeIntercept = new slopeInterceptObject(
        computeSlope(pointA, pointB),
        computeYIntercept(pointA, pointB));
    tree.add(slopeIntercept);
  }
  return tree;
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

function removeWorkingColumnFromCombinationList(combinationList, column) {
  return combinationList.filter((item) => { 
    let [pointA, pointB] = item;
    if (pointA.x === column || pointB.x === column) {
      return false;
    }
    return true;
  });
}

exports.removeWorkingColumnFromCombinationList = removeWorkingColumnFromCombinationList
