export const spacing = {
  // Базовая сетка (4px)
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  
  // Семантические алиасы для режимов плотности (будут переопределяться в темах)
  // Эти переменные будут использоваться в компонентах
  layout: {
    comfortable: {
      cardPadding: 'var(--norri-space-6)',
      cardGap: 'var(--norri-space-4)',
      sectionSpacing: 'var(--norri-space-8)',
      elementHeight: 'var(--norri-space-8)',
      elementPadding: 'var(--norri-space-4) var(--norri-space-6)',
    },
    compact: {
      cardPadding: 'var(--norri-space-3)',
      cardGap: 'var(--norri-space-2)',
      sectionSpacing: 'var(--norri-space-4)',
      elementHeight: 'var(--norri-space-6)',
      elementPadding: 'var(--norri-space-2) var(--norri-space-3)',
    },
  },
} as const;