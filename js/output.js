// print board in a grid
function printBoard(boardList) {
  // flip board as the easy printBoard does by row but the normal board list lists queens by column
  let flipped = flipBoard(boardList);
  let line = "";
  for (i=0;i<boardList.length;i++) {
    for (j=0;j<boardList.length;j++) {
      if (flipped[i] == j) {
        line = line.concat("X");
      }
      else {
        line = line.concat("*");
      }
    }
    console.log(line);
    line = "";
  }
}

function printSolution(boardList) {
  let outputString = "";
  for(i=0;i<boardList.length;i++) {
    outputString = outputString+(boardList[i]+1)+" ";
  }
  console.log(outputString);
}
    

// flip board along a 45 degree as the default has column as index and row as value
function flipBoard(boardList) {
  let newBoardList = [];
  for(i=0;i<boardList.length;i++) {
    newBoardList[boardList[i]] = i;
  }
  return newBoardList;
}

exports.printBoard = printBoard;
exports.printSolution = printSolution;
exports.flipBoard = flipBoard;
