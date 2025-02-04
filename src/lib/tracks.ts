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
  },
  {
    id: 6,
    title: "Cinematic Dreams",
    artist: "SergePavkinMusic",
    audioUrl: "https://cdn.pixabay.com/download/audio/2023/06/29/audio_7631be971d.mp3",
    coverUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1"
  },
  {
    id: 7,
    title: "Calm Piano",
    artist: "MusicLFiles",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe92c21.mp3",
    coverUrl: "https://images.unsplash.com/photo-1552422535-c45813c61732"
  },
  {
    id: 8,
    title: "Inspiring Ambient",
    artist: "AudioCoffee",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3",
    coverUrl: "https://images.unsplash.com/photo-1519638399535-1b036603ac77"
  }
];