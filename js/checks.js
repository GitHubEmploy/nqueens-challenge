const {binaryNode} = require("./binaryNode.js");
const {point} = require("./point.js");
const treeify = require("./treeify.js");
const {slopeInterceptObject} = require("./slopeInterceptObject");


function areNeighborsDiagonal(boardList, index) {
  // check for max out of bounds
  if (index+1 < boardList.length){
    if( Math.abs(boardList[index]-boardList[index+1]) === 1 ) {
      return true;
    }
  }
  // check for min out of bounds
  if (index-1 > 0) {
    if ( Math.abs(boardList[index]-boardList[index-1]) === 1 ) {
      return true;
    }
  }
  return false;
}

// returns bool
// if true, found a colinear point
// if false, didn't find a colinear point
function hasColinear(boardList) {
  let tree = new binaryNode();
  let slopeIntercept = new slopeInterceptObject();
  let pointA = new point(0, 0);
  let pointB = new point(0, 0);
  for (i=0;i<boardList.length;i++) {
    for (j=i+1;j<boardList.length;j++) {
      pointA = new point(i, boardList[i]);
      pointB = new point(j, boardList[j]);
      slopeIntercept = new slopeInterceptObject(computeSlope(pointA, pointB), computeYIntercept(pointA, pointB));
      if (slopeIntercept.slope === 1 || slopeIntercept === -1 ) {
        return true;
      }
      if (tree.add(slopeIntercept) === true ) {
        return true;
      }
    }
  }
  return false;
}

function isValidSwap(boardList, origionalPosition, swapPosition) {
  if (!areNeighborsDiagonal(boardList, origionalPosition)) {
    if (!areNeighborsDiagonal(boardList, swapPosition)) {
      return true;
    }
  }
  return false;
}


// returns bool
// if true, is a valid board
// if false is not a valid board
function isValidBoard(boardList) {
  for (i=0;i<boardList.length;i++) {
    if (areNeighborsDiagonal(boardList, i)) {
      return false;
    }
  }
  if (!hasColinear(boardList)) {
    return true;
  }
  return false;
}

function computeSlope(pointA, pointB) {
  return (pointB.y-pointA.y)/(pointB.x-pointA.x);
}

function computeYIntercept(pointA, pointB) {
  return (pointB.y - (computeSlope(pointA, pointB) * pointB.x));
}

exports.hasColinear = hasColinear;
exports.areNeighborsDiagonal = areNeighborsDiagonal;
exports.isValidBoard = isValidBoard;
exports.isValidSwap = isValidSwap;
