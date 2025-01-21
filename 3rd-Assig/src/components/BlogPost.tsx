import React from 'react';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    body: string;
    author?: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p><em>By: {post.author || 'Unknown'}</em></p>
    </div>
  );
};

export default BlogPost;
