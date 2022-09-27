import { toCSSVars } from '../src/to-css-vars';

describe('toCSSVars', () => {
  it('return css object', () => {
    const theme = {
      space: {
        1.5: '.375rem',
        2: '.5rem',
        4: '1rem',
      },
      colors: {
        gray: { 200: '#hex', 300: '#hex' },
        green: { 200: '#hex', 300: '#hex' },
      },
    };
    expect(toCSSVars(theme)).toEqual({
      '--space-1.5': theme.space[1.5],
      '--space-2': theme.space[2],
      '--space-4': theme.space[4],
      '--colors-gray-200': theme.colors.gray[200],
      '--colors-gray-300': theme.colors.gray[300],
      '--colors-green-200': theme.colors.green[200],
      '--colors-green-300': theme.colors.green[300],
    });
  });

  it('support omit keys', () => {
    const theme = { disableCache: true, darkMode: 'class', space: { 2: '.5rem' } };
    expect(toCSSVars(theme, { omitKeys: ['disableCache', 'darkMode'], prefix: 'theme' })).toEqual({
      '--theme-space-2': theme.space[2],
    });
  });

  it('support var name prefix', () => {
    const theme = { space: { 2: '.5rem' } };
    expect(toCSSVars(theme, { prefix: 'theme' })).toEqual({
      '--theme-space-2': theme.space[2],
    });
  });

  it('support key transform', () => {
    const theme = {
      space: { 1.5: '.375rem' },
    };
    expect(toCSSVars(theme, { transform: key => key.replace(/[.]/g, '_') })).toEqual({
      '--space-1_5': '.375rem',
    });
  });
});
