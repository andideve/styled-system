import { omit } from '../src/utils';

describe('omit', () => {
  it('return omitted keys', () => {
    expect(
      omit({ disableCache: true, darkMode: 'class', space: {} }, ['disableCache', 'darkMode']),
    ).toEqual({ space: {} });
  });

  it('invalid omit keys', () => {
    expect(omit({ space: {} }, ['disableCache', 'darkMode'])).toEqual({ space: {} });
  });
});
