import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import { Post } from "../hooks/usePosts";
import CommentList from "./CommentList";
import CommentForm from "./Forms/CommentForm";
import "../styles/components/post.scss";

interface PostCardProps {
  post: Post;
  onAddComment: (
    postId: number,
    body: string,
    parentCommentId?: number
  ) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onAddComment }) => {
  const handleAddComment = (body: string, parentCommentId?: number) => {
    onAddComment(post.id, body, parentCommentId);
  };

  return (
    <Box className="post-card">
      <Typography variant="h5" className="post-title">
        {post.title}
      </Typography>
      <Typography variant="body1" className="post-body">
        {post.body}
      </Typography>
      <Typography variant="caption" className="post-created-at">
        Posted on: {new Date(post.created_at).toLocaleString()}
      </Typography>

      <Divider className="divider" />

      <div className="comments-section">
        <Typography variant="h6" className="comments-header">
          Comments
        </Typography>
        <CommentList comments={post.comments} onAddReply={handleAddComment} />
        <CommentForm onSubmit={handleAddComment} />
      </div>
    </Box>
  );
};

export default PostCard;
