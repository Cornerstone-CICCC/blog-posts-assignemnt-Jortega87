import React from 'react';
import BlogPost from './BlogPost';

interface BlogPostListProps {
  posts: {
    id: number;
    title: string;
    body: string;
    author?: string;
  }[];
  onPostClick: (post: any) => void; 
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts, onPostClick }) => {
  return (
    <div className="blog-post-list">
      {posts.map(post => (
        <div key={post.id} onClick={() => onPostClick(post)}>
          <BlogPost post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
