import { Post } from "./usePosts";
import { addReply } from "../utils/postsUtils";

export const usePostsActions = (
  posts: Post[],
  setPosts: (posts: Post[]) => void,
  setTotalPosts: (count: number) => void,
  setError: (error: string | null) => void
) => {
  const addPost = (title: string, body: string) => {
    try {
      const newPost: Post = {
        id: posts.length + 1,
        title,
        body,
        created_at: new Date().toISOString(),
        comments: [],
      };
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      setTotalPosts(updatedPosts.length);
    } catch {
      setError("Failed to add post.");
    }
  };

  const addComment = (
    postId: number,
    body: string,
    parentCommentId?: number
  ) => {
    try {
      setPosts(
        posts.map((post) => {
          if (post.id === postId) {
            if (parentCommentId) {
              return {
                ...post,
                comments: addReply(post.comments, parentCommentId, body),
              };
            }
            return {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now(),
                  body,
                  created_at: new Date().toISOString(),
                  replies: [],
                },
              ],
            };
          }
          return post;
        })
      );
    } catch {
      setError("Failed to add comment.");
    }
  };

  return { addPost, addComment };
};
