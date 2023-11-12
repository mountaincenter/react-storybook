import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import Header from './Header';
import { Paper, Box, InputBase, IconButton } from '@mui/material';

import { client } from '../../api/client';

interface ExploreHeaderProps {
  initialValue?: string;
  onSearch?: (query: string) => void;
}

const ExploreHeader = ({ initialValue = '', onSearch }: ExploreHeaderProps) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const [, setOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputValue === '') {
      setOptions([]);
      return;
    }
    if (inputValue.startsWith('#')) {
      // Hashtag search
      client
        .get(`/hashtags/${inputValue.slice(1)}/posts`)
        .then((response) => {
          setOptions(response.data);
        })
        .catch((error) => {
          console.log('Error fetching hashtags', error);
        });
    } else {
      // General keyword search
      client
        .get(`/searches?q=${inputValue}`)
        .then((response) => {
          setOptions(response.data);
        })
        .catch((error) => {
          console.log('Error fetching searches', error);
        });
    }
  }, [inputValue]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onSearch?.(inputValue.trim());
      navigate(`/searches/${encodeURIComponent(inputValue.trim())}`);
    }
    setInputValue('');
  };

  return (
    <Header>
      <>
        <Box sx={{ mr: 6, width: '100%' }}>
          <Paper
            component="form"
            variant="outlined"
            sx={{
              BoxShadow: 'none',
              borderRadius: '9999px',
              display: 'flex',
              justifyContent: 'space-between',
              pl: 2,
              width: '100%',
            }}
          >
            <InputBase
              placeholder="キーワードを入力してください"
              inputProps={{ 'aria-label': 'search' }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              sx={{ width: 'calc(100% - 48px)' }}
            />
            <IconButton
              type="submit"
              aria-label="search"
              sx={{ p: '10px' }}
              onClick={inputValue === '' ? undefined : handleSearch}
            >
              {inputValue === '' ? <SearchIcon /> : <CancelIcon />}
            </IconButton>
          </Paper>
        </Box>
      </>
    </Header>
  );
};

export default ExploreHeader;
