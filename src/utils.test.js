/* eslint-env mocha */
import { expect } from 'chai';
import { detectSums } from './utils';

describe('Detect sums', () => {
  it('should fail if input is not an array', () => {
    expect(() => detectSums()).to.throw('Input is not an array');
  });

  it('should return an array', () => {
    const result = detectSums([]);
    expect(result).to.be.instanceof(Array);
  });

  it('should detect sums', () => {
    const result = detectSums([1, 2]);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.lengthOf(0);
  });

  it('should detect sums in order', () => {
    const result = detectSums([1, 2, 3]);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.lengthOf(1);
    expect(result).to.deep.include({ pA: 0, pB: 1, sum: 2 });
  });

  it('should not return any sum', () => {
    const resultOne = detectSums([1, 2, 4]);
    expect(resultOne).to.be.instanceOf(Array);
    expect(resultOne).to.have.lengthOf(0);

    const resultTwo = detectSums([3, 0, 2]);
    expect(resultTwo).to.be.instanceOf(Array);
    expect(resultTwo).to.have.lengthOf(0);
  });

  it('should return every possible combination once', () => {
    const resultOne = detectSums([1, 2, 3, 4, 5]);
    expect(resultOne).to.be.instanceof(Array);
    expect(resultOne).to.have.lengthOf(4);
    expect(resultOne).to.deep.equal([
      { pA: 0, pB: 1, sum: 2 },
      { pA: 0, pB: 2, sum: 3 },
      { pA: 0, pB: 3, sum: 4 },
      { pA: 1, pB: 2, sum: 4 },
    ]);

    const resultTwo = detectSums([1, 2, 1, 3]);
    expect(resultTwo).to.be.instanceof(Array);
    expect(resultTwo).to.have.lengthOf(3);
    expect(resultTwo).to.deep.equal([
      { pA: 0, pB: 1, sum: 3 },
      { pA: 0, pB: 2, sum: 1 },
      { pA: 1, pB: 2, sum: 3 },
    ]);

    const resultThree = detectSums([1, 2, 1, 2, 3]);
    expect(resultThree).to.be.instanceof(Array);
    expect(resultThree).to.have.lengthOf(6);
    expect(resultThree).to.deep.equal([
      { pA: 0, pB: 1, sum: 4 },
      { pA: 0, pB: 2, sum: 1 },
      { pA: 0, pB: 2, sum: 3 },
      { pA: 0, pB: 3, sum: 4 },
      { pA: 1, pB: 2, sum: 4 },
      { pA: 2, pB: 3, sum: 4 },
    ]);
  });
});
