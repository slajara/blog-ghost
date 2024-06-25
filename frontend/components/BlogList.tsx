import { Post } from "@/typings";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#F7Ab0A] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold">{post.title} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
