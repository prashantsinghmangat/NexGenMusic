import { Play, SkipBack, SkipForward, Pause } from "lucide-react";
import { useState } from "react";

const PlayerControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex items-center justify-center gap-4">
      <button className="text-white/80 hover:text-white transition-colors">
        <SkipBack className="w-5 h-5" />
      </button>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-black" />
        ) : (
          <Play className="w-5 h-5 text-black ml-1" />
        )}
      </button>
      <button className="text-white/80 hover:text-white transition-colors">
        <SkipForward className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PlayerControls;