use 2d array to store positions the best position might have conflicts on the row/column so don't want to prevent that
      use 1d array for now, it will mean there are no column conflicts
      wikipedia article says to just do it for columns so will just use columns for now

store slopes in the tree used before, makes it easy to find colisions
- precompute the tree of current slopes/y intercepts before finding min
      compute the current state of the board before doing a column of checks, reduces the number of checks needed
- store multiple points in a line as multiple collisions, ie if 3 in a line 1 collision, 4 in a line 2 collisions
      try with counting both duplicate collisions, and with just single collisons
- doing slopes checks for 
- colinearity, slopeA = SlopeB && yInterceptA = yInterceptB
- diagonals; slope = 1 | -1
- vertical; slope = infinity (divide by zero)
- horizontal; slope = 0

all collisions are the same though so just have to count the colisions, don't care which direction it is just have to find the spot with the fewest
      pass around flag that says to choose the last or first min conflicts?

point randomly selected? column randomly selected? how to select points/ determine min location

Do I need min location for column? or min location for full board? (might need to try both)

some way to check for average number of colisions for rounds
some way to check for number of points to find the min colisions for

cant do an early esc from the find min as need to find the absolute min conflicts
      what I can do is fully compute the number of conflicts for the first spot and then if any conflicts are less than that replace the "min conflicts position" variable


functions needed:

board -> bool
isValidBoard(board)
- checks board for valid board, returns bool

board -> slope-tree -> queenLocation -> int
countConflicts(board, slope-tree, queenLocation)

board -> slope-tree -> queenLocation -> Interger -> Interger
countConflictsToMax(board, slope-tree, queenLocation, max)
return either max conflicts if less than max else return max+1

int -> int
getRandomInt(n)
random % n

int -> board
newBoardGreedy(n)
generate board greedy

newBoardRandom(n)
uses getRandomInt


point -> point -> int
computeSlope(pointA, pointB)

point -> point -> int
computeYIntercept(pointA, pointB)

output.js
point.js
binaryNode.js


[int] -> int
selectQueenLocationFromConflictsList(conflictsList)

board -> point -> board
placeQueenOnBoard(board, location)
removes queen from row and replaces at point


