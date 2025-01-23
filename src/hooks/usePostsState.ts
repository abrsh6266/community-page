import { useState } from "react";
import { Post } from "./usePosts";

export const usePostsState = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPosts, setTotalPosts] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return {
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
  };
};
