import { experiments } from 'webpack';
import { quarterCount, remainderQuarter, dimeCount, remainderDime, nickelCount, remainderNickel } from '../src/js/quarter-count.js';

describe('quarterCount()', () => {
  test('should return number of quarters in 25 cents', () => {
    expect(quarterCount(25)).toEqual(1);
  });
  test('should return undefined if NaN input', () => {
    expect(quarterCount(NaN)).toEqual(undefined);
  });
  describe('remainderQuarter()', () => {
    test('should return remainder of number input % 25', () => {
      expect(remainderQuarter(55)).toEqual("less than 9 cents left. 5");
    });
    test('should return remainder of number input % 25', () => {
      expect(remainderQuarter(50)).toEqual(0);
    });
    test('should return remainder of number input % 25', () => {
      expect(remainderQuarter(11)).toEqual("the remainder is 11");
    });
  });
});

describe('dimeCount()', () => {
  test('should return number of dimes in remValue', () => {
    expect(dimeCount(11)).toEqual(1);
  });
});
describe('remainderDime()', () => {
  test('should return remainder of number input % 10', () => {
    expect(remainderDime(19)).toEqual("the remainder is 9");
  });
  test('should return remainder of number input % 10', () => {
    expect(remainderDime(20)).toEqual(0);
  });
  test('should return remainder of number input % 10', () => {
    expect(remainderDime(4)).toEqual("less than 4 cents left. 4");
  });
});

describe('nickelCount()', () => {
  test('should return number of nickels in remValue', () => {
    expect(nickelCount(7)).toEqual(1);
  });
});
describe('remainderNickel()', () => {
  test('should return remainder of number input % 5', () => {
    expect(remainderNickel(7)).toEqual("the remainder is 2");
  });
  test('should return remainder of number input % 5', () => {
    expect(remainderNickel(5)).toEqual(0);
  });
  test('should return remainder of number input % 5', () => {
    expect(remainderNickel(9)).toEqual("the remainder is 4");
  });
});


