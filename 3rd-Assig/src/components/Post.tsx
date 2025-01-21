import React from 'react';

interface PostProps {
  post: {
    title: string;
    body: string;
    author?: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p><em>By: {post.author || 'Unknown'}</em></p>
    </div>
  );
};

export default Post;
