/* jshint esversion: 6 */

const chai = require('chai');
const expect = chai.expect;

const throwingDarts = require('../throwing-darts.js');

describe('throwingDarts', () => {
  it('should be a function', () => {
    expect(throwingDarts).to.be.a('function');
  });

  it('should convert throw to 0 points if threw is greater than 10', () => {
    expect(throwingDarts([15,20, 30])).to.equal(0);
  });

  it('should convert throw to 5 points if threw is greater than or equal to 5 and less than or equal to 10', () => {
    expect(throwingDarts([5, 6, 7, 5, 10])).to.equal(25);
  });

  it('should convert throw to 10 points each if threw was less than 5', () => {
    expect(throwingDarts([3, 3, 2, 4 , 5])).to.equal(45);
  });

  it('should return -1 if array is empty', () => {
    expect(throwingDarts([])).to.equal(-1);
  });

  it('should award 100 point bonus if all numbers are less than 5', () => {
    expect(throwingDarts([3, 2, 1])).to.equal(130);
  });
});