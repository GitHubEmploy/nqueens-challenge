function isValidBoard(boardList) {
  let total = 0;
  let count = 0;
  for (let i=0;i<boardList.length;++i) {
    count = countConflicts(boardList,
                generateSlopeTree(
                    generateAllCombinations(boardList)),
                new point(i, boardList[i]));
    total = total + count;
  }
  return total;
}
