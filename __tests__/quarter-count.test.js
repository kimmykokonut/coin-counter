import { quarterCount } from '../src/js/quarter-count.js';

describe('quarterCount()', () => {

  test('should return number of quarters in 25 cents', () => {
    expect(quarterCount(25)).toEqual(1);
  });
  test('should return undefined if NaN input', () => {
    expect(quarterCount(NaN)).toEqual(undefined);
  });

});