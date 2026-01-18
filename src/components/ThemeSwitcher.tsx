import { useTheme } from '@/hooks/useTheme';

export const ThemeSwitcher = () => {
  const { accentColor, setAccentColor } = useTheme();

  return (
    <div className="flex items-center gap-2 bg-card border border-border rounded-full p-1">
      <button
        onClick={() => setAccentColor('purple')}
        className={`w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center ${
          accentColor === 'purple' 
            ? 'ring-2 ring-offset-2 ring-offset-card ring-[hsl(280,60%,65%)] scale-110' 
            : 'hover:scale-105'
        }`}
        style={{ background: 'linear-gradient(135deg, hsl(280 60% 60%) 0%, hsl(290 50% 70%) 100%)' }}
        title="Tema Roxo"
        aria-label="Tema Roxo"
      />
      <button
        onClick={() => setAccentColor('gold')}
        className={`w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center ${
          accentColor === 'gold' 
            ? 'ring-2 ring-offset-2 ring-offset-card ring-[hsl(45,80%,55%)] scale-110' 
            : 'hover:scale-105'
        }`}
        style={{ background: 'linear-gradient(135deg, hsl(45 80% 50%) 0%, hsl(45 70% 65%) 100%)' }}
        title="Tema Dourado"
        aria-label="Tema Dourado"
      />
    </div>
  );
};
