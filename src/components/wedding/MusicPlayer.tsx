import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useOpened } from "./OpenGate";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const opened = useOpened();
  const hasTriggeredRef = useRef(false);

  // Initialize audio
  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // When user opens the gate, start playback automatically (supported since it's a direct user interaction)
  useEffect(() => {
    if (opened && !hasTriggeredRef.current && audioRef.current) {
      hasTriggeredRef.current = true;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.log("Autoplay on gate open blocked:", e);
          setIsPlaying(false);
        });
    }
  }, [opened]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Audio play error:", e));
    }
  };

  return (
    <div className="fixed bottom-6 right-5 z-40">
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Mute music" : "Play music"}
        className="group relative flex size-12 items-center justify-center rounded-full border border-gold/70 bg-pine/90 text-parchment shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-gold active:scale-95"
      >
        {isPlaying ? (
          <>
            <span className="absolute -inset-1 animate-ping rounded-full border border-gold/40 opacity-75 duration-1000" />
            <Volume2 className="size-5 text-gold transition-transform group-hover:scale-110" />
          </>
        ) : (
          <VolumeX className="size-5 text-parchment/70 transition-transform group-hover:scale-110" />
        )}
      </button>
    </div>
  );
}
