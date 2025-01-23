// src/pages/CommunityPage.tsx
import React, { useState } from "react";
import { Container, Typography, Box, Button, Pagination } from "@mui/material";
import { usePosts, Post } from "../hooks/usePosts";

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

  const [isAddingPost, setIsAddingPost] = useState(false);

  const handleAddPost = (title: string, body: string) => {
    addPost(title, body);
    setIsAddingPost(false);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Community Page
      </Typography>

      {/* Error/Loading State */}
      {error && <Typography color="error">{error}</Typography>}
      {loading && <Typography>Loading posts...</Typography>}

      {/* Post Form */}
      {isAddingPost ? (
        <PostForm
          onSubmit={handleAddPost}
          onCancel={() => setIsAddingPost(false)}
        />
      ) : (
        <Box display="flex" justifyContent="center" marginY={2}>
          <Button variant="contained" onClick={() => setIsAddingPost(true)}>
            Create New Post
          </Button>
        </Box>
      )}

      {/* Post List */}
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} onAddComment={addComment} />
      ))}

      {/* Pagination */}
      <Box display="flex" justifyContent="center" marginY={4}>
        <Pagination
          count={Math.ceil(totalPosts / limit)}
          page={currentPage}
          onChange={(_, page) => changePage(page)}
        />
      </Box>
    </Container>
  );
};

export default CommunityPage;
