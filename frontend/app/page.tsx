"use client";

import { useEffect, useState } from "react";
import { Post } from "../typings";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_GHOST_API_URL}/posts/?key=${process.env.NEXT_PUBLIC_GHOST_API_KEY}`
      );
      const data = await response.json();
      setPosts(data.posts);
    }

    fetchPosts().catch(console.error);
  }, []);

  return (
    <div>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
