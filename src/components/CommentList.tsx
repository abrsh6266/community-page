import React from "react";
import { Box, Typography } from "@mui/material";
import { Comment } from "../hooks/usePosts";
import CommentForm from "./Forms/CommentForm";

interface CommentListProps {
  comments: Comment[];
  onAddReply: (body: string, parentCommentId: number) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onAddReply }) => {
  return (
    <Box marginLeft={4}>
      {comments.map((comment) => (
        <Box key={comment.id} marginBottom={2}>
          <Typography variant="body1">{comment.body}</Typography>
          <CommentForm onSubmit={(body) => onAddReply(body, comment.id)} />
          {comment.replies.length > 0 && (
            <CommentList comments={comment.replies} onAddReply={onAddReply} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default CommentList;
