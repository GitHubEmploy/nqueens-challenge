const {assert} = require("chai");
const {removeWorkingColumnFromCombinationList} = require("../src/boardFunctions.js");
const {point} = require("../src/point.js");

describe('removeWorkingColumnFromCombinationList', function() {
  it('should remove AB, BC', function() {
    let testList =  [ [new point(1, 1), new point(0, 1)],
                      [new point(1, 1), new point(2, 3)],
                      [new point(2, 2), new point(1, 2)],
                      [new point(2, 2), new point(2, 1)] ];
    assert.deepEqual(removeWorkingColumnFromCombinationList(testList, 1), [[new point(2, 2), new point(2, 1)]]);
  });
  it('should return nothing, empty list', function() {
    let testList = [];
    assert.deepEqual(removeWorkingColumnFromCombinationList(testList, 1), []);
  });
});
