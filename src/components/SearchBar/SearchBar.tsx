import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Добавляем иконку

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
      setQuery('');
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
        autoFocus
        required
      />
      <Button type="submit" variant="contained" sx={{ marginLeft: 2 }} startIcon={<SearchIcon />}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;








