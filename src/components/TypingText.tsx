import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export const TypingText = ({ 
  text, 
  className = "", 
  speed = 150, 
  delay = 500 
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Initial delay before starting
    timeout = setTimeout(() => {
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
          // Hide cursor after typing is complete
          setTimeout(() => setShowCursor(false), 1500);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  // Cursor blink effect
  useEffect(() => {
    if (!isComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
      return () => clearInterval(cursorInterval);
    }
  }, [isComplete]);

  return (
    <span className={className}>
      {displayedText}
      <span 
        className={`inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle transition-opacity duration-100 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
};
