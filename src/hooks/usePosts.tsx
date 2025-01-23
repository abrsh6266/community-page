import { useEffect, useMemo } from "react";
import { usePostsState } from "./usePostsState";
import { usePostsActions } from "./usePostsActions";
import mockPosts from "../mock/posts.json";
import { filterPosts } from "../utils/filterUtils";

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
  const {
    posts,
    setPosts,
    currentPage,
    setCurrentPage,
    limit,
    setLimit,
    totalPosts,
    setTotalPosts,
    searchQuery,
    setSearchQuery,
    loading,
    setLoading,
    error,
    setError,
  } = usePostsState();

  const { addPost, addComment } = usePostsActions(
    posts,
    setPosts,
    setTotalPosts,
    setError
  );

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
  }, [setPosts, setError, setLoading, setTotalPosts]);

  const filteredPosts = useMemo(
    () => filterPosts(posts, searchQuery),
    [posts, searchQuery]
  );

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, currentPage, limit]);

  const changePage = (page: number) => {
    if (page > 0 && page <= Math.ceil(totalPosts / limit)) {
      setCurrentPage(page);
    }
  };

  const changeLimit = (newLimit: number) => {
    setLimit(newLimit);
    setCurrentPage(1);
  };

  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
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
    updateSearchQuery,
  };
};
