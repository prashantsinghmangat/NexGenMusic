import { Play, SkipBack, SkipForward, Pause } from "lucide-react";
import { useAudio } from "@/contexts/AudioContext";

const PlayerControls = () => {
  const { isPlaying, play, pause, playNext, playPrevious } = useAudio();

  return (
    <div className="flex items-center justify-center gap-4">
      <button 
        onClick={playPrevious}
        className="text-white/80 hover:text-white transition-colors"
      >
        <SkipBack className="w-5 h-5" />
      </button>
      <button
        onClick={() => isPlaying ? pause() : play()}
        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-black" />
        ) : (
          <Play className="w-5 h-5 text-black ml-1" />
        )}
      </button>
      <button 
        onClick={playNext}
        className="text-white/80 hover:text-white transition-colors"
      >
        <SkipForward className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PlayerControls;