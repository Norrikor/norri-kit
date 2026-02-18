// src/tokens/borderRadius.ts
export const borderRadius = {
  none: '0px',
  sm: '4px',
  base: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  full: '9999px',
  
  // Семантические (зависят от режима плотности)
  card: {
    comfortable: 'var(--norri-radius-lg)',
    compact: 'var(--norri-radius-base)',
  },
  button: {
    comfortable: 'var(--norri-radius-md)',
    compact: 'var(--norri-radius-sm)',
  },
  input: {
    comfortable: 'var(--norri-radius-md)',
    compact: 'var(--norri-radius-sm)',
  },
} as const;