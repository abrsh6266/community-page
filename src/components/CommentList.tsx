import React from "react";
import { Box, Typography } from "@mui/material";
import { Comment } from "../hooks/usePosts";
import CommentForm from "./Forms/CommentForm";
import "../styles/components/comment.scss";

interface CommentListProps {
  comments: Comment[];
  onAddReply: (body: string, parentCommentId: number) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onAddReply }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Box key={comment.id} className="comment-item">
          <Typography className="comment-body">{comment.body}</Typography>
          <Typography variant="caption" className="comment-created-at">
            {new Date(comment.created_at).toLocaleString()}
          </Typography>
          <CommentForm onSubmit={(body) => onAddReply(body, comment.id)} />
          {comment.replies.length > 0 && (
            <CommentList comments={comment.replies} onAddReply={onAddReply} />
          )}
        </Box>
      ))}
    </div>
  );
};

export default CommentList;
