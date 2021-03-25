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
  let combinationList = generateSinglePointCombinations(boardList, queenLocation);
  let count = 0;
  for (let item=0;item<CombinationList.length;++item) {
    [pointA, pointB] = CombinationList[item];
    slopeIntercept = new slopeInterceptObject(
        computeSlope(pointA, pointB),
        computeYIntercept(pointA, pointB));
    if ( slopeIntercept.slope === 1 || slopeIntercept.slope === -1 ) {
      ++count;
    } else if ( slopeIntercept.slope === 0 ) {
      ++count;
    } else {
      if (slopeTree.find(slopeIntercept)) {
        ++count;
      }
    }
  }
  return count;
}

function countConflictsToMax(boardList, slopeTree, queenLocation, max) {
  let combinationList = generateSinglePointCombinations(boardList, queenLocation);
  let count = 0;
  for (let item=0;item<CombinationList.length;++item) {
    [pointA, pointB] = CombinationList[item];
    slopeIntercept = new slopeInterceptObject(
        computeSlope(pointA, pointB),
        computeYIntercept(pointA, pointB));
    if ( slopeIntercept.slope === 1 || slopeIntercept.slope === -1 ) {
      ++count;
    } else if ( slopeIntercept.slope === 0 ) {
      ++count;
    } else {
      if (slopeTree.find(slopeIntercept)) {
        ++count;
      }
    }
    if (count > max) {
      break;
    }
  }
  return count;
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
  for (let column=0;column<boardList.length;++column) {
    for (let row=column+1;row<boardList.length;++row) {
      pointA = new point(column, boardList[i]);
      pointB = new point(row, boardList[j]);
      combinationList.push([pointA, pointB]);
    }
  }
  return combinationList;
}

function generateSinglePointCombinations(boardList, point) {
  let combinationList = [];
  let listPoint = new point(0, 0);
  for (let i=0;i<boardList.length;++i) {
    listPoint = new point(i, boardList[i]);
    if (point.x != listPoint.x) {
      combinationList.push([point, listPoint]);
    }
  }
  return combinationList
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
