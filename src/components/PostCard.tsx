import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Post } from "../hooks/usePosts";
import CommentList from "./CommentList";
import CommentForm from "./Forms/CommentForm";

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
    <Card variant="outlined" style={{ marginBottom: "16px" }}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body1" color="textSecondary">
          {post.body}
        </Typography>

        {/* Comments */}
        <Box marginTop={2}>
          <CommentList comments={post.comments} onAddReply={handleAddComment} />
          <CommentForm onSubmit={handleAddComment} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
