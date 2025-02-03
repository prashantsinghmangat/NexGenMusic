import { useState } from "react";
import Header from "@/components/Header";
import MusicPlayer from "@/components/MusicPlayer";
import { tracks } from "@/lib/tracks";
import { useAudio } from "@/contexts/AudioContext";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { play, currentTrack } = useAudio();

  const filteredTracks = tracks.filter(
    track =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-32">
        <div className="max-w-xl mx-auto mb-8">
          <Input
            type="search"
            placeholder="Search tracks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
        </div>

        <section className="animate-fade-in">
          <h2 className="text-2xl font-bold mb-6">All Tracks</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredTracks.map((track) => (
              <div
                key={track.id}
                onClick={() => play(track)}
                className={`bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group ${
                  currentTrack?.id === track.id ? "ring-2 ring-white/20" : ""
                }`}
              >
                <img
                  src={track.coverUrl}
                  alt={`${track.title} Cover`}
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <h3 className="font-medium group-hover:text-white/90 transition-colors">
                  {track.title}
                </h3>
                <p className="text-sm text-white/60">{track.artist}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <MusicPlayer />
    </div>
  );
};

export default Index;