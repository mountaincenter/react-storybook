import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import SearchHeader from '../components/Header/SearchHeader';
import SearchList from '../components/Search/SearchList';

import { useSearches } from '../hooks/search/useSearches';
import type { User, Post } from '../interfaces';

const Searches = () => {
  const { query: urlQuery } = useParams<{ query: string }>();
  const [searchQuery, setSearchQuery] = useState<string>(
    urlQuery ? decodeURIComponent(urlQuery) : ''
  );
  const location = useLocation();

  const { users, posts } = useSearches(searchQuery);

  useEffect(() => {
    if (urlQuery) {
      setSearchQuery(decodeURIComponent(urlQuery));
    }
  }, [urlQuery]);

  console.log('posts', posts);

  return (
    <>
      <SearchHeader initialValue={searchQuery} onSearch={setSearchQuery} />
      <Grid
        container
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <SearchList users={users as User[]} posts={posts as Post[]} />
        </Grid>
      </Grid>
    </>
  );
};

export default Searches;
