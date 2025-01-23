import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import "../../styles/components/commentForm.scss";

interface CommentFormProps {
  onSubmit: (body: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    if (body.trim()) {
      onSubmit(body);
      setBody("");
    }
  };

  return (
    <Box className="comment-form">
      <TextField
        fullWidth
        label="Write a comment..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        margin="normal"
        size="small"
        variant="outlined"
        className="comment-input"
      />
      <Button
        variant="contained"
        size="small"
        onClick={handleSubmit}
        className="submit-button"
      >
        Submit
      </Button>
    </Box>
  );
};

export default CommentForm;
