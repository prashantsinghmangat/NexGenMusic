import { Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-player-background/95 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 text-white/80 hover:text-white cursor-pointer" />
          <Link to="/" className="text-xl font-bold text-white">NexGenMusic</Link>
        </div>
        <div className="relative max-w-md w-full hidden md:block">
          <input
            type="text"
            placeholder="Search songs, artists..."
            className="w-full bg-player-surface/50 text-white rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-player-primary"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
        </div>
        <div className="flex items-center gap-4">
          <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
            Blog
          </Link>
          <a
            href="https://prashantsinghmangat.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            About Prashant Singh
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;