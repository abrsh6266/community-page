import { useState, useEffect } from "react";
import mockPosts from "../mock/posts.json";

export interface Reply {
  id: number;
  body: string;
  created_at: string;
  replies: Reply[];
}

export interface Comment {
  id: number;
  body: string;
  created_at: string;
  replies: Reply[];
}

export interface Post {
  id: number;
  title: string;
  body: string;
  created_at: string;
  comments: Comment[];
}

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPosts, setTotalPosts] = useState(0);
  const [paginatedPosts, setPaginatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        await new Promise((res) => setTimeout(res, 500));
        setPosts(
          mockPosts.map((post) => ({
            ...post,
            created_at: new Date().toISOString(),
            comments: post.comments.map((comment) => ({
              ...comment,
              created_at: new Date().toISOString(),
              replies: comment.replies.map((reply) => ({
                ...reply,
                created_at: new Date().toISOString(),
              })),
            })),
          }))
        );
        setTotalPosts(mockPosts.length);
      } catch {
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    setPaginatedPosts(posts.slice(startIndex, endIndex));
  }, [posts, currentPage, limit]);

  const addReply = (
    comments: Comment[],
    commentId: number,
    body: string
  ): Comment[] => {
    return comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: Date.now(),
              body,
              created_at: new Date().toISOString(),
              replies: [],
            },
          ],
        };
      }
      return {
        ...comment,
        replies: addReply(comment.replies, commentId, body),
      };
    });
  };

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

  const changePage = (page: number) => {
    if (page > 0 && page <= Math.ceil(totalPosts / limit)) {
      setCurrentPage(page);
    }
  };

  const changeLimit = (newLimit: number) => {
    setLimit(newLimit);
    setCurrentPage(1);
  };

  return {
    posts: paginatedPosts,
    totalPosts,
    currentPage,
    limit,
    loading,
    error,
    addPost,
    addComment,
    changePage,
    changeLimit,
  };
};
