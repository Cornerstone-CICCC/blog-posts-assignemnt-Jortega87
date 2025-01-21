// App.tsx
import React, { useEffect, useState } from 'react';
import BlogPostList from './components/BlogPostList';
import Post from './components/Post';

interface PostType {
  id: number;
  title: string;
  body: string;
  author?: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (post: PostType) => {
    setSelectedPost(post);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="App">
      {selectedPost ? (
        <Post post={selectedPost} />
      ) : (
        <>
          <h1>Blog Posts</h1>
          <BlogPostList posts={posts} onPostClick={handlePostClick} />
        </>
      )}
    </div>
  );
};

export default App;
