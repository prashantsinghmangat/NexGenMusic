import Header from "@/components/Header";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-player-background text-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-32">
        <section className="animate-fade-in">
          <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-player-surface p-4 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
              >
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Album Cover"
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <h3 className="font-medium group-hover:text-player-primary transition-colors">Track {i + 1}</h3>
                <p className="text-sm text-white/60">Artist Name</p>
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