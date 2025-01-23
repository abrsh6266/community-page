import { Post } from "../hooks/usePosts";

export const filterPosts = (posts: Post[], searchQuery: string): Post[] => {
  if (!searchQuery) return posts;
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );
};
