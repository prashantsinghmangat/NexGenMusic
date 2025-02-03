import { Volume2 } from "lucide-react";

const VolumeControl = () => {
  return (
    <div className="flex items-center gap-2">
      <Volume2 className="w-5 h-5 text-white/80" />
      <div className="w-24 h-1 bg-white/20 rounded-full">
        <div className="w-1/2 h-full bg-white rounded-full relative group cursor-pointer">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
};

export default VolumeControl;