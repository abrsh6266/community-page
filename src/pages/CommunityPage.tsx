import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Pagination,
  Paper,
} from "@mui/material";
import { usePosts, Post } from "../hooks/usePosts";
import PostForm from "../components/Forms/PostForm";
import PostCard from "../components/PostCard";
import Loading from "../components/Loading";
import "../styles/globals.scss";

const CommunityPage: React.FC = () => {
  const {
    posts,
    totalPosts,
    currentPage,
    limit,
    loading,
    error,
    addPost,
    addComment,
    changePage,
  } = usePosts();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, body: string) => {
    addPost(title, body);
    setIsModalOpen(false);
  };

  return (
    <Container maxWidth="lg" className="community-page">
      {/* Hero Section */}
      <Paper className="hero-section" elevation={3}>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to the Community!
        </Typography>
        <Typography variant="subtitle1" align="center">
          Share your thoughts, engage in discussions, and connect with others.
        </Typography>
      </Paper>

      {/* Error/Loading State */}
      {error && <Typography color="error">{error}</Typography>}
      {loading && <Loading />}

      {/* Post Form Button */}
      <Box display="flex" justifyContent="end" marginY={3}>
        <Button
          variant="contained"
          size="large"
          onClick={() => setIsModalOpen(true)}
        >
          Create New Post
        </Button>
      </Box>

      {/* Post Form Modal */}
      <PostForm
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      {/* Post List */}
      <Box className="post-list">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} onAddComment={addComment} />
        ))}
      </Box>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" marginY={4}>
        <Pagination
          count={Math.ceil(totalPosts / limit)}
          page={currentPage}
          onChange={(_, page) => changePage(page)}
        />
      </Box>

      {/* Footer */}
      <Box className="footer" marginTop={6}>
        <Typography variant="caption" align="center" display="block">
          © 2025 Community Page. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default CommunityPage;
