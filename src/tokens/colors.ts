export const colors = {
  // Основные акцентные
  primary: {
    light: '#8b5cf6',     // фиолетовый для светлой темы
    dark: '#a78bfa',       // более мягкий фиолетовый для тёмной темы
  },
  success: {
    light: '#22c55e',      // зелёный для успеха
    dark: '#4ade80',       // более мягкий зелёный для тёмной темы
  },
  
  // Фиолетовая палитра (для градиентов, вариаций)
  purple: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',        // основной
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  
  // Зелёная палитра
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',        // основной
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  // Фоны (для светлой и тёмной темы)
  background: {
    light: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
    },
    dark: {
      primary: '#0f172a',   // глубокий тёмно-синий (LoL вайб)
      secondary: '#1e293b',
      tertiary: '#334155',
    },
  },
  
  // Текст
  text: {
    light: {
      primary: '#0f172a',
      secondary: '#334155',
      tertiary: '#64748b',
      inverse: '#ffffff',
    },
    dark: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      tertiary: '#94a3b8',
      inverse: '#0f172a',
    },
  },
  
  // Границы, разделители
  border: {
    light: {
      light: '#e2e8f0',
      medium: '#cbd5e1',
      heavy: '#94a3b8',
    },
    dark: {
      light: '#334155',
      medium: '#475569',
      heavy: '#64748b',
    },
  },
  
  // Состояния
  state: {
    hover: {
      light: 'rgba(0, 0, 0, 0.05)',
      dark: 'rgba(255, 255, 255, 0.05)',
    },
    active: {
      light: 'rgba(0, 0, 0, 0.1)',
      dark: 'rgba(255, 255, 255, 0.1)',
    },
    disabled: {
      light: 'rgba(0, 0, 0, 0.25)',
      dark: 'rgba(255, 255, 255, 0.25)',
    },
  },
} as const;