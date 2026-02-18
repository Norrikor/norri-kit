import React, { createContext, useContext, useEffect, useState } from 'react';

// Тип для темы
export type ThemeMode = 'light' | 'dark';

// Интерфейс контекста
interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

// Создаём контекст
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Провайдер
export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  defaultMode?: ThemeMode;
  /** Атрибут на корневой DOM-элемент (по умолчанию true) */
  applyDataAttribute?: boolean;
}> = ({ 
  children, 
  defaultMode = 'light',
  applyDataAttribute = true 
}) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  // Переключалка для удобства
  const toggleMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Вешаем data-атрибут на корневой HTML-элемент
  useEffect(() => {
    if (applyDataAttribute) {
      document.documentElement.setAttribute('data-theme', mode);
      
      return () => {
        document.documentElement.removeAttribute('data-theme');
      };
    }
  }, [mode, applyDataAttribute]);

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Хук для использования
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};