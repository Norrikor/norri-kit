import React, { createContext, useContext, useEffect, useState } from 'react';

// Тип для режимов плотности
export type DensityMode = 'comfortable' | 'compact';

// Интерфейс контекста
interface DensityContextType {
  mode: DensityMode;
  setMode: (mode: DensityMode) => void;
  toggleMode: () => void;
}

// Создаём контекст
const DensityContext = createContext<DensityContextType | undefined>(undefined);

// Провайдер
export const DensityProvider: React.FC<{
  children: React.ReactNode;
  defaultMode?: DensityMode;
  /** Атрибут на корневой DOM-элемент (по умолчанию true) */
  applyDataAttribute?: boolean;
}> = ({ 
  children, 
  defaultMode = 'comfortable',
  applyDataAttribute = true 
}) => {
  const [mode, setMode] = useState<DensityMode>(defaultMode);

  // Переключалка для удобства
  const toggleMode = () => {
    setMode(prev => prev === 'comfortable' ? 'compact' : 'comfortable');
  };

  // Вешаем data-атрибут на корневой HTML-элемент
  useEffect(() => {
    if (applyDataAttribute) {
      document.documentElement.setAttribute('data-density', mode);
      
      // Очистка при размонтировании
      return () => {
        document.documentElement.removeAttribute('data-density');
      };
    }
  }, [mode, applyDataAttribute]);

  return (
    <DensityContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </DensityContext.Provider>
  );
};

// Хук для использования
export const useDensity = () => {
  const context = useContext(DensityContext);
  if (!context) {
    throw new Error('useDensity must be used within DensityProvider');
  }
  return context;
};