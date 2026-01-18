import { useState, useRef } from "react";

interface AboutVideoSectionProps {
  videoSrc: string;
  posterImage: string;
  creatorImage: string;
  creatorName?: string;
}

export const AboutVideoSection = ({ 
  videoSrc, 
  posterImage, 
  creatorImage,
  creatorName = "Ada"
}: AboutVideoSectionProps) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setVideoEnded(false);
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setVideoEnded(false);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-glow">
      {/* Video */}
      <div className={`transition-opacity duration-500 ${videoEnded ? 'opacity-0 pointer-events-none absolute inset-0' : 'opacity-100'}`}>
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterImage}
          className="w-full aspect-video object-cover"
          onEnded={handleVideoEnd}
          playsInline
          controls={isPlaying}
        />
        {!isPlaying && !videoEnded && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-background/30 hover:bg-background/20 transition-colors group"
          >
            <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
              <svg 
                className="w-8 h-8 text-primary-foreground ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Creator Image (shown after video ends) */}
      <div className={`transition-opacity duration-500 ${videoEnded ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}>
        <img
          src={creatorImage}
          alt={creatorName}
          className="w-full aspect-video object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-foreground font-serif text-2xl mb-2">{creatorName}</p>
          <p className="text-muted-foreground font-sans text-sm mb-4">Criadora Ada Gioielli</p>
          <button
            onClick={handleReplay}
            className="inline-flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary px-6 py-2 rounded-full font-sans text-sm transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Assistir novamente
          </button>
        </div>
      </div>
    </div>
  );
};
