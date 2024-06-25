"use client";

import { useEffect, useState } from "react";
import { Post } from "../typings";
import BlogList from "@/components/BlogList";

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
      
         <BlogList posts={posts} />
      
    </div>
  );
};

export default Home;
