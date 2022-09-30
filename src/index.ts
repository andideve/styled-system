import { background, BackgroundProps } from '@andideve/sx-background';
import { border, BorderProps } from '@andideve/sx-border';
import { color, ColorProps } from '@andideve/sx-color';
import { flexbox, FlexboxProps } from '@andideve/sx-flexbox';
import { grid, GridProps } from '@andideve/sx-grid';
import { layout, LayoutProps } from '@andideve/sx-layout';
import { position, PositionProps } from '@andideve/sx-position';
import { shadow, ShadowProps } from '@andideve/sx-shadow';
import { space, SpaceProps } from '@andideve/sx-space';
import { typography, TypographyProps } from '@andideve/sx-typography';

export {
  createSfp,
  get,
  system,
  compose,
  CSSProperties,
  CoreThemeKey,
  ThemeKey,
  Theme,
  SystemConfig,
  ResponsiveValue,
} from '@andideve/sx-core';

export {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
};

export * from '@andideve/sx-utils';

export { toCSSVars } from './to-css-vars';
