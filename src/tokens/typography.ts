// src/tokens/typography.ts
export const typography = {
  fontFamily: {
    sans: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
  
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
  },
  
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  // Семантические стили (что где используем)
  heading: {
    h1: {
      fontSize: 'var(--norri-font-size-5xl)',
      fontWeight: 'var(--norri-font-weight-bold)',
      lineHeight: 'var(--norri-line-height-tight)',
    },
    h2: {
      fontSize: 'var(--norri-font-size-4xl)',
      fontWeight: 'var(--norri-font-weight-semibold)',
      lineHeight: 'var(--norri-line-height-tight)',
    },
    h3: {
      fontSize: 'var(--norri-font-size-3xl)',
      fontWeight: 'var(--norri-font-weight-semibold)',
      lineHeight: 'var(--norri-line-height-snug)',
    },
    h4: {
      fontSize: 'var(--norri-font-size-2xl)',
      fontWeight: 'var(--norri-font-weight-medium)',
      lineHeight: 'var(--norri-line-height-snug)',
    },
  },
  
  body: {
    large: {
      fontSize: 'var(--norri-font-size-lg)',
      lineHeight: 'var(--norri-line-height-relaxed)',
    },
    base: {
      fontSize: 'var(--norri-font-size-base)',
      lineHeight: 'var(--norri-line-height-normal)',
    },
    small: {
      fontSize: 'var(--norri-font-size-sm)',
      lineHeight: 'var(--norri-line-height-normal)',
    },
  },
} as const;