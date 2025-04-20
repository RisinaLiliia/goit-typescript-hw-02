import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" justifyContent="center" mt={4}>
      <TextField
        label="Search for images"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" sx={{ marginLeft: 2 }}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;







