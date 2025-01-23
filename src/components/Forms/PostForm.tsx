import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import "../../styles/components/postForm.scss";

interface PostFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (title: string, body: string) => void;
}

const PostForm: React.FC<PostFormProps> = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    onSubmit(title, body);
    setTitle("");
    setBody("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="post-form-modal">
      <DialogTitle>Create a New Post</DialogTitle>
      <DialogContent>
        <Box className="post-form">
          <TextField
            fullWidth
            label="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Post Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            margin="normal"
            multiline
            rows={4}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PostForm;
