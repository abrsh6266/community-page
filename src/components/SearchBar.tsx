import React from "react";
import { TextField, Box } from "@mui/material";
import "../styles/components/SearchBar.scss";

const SearchBar: React.FC<{
  onChange: (query: string) => void;
}> = ({ onChange }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box className="search-bar">
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search posts..."
        onChange={handleSearchChange}
      />
    </Box>
  );
};

export default SearchBar;
