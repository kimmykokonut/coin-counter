import { experiments } from 'webpack';
import { quarterCount, remainder } from '../src/js/quarter-count.js';

describe('quarterCount()', () => {
  test('should return number of quarters in 25 cents', () => {
    expect(quarterCount(25)).toEqual(1);
  });
  test('should return undefined if NaN input', () => {
    expect(quarterCount(NaN)).toEqual(undefined);
  });

  describe('remainder()', () => {
    test('should return remainder of number input % 25', () => {
      expect(remainder(55)).toEqual("less than 9 cents left. 5");
    });
  });

});