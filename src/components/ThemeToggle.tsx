import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export const ThemeToggle = () => {
  const [isPurple, setIsPurple] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("ada-theme");
    if (saved === "purple") {
      setIsPurple(true);
      document.documentElement.classList.add("theme-purple");
    }
  }, []);

  const toggleTheme = () => {
    const newValue = !isPurple;
    setIsPurple(newValue);
    
    if (newValue) {
      document.documentElement.classList.add("theme-purple");
      localStorage.setItem("ada-theme", "purple");
    } else {
      document.documentElement.classList.remove("theme-purple");
      localStorage.setItem("ada-theme", "clean");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        w-9 h-9 rounded-full flex items-center justify-center
        border transition-all duration-300
        ${isPurple 
          ? "border-primary bg-primary/10 text-primary" 
          : "border-foreground/20 hover:border-primary/50 text-foreground/60 hover:text-primary"
        }
      `}
      title={isPurple ? "Tema Clean" : "Tema Roxo"}
    >
      <Sparkles className="w-4 h-4" />
    </button>
  );
};
