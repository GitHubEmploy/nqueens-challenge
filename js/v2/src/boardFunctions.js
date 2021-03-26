const helperFunctions = require("./helperFunctions.js");
const {binaryNode} = require("./binaryNode.js");
const {point,computeSlope,computeYIntercept} = require("./point.js");
const {slopeInterceptObject} = require("./slopeInterceptObject");

function placeQueenOnBoard(boardList, location) {
  return boardList[location.x] = location.y;
}

function selectQueenRowFromConflictList (conflictList) {
  let listOfMins = [];
  // the conflicts list will be of size n
  // so we can safely assume that the minimum number of conflicts will be less than 3 times n
  // since at most a point can conflict with another in 3 ways
  let min = (conflictList.length*3)+1;
  for (let i=0;i<conflictList.length;++i) {
    if (conflictList[i] < min) {
      listOfMins = [i];
      min = conflictList[i];
    } else if (conflictList[i] === min) {
      listOfMins.push(i);
    }
  }
  let myRandom = helperFunctions.randomInt(listOfMins.length)
  if (listOfMins.length < 1) {
    throw "did not find a minimum"
  }
  return listOfMins[myRandom];
}

function generateColumnConflictList(boardList, column) {
  let [slopeTree, count] = generateSlopeTree(
      removeWorkingColumnFromCombinationList(
          generateAllCombinations(boardList),
          column));
  let conflictList = [];
  for (let row=0;row<boardList.length;++row) {
    let queenLocation = new point(column, row);
    conflictList[row] = countSinglePointConflicts(boardList, slopeTree, queenLocation);
  }
  return conflictList;
}

function generateConflictCountFromEachPointInRow(boardList, column) {
  let combinationList = generateAllCombinations(boardList);
  let revisedCombinationList = removeWorkingColumnFromCombinationList(combinationList);
  let [slopeTree, count] = generateSlopeTree(revisedCombinationList);
  let conflictList = [];
  for (let row=0;row<boardList.length;++row) {
    let queenLocation = new point(column, row);
    conflictList[row] = countSinglePointConflicts(boardList, slopeTree, queenLocation);
  }
  return conflictList;
}

function countWholeBoardConflicts(boardList, slopeTree, slopeTreeCount) {
  let combinationList = generateAllCombinations(boardList);
  let count = slopeTreeCount;
  for (let item=0;item<combinationList.length;++item) {
    let [pointA, pointB] = combinationList[item];
    let slopeIntercept = new slopeInterceptObject(
        computeSlope(pointA, pointB),
        computeYIntercept(pointA, pointB));
    if ( slopeIntercept.slope === 1 || slopeIntercept.slope === -1 ) {
      ++count;
    } else if ( slopeIntercept.slope === 0 ) {
      ++count;
    }
  }
  return count;
}

function countSinglePointConflicts(boardList, slopeTree, queenLocation) {
  let combinationList = generateSinglePointCombinations(boardList, queenLocation);
  let count = 0;
  for (let item=0;item<combinationList.length;++item) {
    let [pointA, pointB] = combinationList[item];
    let slopeIntercept = new slopeInterceptObject(
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

function countPointConflictsToMax(boardList, slopeTree, queenLocation, max) {
  let combinationList = generateSinglePointCombinations(boardList, queenLocation);
  let count = 0;
  for (let item=0;item<combinationList.length;++item) {
    let [pointA, pointB] = combinationList[item];
    let slopeIntercept = new slopeInterceptObject(
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

function generateSlopeTree(combinationList) {
  let tree = new binaryNode();
  let count = 0;
  let pointA = new point(0, 0);
  let pointB = new point(0, 0);
  for (let item=0;item<combinationList.length;++item) {
    [pointA, pointB] = combinationList[item];
    let slopeIntercept = new slopeInterceptObject(
        computeSlope(pointA, pointB),
        computeYIntercept(pointA, pointB));
    if (slopeIntercept == null ) {
      console.log("slopeIntercept was null");
    }
    if (tree.add(slopeIntercept) === true ) {
      count++;
    }
  }
  return [tree, count];
}


function generateAllCombinations(boardList) {
  let combinationList = [];
  for (let i=0;i<boardList.length;++i) {
    for (let j=i+1;j<boardList.length;++j) {
      let pointA = new point(i, boardList[i]);
      let pointB = new point(j, boardList[j]);
      combinationList.push([pointA, pointB]);
    }
  }
  return combinationList;
}

function generateSinglePointCombinations(boardList, comparePoint) {
  let combinationList = [];
  for (let i=0;i<boardList.length;++i) {
    let listPoint = new point(i, boardList[i]);
    if (comparePoint.x != listPoint.x) {
      combinationList.push([comparePoint, listPoint]);
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
exports.placeQueenOnBoard = placeQueenOnBoard;
exports.selectQueenRowFromConflictList = selectQueenRowFromConflictList;
exports.generateColumnConflictList = generateColumnConflictList;
exports.generateConflictCountFromEachPointInRow = generateConflictCountFromEachPointInRow;
exports.removeWorkingColumnFromCombinationList = removeWorkingColumnFromCombinationList;
exports.generateAllCombinations = generateAllCombinations;
exports.generateSlopeTree = generateSlopeTree;
exports.countWholeBoardConflicts = countWholeBoardConflicts;
