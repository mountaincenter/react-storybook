import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import { client } from '../../api/client';

const SearchBox: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const [inputValue, setInputValue] = useState<string>(query || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      setInputValue(decodeURIComponent(query));
    }
  }, [query]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInputValue = inputValue.trim();
    if (!trimmedInputValue) return;
    try {
      if (trimmedInputValue.startsWith('#')) {
        // Hashtag search
        await client.get(`/hashtags/${trimmedInputValue.slice(1)}/posts`);
      } else {
        // General keyword search
        await client.get(`/searches?q=${trimmedInputValue}`);
      }
      navigate(`/searches/${encodeURIComponent(trimmedInputValue)}`);
      setInputValue('');
    } catch (error) {
      console.log('Error fetching searches', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCancelClick = () => {
    setInputValue('');
  };

  return (
    <Paper
      component="form"
      variant="outlined"
      sx={{
        boxShadow: 'none',
        borderRadius: '9999px',
        display: 'flex',
        justifyContent: 'space-between',
        pl: 2,
        width: '100%',
      }}
      onSubmit={handleSearch}
    >
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        value={inputValue}
        onChange={handleInputChange}
      />
      <IconButton
        sx={{ p: '10px' }}
        aria-label="cancel"
        onClick={handleCancelClick}
      >
        <CancelIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBox;
