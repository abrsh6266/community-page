import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface PostFormProps {
  onSubmit: (title: string, body: string) => void;
  onCancel: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    onSubmit(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <Box>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        margin="normal"
      />
      <Box display="flex" justifyContent="space-between" marginTop={2}>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default PostForm;
