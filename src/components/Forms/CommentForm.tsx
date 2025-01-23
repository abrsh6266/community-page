import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface CommentFormProps {
  onSubmit: (body: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    onSubmit(body);
    setBody("");
  };

  return (
    <Box marginTop={1}>
      <TextField
        fullWidth
        label="Add a Comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        margin="normal"
        size="small"
      />
      <Button variant="contained" size="small" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default CommentForm;
