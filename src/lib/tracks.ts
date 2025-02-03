export interface Track {
  id: number;
  title: string;
  artist: string;
  audioUrl: string;
  coverUrl: string;
}

// Using royalty-free music from pixabay
export const tracks: Track[] = [
  {
    id: 1,
    title: "Summer Walk",
    artist: "Olexy",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3",
    coverUrl: "https://images.unsplash.com/photo-1535478044878-3ed83d5456ef"
  },
  {
    id: 2,
    title: "Forest Lullaby",
    artist: "Lesfm",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_347701c13f.mp3",
    coverUrl: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d"
  },
  {
    id: 3,
    title: "Ambient Piano",
    artist: "SergeQuadrado",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/24/audio_c9a4a1864d.mp3",
    coverUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0"
  },
  {
    id: 4,
    title: "Lofi Study",
    artist: "FASSounds",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_946b41a605.mp3",
    coverUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81"
  },
  {
    id: 5,
    title: "Electronic Ambient",
    artist: "Coma-Media",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1a42.mp3",
    coverUrl: "https://images.unsplash.com/photo-1614149162883-504ce4d13909"
  }
];