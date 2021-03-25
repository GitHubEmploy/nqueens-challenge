const generate = require("./generate.js");


let size = 15;
let maxRowChecks = 100;
//             1,000
let maxTries = 1000;
let maxRounds = 1;
let triesNeededForSolution = 0;

for (let rounds=0;rounds<maxRounds;++rounds) {
  for (let tries=0;tries<maxTries;++tries) {
    boardList = generate.newBoardGreedy(size);




if (
