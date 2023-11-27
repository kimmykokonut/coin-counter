import { experiments } from 'webpack';
import { quarterCount, remainder, dimeCount, nickelCount, assessChange } from '../src/js/quarter-count.js';
// , remainderDime, , remainderNickel 

describe('quarterCount()', () => {
  test('should return number of quarters in 25 cents', () => {
    expect(quarterCount(25)).toEqual(1);
  });
  test('should return undefined if NaN input', () => {
    expect(quarterCount(NaN)).toEqual(undefined);
  });
});
describe('remainder()', () => {
  test('should return remainder of number input', () => {
    expect(remainder(55)).toEqual(5);
  });
  test('should return remainder of number input', () => {
    expect(remainder(50)).toEqual(0);
  });
  test('should return remainder of number input', () => {
    expect(remainder(10)).toEqual(0);
  });
  test('should return remainder of number input', () => {
    expect(remainder(5)).toEqual(0);
  });
});

describe('dimeCount()', () => {
  test('should return number of dimes in remValue', () => {
    expect(dimeCount(11)).toEqual(1);
  });
});

describe('nickelCount()', () => {
  test('should return number of nickels in remValue', () => {
    expect(nickelCount(7)).toEqual(1);
  });
});

describe('assessChange()', () => {
  test('should return amount of change from given number', () => {
    expect(assessChange('4.92')).toEqual("Of 4.92, there are 3 quarters, 1 dimes, 1 nickels, 2 pennies");
  });
});


