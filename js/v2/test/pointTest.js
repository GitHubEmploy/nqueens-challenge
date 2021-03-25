const {assert} = require("chai");
const {point,computeSlope,computeYIntercept} = require("../src/point.js");

describe('removeWorkingColumnFromCombinationList', function() {
  it('should have a slope of zero, same point', function() {
    let pointA = new point(0,0);
    let pointB = new point(0,0);
    assert.equal(computeSlope(pointA, pointB), 0);
  });
  it('should have a slope of 1', function() {
    let pointA = new point(0,0);
    let pointB = new point(1,1);
    assert.equal(computeSlope(pointA, pointB), 1);
  });
  it('should have a slope of zero', function() {
    let pointA = new point(100,100);
    let pointB = new point(1000,100);
    assert.equal(computeSlope(pointA, pointB), 0);
  });
  it('should have a slope of zero, technically infinity', function() {
    let pointA = new point(2,4);
    let pointB = new point(2,2);
    assert.equal(computeSlope(pointA, pointB), 0);
  });
});
