import { Divider, Grid, Typography } from '@mui/material';

import PostList from '../Post/PostList';
import UserList from '../User/UserList';

import type { Post, User } from '../../interfaces';

interface SearchListProps {
  users: User[];
  posts: Post[];
}

const SearchList = ({ users, posts }: SearchListProps) => {
  console.log(posts);
  return (
    <>
      <Grid container direction="column" sx={{ mt: 2 }}>
        {users && users.length > 0 && (
          <>
            <Grid item>
              <Typography>ユーザー</Typography>
            </Grid>
            <Grid item>
              <UserList users={users as User[]} />
            </Grid>
          </>
        )}
        <Grid item>
          <Divider />
        </Grid>
        {posts && posts.length > 0 && (
          <>
            <Grid item>
              <Typography>ポスト</Typography>
            </Grid>
            <Grid item>
              <PostList posts={posts as Post[]} />
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default SearchList;
