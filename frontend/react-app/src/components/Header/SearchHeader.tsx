import { useNavigate } from 'react-router-dom';
import ArrowBackIcons from '@mui/icons-material/ArrowBack';
import Header from './Header';
import { Box, IconButton } from '@mui/material';

import SearchBox from '../Search/SearchBox';

const SearchHeader = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Header>
      <>
        <Box sx={{ mr: 5, width: '100%' }} display="flex">
          <IconButton onClick={goBack} sx={{ color: 'inherit' }}>
            <ArrowBackIcons />
          </IconButton>
          <SearchBox />
        </Box>
      </>
    </Header>
  );
};

export default SearchHeader;
