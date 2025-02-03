import { useAudio } from "@/contexts/AudioContext";
import PlayerControls from "./PlayerControls";
import VolumeControl from "./VolumeControl";

const MusicPlayer = () => {
  const { currentTrack } = useAudio();

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg p-4 border-t border-white/10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={currentTrack.coverUrl}
            alt={`${currentTrack.title} Cover`}
            className="w-14 h-14 rounded-md object-cover"
          />
          <div>
            <h3 className="text-white font-medium">{currentTrack.title}</h3>
            <p className="text-white/60 text-sm">{currentTrack.artist}</p>
          </div>
        </div>
        
        <div className="flex-1 max-w-2xl mx-8">
          <PlayerControls />
          <div className="mt-2">
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>0:00</span>
              <div className="flex-1 h-1 bg-white/20 rounded-full">
                <div className="w-1/3 h-full bg-white rounded-full relative group cursor-pointer">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <span>3:45</span>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <VolumeControl />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;