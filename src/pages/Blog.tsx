const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Music Streaming",
      date: "2024-02-20",
      excerpt: "How digital platforms have transformed the way we consume music...",
      content: "Music streaming has revolutionized the industry in countless ways. From vinyl records to digital downloads, and now to streaming services, the journey has been remarkable...",
    },
    {
      id: 2,
      title: "Top Music Production Tools in 2024",
      date: "2024-02-15",
      excerpt: "A comprehensive guide to the best music production software...",
      content: "Whether you're a beginner or a professional producer, having the right tools is essential. Here's our curated list of the best music production software available today...",
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 pt-24 pb-32">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-player-surface/30 rounded-lg p-6 hover:bg-player-surface/40 transition-colors">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <time className="text-sm text-white/60 mb-4 block">{post.date}</time>
              <p className="text-white/80 mb-4">{post.excerpt}</p>
              <p className="text-white/70">{post.content}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;