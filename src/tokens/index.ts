import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { borderRadius } from './borderRadius';

export { colors, spacing, typography, borderRadius };

// Типы для удобства
export type ColorToken = typeof colors;
export type SpacingToken = typeof spacing;
export type TypographyToken = typeof typography;
export type BorderRadiusToken = typeof borderRadius;