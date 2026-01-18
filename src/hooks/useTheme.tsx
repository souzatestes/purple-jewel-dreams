import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AccentColor = 'purple' | 'gold';

interface ThemeContextType {
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [accentColor, setAccentColor] = useState<AccentColor>(() => {
    const saved = localStorage.getItem('ada-accent-color');
    return (saved as AccentColor) || 'purple';
  });

  useEffect(() => {
    localStorage.setItem('ada-accent-color', accentColor);
    
    // Remove classes anteriores
    document.documentElement.classList.remove('accent-purple', 'accent-gold');
    // Adiciona a classe do tema atual
    document.documentElement.classList.add(`accent-${accentColor}`);
  }, [accentColor]);

  return (
    <ThemeContext.Provider value={{ accentColor, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
