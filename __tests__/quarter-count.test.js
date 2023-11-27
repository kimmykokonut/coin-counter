import quarterCount from '../src/js/quarter-count';

describe('quarterCount()', () => {
  test('should return number of quarters in 25 cents', () => {
    expect(quarterCount(25)).toEqual(1);
  });
});